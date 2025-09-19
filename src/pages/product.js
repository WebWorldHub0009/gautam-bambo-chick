// src/data/products.js
import bambooJafhari from "../assets/product/jaf.jpg";
import dwali from "../assets/product/dchick.jpg"
import kabutar from "../assets/product/pigeon.jpg"
import roller from "../assets/product/pigeon.jpg"
import bambo from "../assets/product/hut.jpg"
import fchick from "../assets/product/fchick.jpg"
// 👉 Update image paths accordingly for each product

const products = [
  {
    title: "Bamboo Jafhari",
    slug: "bamboo-jafhari",
    imgSrc: bambooJafhari,
    heading: "Strength Meets Nature – Premium Bamboo Jafhari",
    quote: "Crafted by nature, perfected by tradition.",
    description: `Our Bamboo Jafhari represents the perfect balance of strength and sustainability. 
    Handcrafted from high-quality bamboo, it is designed to endure years of use without losing its 
    rustic appeal. Its natural strength makes it ideal for farms, construction projects, fencing, 
    and outdoor decoration. With weather-resistant treatment and expert craftsmanship, each piece 
    brings long-lasting reliability and a timeless touch of nature.`,
    features: [
      "Strong and durable handcrafted bamboo design",
      "Weather-resistant and long-lasting",
      "Eco-friendly alternative to synthetic fencing",
      "Rustic and aesthetic appearance",
      "Naturally treated to resist pests and moisture",
      "Handwoven by skilled local artisans"
    ],
    uses: [
      "Farm and garden fencing",
      "Construction support structures",
      "Animal enclosures and sheds",
      "Outdoor decoration for rustic aesthetics",
      "Eco-friendly wall panels and partitions"
    ],
    whyChooseUs: `Unlike synthetic fencing that harms the environment, our Bamboo Jafhari offers a 
    sustainable solution with unmatched durability. Every piece is carefully handwoven and naturally 
    treated, ensuring you get not just a product, but a promise of strength, elegance, and eco-friendliness.`
  },
  {
    title: "Design Wali Chick",
    slug: "design-wali-chick",
    imgSrc: dwali,
    heading: "Elegance in Every Weave – Design Wali Chick",
    quote: "Where tradition meets artistry.",
    description: `Our Design Wali Chick is a masterpiece of craftsmanship and artistry. 
    Featuring intricate weaves and elegant bamboo designs, it elevates interiors while controlling 
    light, privacy, and ventilation. Ideal for both modern and traditional homes, this chick adds 
    a luxurious and artistic touch to your living spaces.`,
    features: [
      "Intricate handwoven bamboo patterns",
      "Premium aesthetic appeal for homes and offices",
      "Durable yet lightweight design",
      "Easy installation and maintenance",
      "Variety of patterns and custom sizes available",
      "Long-lasting natural polish finish"
    ],
    uses: [
      "Interior and exterior window blinds",
      "Room dividers and stylish partitions",
      "Decorative wall coverings",
      "Eco-friendly replacement for synthetic curtains",
      "Hotels, restaurants, and cafes for a traditional vibe"
    ],
    whyChooseUs: `We merge heritage craftsmanship with modern-day artistry. Every design wali chick 
    is woven by experienced artisans who ensure every detail reflects elegance. Choosing us means 
    choosing timeless tradition combined with luxury design.`
  },
  {
    title: "Kabutar Jali",
    slug: "kabutar-jali",
    imgSrc: kabutar,
    heading: "Protection with Purpose – Premium Kabutar Jali",
    quote: "Secure your space while keeping nature close.",
    description: `The Kabutar Jali is more than just a protective barrier – it is a combination of 
    strength, breathability, and natural beauty. Designed to safeguard your spaces from birds and 
    pigeons, it allows natural airflow and light while preventing unwanted entry. Its eco-friendly 
    composition makes it a sustainable alternative to harmful plastic meshes.`,
    features: [
      "Premium bamboo weaving with strong durability",
      "Allows natural airflow and sunlight",
      "Prevents bird entry and property damage",
      "Eco-friendly and sustainable material",
      "Hand-polished finish for extended durability",
      "Customizable for balconies, terraces, and farms"
    ],
    uses: [
      "Terrace and balcony covering",
      "Poultry protection for farms",
      "Outdoor sheds and ventilation-friendly enclosures",
      "Gardens and greenhouses",
      "Urban spaces to prevent pigeon intrusion"
    ],
    whyChooseUs: `Our Kabutar Jali blends practicality with eco-consciousness. Unlike plastic nets 
    that harm the environment, our bamboo solution gives you safety, durability, and elegance, while 
    letting your space breathe naturally.`
  },
  {
    title: "Roller Blind",
    slug: "roller-blind",
    imgSrc: roller,
    heading: "Smooth Functionality – Bamboo Roller Blinds",
    quote: "Effortless style, everyday comfort.",
    description: `Our Bamboo Roller Blinds are the epitome of functional luxury. Designed with smooth 
    rolling mechanisms, they are easy to operate and enhance interiors with a warm, natural aesthetic. 
    Perfect for both residential and commercial spaces, they provide shade, privacy, and a touch of 
    eco-conscious elegance.`,
    features: [
      "Smooth roll-up mechanism for ease of use",
      "Durable bamboo material with a premium finish",
      "Provides shade and natural cooling",
      "Enhances interior aesthetics",
      "Eco-friendly and sustainable",
      "Custom sizes and finishes available"
    ],
    uses: [
      "Homes, cafes, and restaurants",
      "Balconies and verandas",
      "Office interiors for premium ambiance",
      "Eco-friendly replacements for synthetic blinds"
    ],
    whyChooseUs: `Our Bamboo Roller Blinds are not mass-produced but carefully handcrafted for 
    smooth operation and timeless appeal. Choosing us means choosing functionality, elegance, and 
    environmental responsibility.`
  },
  {
    title: "Bamboo Huts",
    slug: "bamboo-huts",
    imgSrc: bambo,
    heading: "Nature’s Shelter – Handcrafted Bamboo Huts",
    quote: "Reconnect with simplicity and sustainability.",
    description: `Our Bamboo Huts are designed to bring you closer to nature. Each hut is handcrafted 
    with precision, offering durability and rustic beauty. Whether it’s a farmhouse, resort, or garden, 
    these huts create an eco-friendly space where comfort meets tradition.`,
    features: [
      "Strong and weather-resistant bamboo structure",
      "Eco-friendly natural materials",
      "Customizable designs and sizes",
      "Handcrafted by skilled artisans",
      "Blends seamlessly into natural landscapes",
      "Sustainable and long-lasting solution"
    ],
    uses: [
      "Farmhouses and resorts",
      "Outdoor seating and resting areas",
      "Eco-friendly homestays",
      "Garden shelters and shade structures",
      "Event spaces with rustic design"
    ],
    whyChooseUs: `Our Bamboo Huts are more than just constructions – they are experiences. We 
    combine traditional building techniques with modern customization, giving you durable shelters 
    that help you reconnect with nature while being sustainable.`
  },
  {
    title: "Bird Net & Fancy Chick Maker",
    slug: "bird-net-fancy-chick-maker",
    imgSrc: fchick,
    heading: "Secure & Stylish – Bird Net and Fancy Chick Maker",
    quote: "Safety with elegance, crafted in bamboo.",
    description: `Our Bird Nets and Fancy Chick Makers combine security with aesthetics. Designed 
    for farms and homes alike, they ensure bird and poultry safety while doubling as stylish 
    decorative elements. They’re lightweight, durable, and eco-friendly, making them a practical 
    yet elegant choice.`,
    features: [
      "Eco-friendly bird nets with strong weaving",
      "Decorative chick makers with unique designs",
      "Lightweight and durable for easy handling",
      "Handcrafted with attention to detail",
      "Weather-resistant and long-lasting",
      "Available in custom sizes and styles"
    ],
    uses: [
      "Bird and poultry protection",
      "Stylish home and farm décor",
      "Outdoor fencing and partition solutions",
      "Balcony safety nets with natural aesthetics"
    ],
    whyChooseUs: `We bring innovation by blending utility and beauty. Our Bird Net & Fancy Chick 
    Makers are designed to keep your space protected while enhancing its visual charm. Every piece 
    is a testimony to skilled craftsmanship and eco-conscious living.`
  }
];

export default products;
