import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

export interface GlobeMarker {
  location: [number, number]
  size?: number
  label?: string
}

interface GlobeProps {
  markers?: GlobeMarker[]
  className?: string
  speed?: number
  markerColor?: [number, number, number]
  glowColor?: [number, number, number]
  baseColor?: [number, number, number]
  phi?: number
}

const defaultMarkers: GlobeMarker[] = [
  { location: [28.47, 77.03],  size: 0.06, label: "India" },
  { location: [6.93,  79.85],  size: 0.05, label: "Sri Lanka" },
  { location: [23.72, 90.41],  size: 0.05, label: "Bangladesh" },
  { location: [31.23, 121.47], size: 0.05, label: "China" },
  { location: [-20.16, 57.50], size: 0.045, label: "Mauritius" },
  { location: [-18.91, 47.54], size: 0.045, label: "Madagascar" },
]

export function Globe({
  markers = defaultMarkers,
  className = "",
  speed = 0.004,
  markerColor = [0.976, 0.451, 0.086],
  glowColor  = [0.25, 0.12, 0.02],
  baseColor  = [0.15, 0.15, 0.15],
  phi: initialPhi = 0.9,
}: GlobeProps) {
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const dragging    = useRef<{ x: number } | null>(null)
  const dragDelta   = useRef(0)
  const phiOffset   = useRef(0)
  const phiRef      = useRef(0)

  const onDown = useCallback((e: React.PointerEvent) => {
    dragging.current = { x: e.clientX }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
  }, [])

  const onUp = useCallback(() => {
    if (dragging.current) {
      phiOffset.current += dragDelta.current
      dragDelta.current = 0
    }
    dragging.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
  }, [])

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (dragging.current) dragDelta.current = (e.clientX - dragging.current.x) / 280
    }
    window.addEventListener("pointermove", move, { passive: true })
    window.addEventListener("pointerup", onUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerup", onUp)
    }
  }, [onUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animId: number

    function init() {
      const w = canvas.offsetWidth
      if (w === 0 || globe) return
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: w, height: w,
        phi: initialPhi, theta: 0.28,
        dark: 1, diffuse: 1.6,
        mapSamples: 20000, mapBrightness: 9,
        baseColor, markerColor, glowColor,
        markers: markers.map(m => ({ location: m.location, size: m.size ?? 0.05 })),
      })

      function animate() {
        if (!dragging.current) phiRef.current += speed
        globe!.update({
          phi:   phiRef.current + phiOffset.current + dragDelta.current,
          theta: 0.28,
        })
        animId = requestAnimationFrame(animate)
      }
      animate()
      // Fade in
      setTimeout(() => { if (canvas) canvas.style.opacity = "1" })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver(entries => {
        if (entries[0]?.contentRect.width > 0) { ro.disconnect(); init() }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animId) cancelAnimationFrame(animId)
      if (globe) globe.destroy()
    }
  }, [markers, speed, initialPhi, markerColor, glowColor, baseColor])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={onDown}
        style={{
          width: "100%", height: "100%",
          cursor: "grab", opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
    </div>
  )
}
