export const SERVICES = [
  {
    id: '01',
    title: 'Product Innovation and Design',
    body: 'An organic design capability through an in-house design studio and craft centre managed by three designers and over 30 artisans. Our design teams analyse trends and create specific collections for each customer, bringing newness and trend to supplement your in-house design efforts.',
  },
  {
    id: '02',
    title: 'Technical and Quality Control',
    body: 'The role of our technical team extends beyond patterns and fits — we impart training at factory level. Quality assurance through shop floor excellence, including introduction and sustaining of SOPs and a series of inspections: Pilot, Inline, Midline, and Final.',
  },
  {
    id: '03',
    title: 'HR and Social Compliance',
    body: 'Working collaboratively with your standards of engagement and monitoring guidelines, we ensure every factory we partner with meets the highest standards of social accountability and ethical production practices.',
  },
  {
    id: '04',
    title: 'Speed to Market',
    body: 'Streamlining factory processes to shorten lead times and execute trend infusions. Our on-the-ground teams in each manufacturing country allow us to move faster without ever compromising quality.',
  },
  {
    id: '05',
    title: 'Cross-Functional Expertise',
    body: 'For a product to reach stores on short lead times, merchandise must flow seamlessly across the globe. Whether fabric, trims, treatments, or logistics — our ability to orchestrate the supply chain ensures you receive merchandise on time.',
  },
  {
    id: '06',
    title: 'Communication',
    body: 'Communication is the heart of our business. That is why we maintain operations in each country where we manufacture. In a highly competitive industry, producing without facing issues is not possible — the only effective strategy is continuous, well-organised communication.',
  },
  {
    id: '07',
    title: 'Cost Optimization',
    body: 'We drive competitive pricing with suppliers based on actual cost inputs, providing clients with transparent cost alternatives and savings opportunities — without sacrificing product integrity.',
  },
]

export const PORTFOLIO = [
  { id: 1,  title: 'Womenswear Collection',    cat: 'Apparel',     img: import.meta.env.BASE_URL + 'portfolio-womenswear.jpg' },
  { id: 2,  title: "Men's Bottoms",             cat: 'Apparel',     img: import.meta.env.BASE_URL + 'portfolio-mens-bottoms.jpg' },
  { id: 3,  title: "Men's Rugby Knitwear",      cat: 'Apparel',     img: import.meta.env.BASE_URL + 'portfolio-rugby.jpg' },
  { id: 4,  title: 'Printed Summer Dresses',    cat: 'Apparel',     img: import.meta.env.BASE_URL + 'portfolio-dresses.jpg' },
  { id: 5,  title: 'Tailored Womenswear',       cat: 'Apparel',     img: import.meta.env.BASE_URL + 'portfolio-tailored.jpg' },
  { id: 6,  title: 'Casual Coordinates',        cat: 'Apparel',     img: import.meta.env.BASE_URL + 'portfolio-casual.jpg' },
  { id: 7,  title: 'Scarves and Accessories',   cat: 'Accessories', img: import.meta.env.BASE_URL + 'portfolio-scarves.jpg' },
  { id: 8,  title: 'Jewellery Collection',      cat: 'Accessories', img: import.meta.env.BASE_URL + 'portfolio-jewellery.jpg' },
  { id: 9,  title: 'Belts and Small Leather',   cat: 'Accessories', img: import.meta.env.BASE_URL + 'portfolio-belts.jpg' },
  { id: 10, title: 'Leather Handbags',          cat: 'Leather',     img: import.meta.env.BASE_URL + 'portfolio-handbags.jpg' },
  { id: 11, title: 'Footwear',                  cat: 'Leather',     img: import.meta.env.BASE_URL + 'portfolio-footwear.jpg' },
  { id: 12, title: 'Leather Gloves and Caps',   cat: 'Leather',     img: import.meta.env.BASE_URL + 'portfolio-gloves.jpg' },
  { id: 13, title: 'Home Textiles',             cat: 'Home',        img: import.meta.env.BASE_URL + 'portfolio-home.jpg' },
  { id: 14, title: 'Bedding and Cushions',      cat: 'Home',        img: import.meta.env.BASE_URL + 'portfolio-bedding.jpg' },
  { id: 15, title: 'Table Linen',               cat: 'Home',        img: import.meta.env.BASE_URL + 'portfolio-linen.jpg' },
  { id: 16, title: 'Organic Cotton Basics',     cat: 'Sustainable', img: import.meta.env.BASE_URL + 'portfolio-organic.jpg' },
  { id: 17, title: 'Recycled Outerwear',        cat: 'Sustainable', img: import.meta.env.BASE_URL + 'portfolio-recycle.jpg' },
  { id: 18, title: 'Natural Dye Collection',    cat: 'Sustainable', img: import.meta.env.BASE_URL + 'portfolio-naturaldye.jpg' },
  { id: 19, title: 'Low-impact Knitwear',       cat: 'Sustainable', img: import.meta.env.BASE_URL + 'portfolio-knitwear.jpg' },
  { id: 20, title: 'Transitional Womenswear',   cat: 'Apparel',     img: import.meta.env.BASE_URL + 'portfolio-transitional.jpg' },
]

export const FILTERS = ['All', 'Apparel', 'Accessories', 'Leather', 'Home', 'Sustainable']

export const BRAND_LOGOS = [
  { name: 'All Saints',        domain: 'allsaints.com',        initials: 'AS'  },
  { name: 'French Connection', domain: 'frenchconnection.com', initials: 'FC'  },
  { name: 'Banana Republic',   domain: 'bananarepublic.com',   initials: 'BR'  },
  { name: 'Kellwood',          domain: 'kellwood.com',         initials: 'KW'  },
  { name: 'Gap',               domain: 'gap.com',              initials: 'GAP' },
  { name: 'Old Navy',          domain: 'oldnavy.com',          initials: 'ON'  },
  { name: 'Adidas',            domain: 'adidas.com',           initials: 'ADI' },
  { name: 'Reebok',            domain: 'reebok.com',           initials: 'RBK' },
  { name: 'Nordstrom',         domain: 'nordstrom.com',        initials: 'N'   },
  { name: "Dillard's",         domain: 'dillards.com',         initials: 'D'   },
  { name: 'New Look',          domain: 'newlook.com',          initials: 'NL'  },
  { name: 'Needle & Thread',   domain: 'needle-thread.com',    initials: 'N&T' },
] as const

export const COUNTRIES = ['India', 'Sri Lanka', 'Bangladesh', 'China', 'Mauritius', 'Madagascar']

export const TICKER = [
  'Quality', 'Margin', 'On-Time', 'India', 'Sri Lanka', 'Bangladesh',
  'China', 'Mauritius', 'Madagascar', 'Design', 'Technical', 'Compliance',
  'Speed to Market', 'Sustainable', 'Quality', 'Margin', 'On-Time',
  'India', 'Sri Lanka', 'Bangladesh', 'China', 'Mauritius', 'Madagascar', 'Design',
]
