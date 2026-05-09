export type ListingType = 'For Sale' | 'For Rent';

export interface Property {
  id: number;
  name: string;
  description: string;
  type: ListingType;
  image: string;
  beds: number;
  baths: number;
  area: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const featuredProperty: Property = {
  id: 0,
  name: 'Azure heights',
  description:
    'Luxury waterfront apartment offering modern interiors, panoramic views, smart amenities,…',
  type: 'For Sale',
  image: '/images/img_component_1.svg',
  beds: 4,
  baths: 3,
  area: '4,200 sq.ft',
};

export const properties: Property[] = [
  {
    id: 1,
    name: 'Lakeside manor',
    description:
      'Elegant lakeside home offering privacy, spacious interiors, and tranquil residential…',
    type: 'For Sale',
    image: '/images/img_4033599021.svg',
    beds: 5,
    baths: 4,
    area: '7,100 sq.ft',
  },
  {
    id: 2,
    name: 'Palm residence',
    description:
      'Elegant city residence designed for premium living, strong rental demand, and…',
    type: 'For Rent',
    image: '/images/img_3354701611.svg',
    beds: 3,
    baths: 2,
    area: '3,800 sq.ft',
  },
  {
    id: 3,
    name: 'Crestview villa',
    description:
      'Spacious luxury villa offering privacy, premium finishes, and exceptional comfort',
    type: 'For Sale',
    image: '/images/img_4130127678.svg',
    beds: 5,
    baths: 5,
    area: '6,200 sq.ft',
  },
  {
    id: 4,
    name: 'Harbor point',
    description:
      'Modern coastal apartment combining scenic views, efficient layouts, and lifestyle-',
    type: 'For Rent',
    image: '/images/img_3005336362.svg',
    beds: 3,
    baths: 3,
    area: '3,600 sq.ft',
  },
  {
    id: 5,
    name: 'Summit court',
    description:
      'High-end residential property offering strong investment returns and sophisticated',
    type: 'For Sale',
    image: '/images/img_942143898.svg',
    beds: 4,
    baths: 4,
    area: '4,900 sq.ft',
  },
  {
    id: 6,
    name: 'Nova square',
    description:
      'Contemporary city apartment built for convenience, efficiency, and strong rental…',
    type: 'For Rent',
    image: '/images/img_social_link.svg',
    beds: 3,
    baths: 2,
    area: '3,950 sq.ft',
  },
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'How can I buy a property through Estatix?',
    answer:
      'You can browse listings, schedule visits, and get expert guidance throughout the buying process with ease.',
  },
  {
    id: 2,
    question: 'How do I sell my property quickly?',
    answer:
      'We connect you with qualified buyers fast by showcasing your property to thousands of active searchers through our platform.',
  },
  {
    id: 3,
    question: 'Can I manage rental properties with your platform?',
    answer:
      'Yes, our platform supports full rental management including tenant screening, lease management, and payment tracking.',
  },
  {
    id: 4,
    question: 'Are your property listings updated regularly?',
    answer:
      'All listings are verified and updated in real time to ensure you always have access to the most accurate property information.',
  },
  {
    id: 5,
    question: 'Do you offer assistance for first-time buyers?',
    answer:
      'Absolutely. We have dedicated support agents ready to guide first-time buyers through every step of the process.',
  },
  {
    id: 6,
    question: 'How can I contact an agent for inquiries?',
    answer:
      'You can reach our agents directly through the contact form, by phone, or by emailing helloestatix@gmail.com.',
  },
];
