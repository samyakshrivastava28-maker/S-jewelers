import { Product } from '../context/CartContext';

const MOCK_IMAGES = {
  gold: [
    'https://rubans.in/cdn/shop/files/rubans-18k-gold-plated-cubic-zirconia-stone-gold-green-pink-beaded-matar-mala-necklace-necklaces-necklace-sets-chains-mangalsutra-1177287864.jpg?v=1755718571',
    'https://assets0.mirraw.com/images/12507367/CLJWMABGSL240017_1_zoom.jpg?1717509037',
    'https://storage.googleapis.com/blog-bucket-staging/Media/8c7a1b7f-golden-mango-motif-golden-necklace-1024x899.webp',
  ],
  silver: [
    'https://www.silberuh.com/cdn/shop/files/SilverTribalBaliHoopEarring_1200x1200.jpg?v=1753950924',
    'https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/n/n/nn00421.jpg',
    'https://www.ijewels.co.in/cdn/shop/files/ADB569.png?v=1756984874&width=2048',
  ],
  diamond: [
    'https://www.zivar.in/cdn/shop/products/aasi-diamond-ring-433638_1024x1024.jpg?v=1691477702',
    'https://zevarking.com/cdn/shop/collections/IMG_3095.jpg?v=1708827628',
    'https://www.mangalsutraonline.com/cdn/shop/products/9-ct.-diamond-dangle-drop-earring-for-women-in-white-gold-MGSEAR10810ANGLE1-NL-WG_1080x1080.jpg?v=1680258916',
  ]
};

export const PRODUCTS: Product[] = [
  // Gold
  { id: 'g1', name: '24K Classic Chain', price: 96000, category: 'gold', image: MOCK_IMAGES.gold[0] },
  { id: 'g2', name: 'Royal Gold Bangles', price: 200000, category: 'gold', image: MOCK_IMAGES.gold[1] },
  { id: 'g3', name: 'Heritage Gold Necklace', price: 336000, category: 'gold', image: MOCK_IMAGES.gold[2] },
  // Silver
  { id: 's1', name: 'Sterling Silver Hoops', price: 12000, category: 'silver', image: MOCK_IMAGES.silver[0] },
  { id: 's2', name: 'Oxidized Silver Choker', price: 27000, category: 'silver', image: MOCK_IMAGES.silver[1] },
  { id: 's3', name: 'Silver Charm Bracelet', price: 14000, category: 'silver', image: MOCK_IMAGES.silver[2] },
  // Diamond
  { id: 'd1', name: 'Solitaire Diamond Ring', price: 450000, category: 'diamond', image: MOCK_IMAGES.diamond[0] },
  { id: 'd2', name: 'Diamond Tennis Bracelet', price: 250000, category: 'diamond', image: MOCK_IMAGES.diamond[1] },
  { id: 'd3', name: 'Platinum Diamond Drops', price: 220000, category: 'diamond', image: MOCK_IMAGES.diamond[2] },
];

export const getProductsByCategory = (category: 'gold' | 'silver' | 'diamond') => {
  return PRODUCTS.filter(p => p.category === category);
};
