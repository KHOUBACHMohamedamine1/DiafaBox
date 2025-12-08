import { Product, Category, Pack } from './types';

// High-quality curated images for luxury Moroccan vibe with verified working links
export const PRODUCTS: Product[] = [
  // Fruits Secs & Thé
  {
    id: 'p1',
    name: 'Dattes Majhool Royales',
    description: 'Sélection "Grand Cru" de dattes Majhool du Tafilalet. Texture fondante et goût de caramel naturel.',
    price: 35,
    category: Category.FRUITS_SECS,
    imageUrl: 'https://images.unsplash.com/photo-1598511796318-7b8256bd2b20?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    name: 'Thé Menthe "Impérial"',
    description: 'Assemblage signature : Thé vert Gunpowder, menthe fraîche séchée et boutons de rose.',
    price: 25,
    category: Category.FRUITS_SECS,
    imageUrl: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p3',
    name: 'Amandes de l\'Atlas',
    description: 'Amandes Beldi torréfiées lentement à la fleur de sel de l\'Atlas.',
    price: 30,
    category: Category.FRUITS_SECS,
    imageUrl: 'https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=800&q=80'
  },
  // Café & Douceurs
  {
    id: 'p4',
    name: 'Cornes de Gazelle Fines',
    description: 'L\'iconique pâtisserie marocaine. Pâte fine, amandes pures et eau de fleur d\'oranger distillée.',
    price: 55,
    category: Category.CAFE,
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p5',
    name: 'Café Arabica Prémium',
    description: 'Mélange "Casablanca Morning". Torréfaction artisanale, notes de chocolat et d\'épices.',
    price: 25,
    category: Category.CAFE,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p6',
    name: 'Eau de Source Sidi Ali',
    description: 'Bouteille en verre élégante (33cl). La pureté des montagnes pour vos invités.',
    price: 15,
    category: Category.CAFE,
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p7',
    name: 'Chocolat Noir 72% & Figues',
    description: 'Tablette artisanale, cacao intense marié à la douceur des figues séchées.',
    price: 40,
    category: Category.CAFE,
    imageUrl: 'https://images.unsplash.com/photo-1548139580-c1e09c4d9354?auto=format&fit=crop&w=800&q=80'
  },
  // Bien-être
  {
    id: 'p8',
    name: 'Huile d\'Argan Cosmétique',
    description: 'Or liquide certifié Bio. Flacon pipette 30ml pour une touche de soin luxueuse.',
    price: 85,
    category: Category.BIEN_ETRE,
    imageUrl: 'https://images.unsplash.com/photo-1588667417535-43a0d58852f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p9',
    name: 'Savon Noir Eucalyptus',
    description: 'Le rituel du Hammam en pot de 50g. Exfoliation douce et parfum envoutant.',
    price: 45,
    category: Category.BIEN_ETRE,
    imageUrl: 'https://images.unsplash.com/photo-1570539138092-b2d69e4f0732?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p10',
    name: 'Parfum d\'Ambiance "Oud"',
    description: 'Spray 50ml. Notes boisées et profondes pour signer l\'identité olfactive de votre lieu.',
    price: 120,
    category: Category.BIEN_ETRE,
    imageUrl: 'https://images.unsplash.com/photo-1616248249518-ea16b9d623b3?auto=format&fit=crop&w=800&q=80'
  },
  // Souvenirs
  {
    id: 'p11',
    name: 'Mini Tajine Décoratif',
    description: 'Céramique de Safi ou Fès, peinte à la main. Un souvenir emblématique.',
    price: 65,
    category: Category.SOUVENIRS,
    imageUrl: 'https://images.unsplash.com/photo-1601633006240-3f40d34208a3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p12',
    name: 'Porte-Clé Cuir Babouche',
    description: 'Cuir véritable, travail artisanal minutieux. Plusieurs coloris disponibles.',
    price: 30,
    category: Category.SOUVENIRS,
    imageUrl: 'https://images.unsplash.com/photo-1549103239-014f3a97097f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p13',
    name: 'Pochette Kilim',
    description: 'Tissage berbère authentique transformé en pochette élégante.',
    price: 55,
    category: Category.SOUVENIRS,
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p14',
    name: 'Bougie "Jardin Majorelle"',
    description: 'Cire de soja naturelle, parfum jasmin et fleur d\'oranger.',
    price: 45,
    category: Category.SOUVENIRS,
    imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80'
  }
];

export const PACKS: Pack[] = [
  {
    id: 'pack-basic',
    name: 'L\'Hospitalité',
    price: 199,
    tag: 'ESSENTIEL',
    description: 'Une introduction délicate à la chaleur marocaine. Parfait pour les séjours courts.',
    features: ['Thé Menthe "Impérial"', 'Dattes Majhool (3pcs)', 'Mini Tajine Déco', 'Carte de Bienvenue'],
    imageUrl: 'https://images.unsplash.com/photo-1512952814626-133433d9d1c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pack-plus',
    name: 'L\'Élégance',
    price: 399,
    tag: 'BEST-SELLER',
    description: 'Pour les hôtes qui visent le statut Superhost. Un équilibre parfait entre goût et souvenir.',
    features: ['Huile d\'Argan Bio (30ml)', 'Cornes de Gazelle (Boîte)', 'Savon Noir Eucalyptus', 'Guide "Secret Marrakech"'],
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pack-premium',
    name: 'Le Palais',
    price: 699,
    tag: 'PRESTIGE',
    description: 'L\'expérience VIP ultime pour Villas et Riads de luxe. Marquez les esprits durablement.',
    features: ['Parfum d\'Ambiance "Oud"', 'Pochette Kilim Artisanale', 'Assortiment Pâtisseries Fines', 'Conciergerie Dédiée'],
    imageUrl: 'https://images.unsplash.com/photo-1590059390239-2c3f82458444?auto=format&fit=crop&w=800&q=80'
  }
];