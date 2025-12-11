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
    imageUrl: '/Gemini_Generated_Image_hexmyohexmyohexm.png'
  },
  {
    id: 'p2',
    name: 'Thé Menthe "Impérial"',
    description: 'Assemblage signature : Thé vert Gunpowder, menthe fraîche séchée et boutons de rose.',
    price: 25,
    category: Category.FRUITS_SECS,
    imageUrl: '/Gemini_Generated_Image_4h921p4h921p4h92.png'
  },
  {
    id: 'p3',
    name: 'Amandes de l\'Atlas',
    description: 'Amandes Beldi torréfiées lentement à la fleur de sel de l\'Atlas.',
    price: 30,
    category: Category.FRUITS_SECS,
    imageUrl: '/Gemini_Generated_Image_ze86ysze86ysze86.png'
  },
  // Café & Douceurs
  {
    id: 'p4',
    name: 'Cornes de Gazelle Fines',
    description: 'L\'iconique pâtisserie marocaine. Pâte fine, amandes pures et eau de fleur d\'oranger distillée.',
    price: 55,
    category: Category.CAFE,
    imageUrl: '/Gemini_Generated_Image_fpjdtefpjdtefpjd.png'
  },
  {
    id: 'p5',
    name: 'Café Arabica Prémium',
    description: 'Mélange "Casablanca Morning". Torréfaction artisanale, notes de chocolat et d\'épices.',
    price: 25,
    category: Category.CAFE,
    imageUrl: '/Gemini_Generated_Image_6jg1q36jg1q36jg1.png'
  },
  {
    id: 'p6',
    name: 'Eau de Source Sidi Ali',
    description: 'Bouteille en verre élégante (33cl). La pureté des montagnes pour vos invités.',
    price: 15,
    category: Category.CAFE,
    imageUrl: '/Gemini_Generated_Image_8u9ksn8u9ksn8u9k.png'
  },
  {
    id: 'p7',
    name: 'Chocolat Noir 72% & Figues',
    description: 'Tablette artisanale, cacao intense marié à la douceur des figues séchées.',
    price: 40,
    category: Category.CAFE,
    imageUrl: '/Gemini_Generated_Image_kb31e6kb31e6kb31.png'
  },
  // Bien-être
  {
    id: 'p8',
    name: 'Huile d\'Argan Cosmétique',
    description: 'Or liquide certifié Bio. Flacon pipette 30ml pour une touche de soin luxueuse.',
    price: 85,
    category: Category.BIEN_ETRE,
    imageUrl: '/Gemini_Generated_Image_ty4zsqty4zsqty4z.png'
  },
  {
    id: 'p9',
    name: 'Savon Noir Eucalyptus',
    description: 'Le rituel du Hammam en pot de 50g. Exfoliation douce et parfum envoutant.',
    price: 45,
    category: Category.BIEN_ETRE,
    imageUrl: 'Gemini_Generated_Image_y9if8uy9if8uy9if.png'
  },
  {
    id: 'p10',
    name: 'Parfum d\'Ambiance "Oud"',
    description: 'Spray 50ml. Notes boisées et profondes pour signer l\'identité olfactive de votre lieu.',
    price: 120,
    category: Category.BIEN_ETRE,
    imageUrl: '/Gemini_Generated_Image_ty4zsqty4zsqty4z.png'
  },
  // Souvenirs
  {
    id: 'p11',
    name: 'Mini Tajine Décoratif',
    description: 'Céramique de Safi ou Fès, peinte à la main. Un souvenir emblématique.',
    price: 65,
    category: Category.SOUVENIRS,
    imageUrl: '/Gemini_Generated_Image_puvhadpuvhadpuvh.png'   
  },
  {
    id: 'p12',
    name: 'Porte-Clé Cuir Babouche',
    description: 'Cuir véritable, travail artisanal minutieux. Plusieurs coloris disponibles.',
    price: 30,
    category: Category.SOUVENIRS,
    imageUrl: '/Gemini_Generated_Image_cac4prcac4prcac4.png'
  },
  {
    id: 'p13',
    name: 'Pochette Kilim',
    description: 'Tissage berbère authentique transformé en pochette élégante.',
    price: 55,
    category: Category.SOUVENIRS,
    imageUrl: '/Gemini_Generated_Image_8hlxjc8hlxjc8hlx.png'
  },
  {
    id: 'p14',
    name: 'Bougie "Jardin Majorelle"',
    description: 'Cire de soja naturelle, parfum jasmin et fleur d\'oranger.',
    price: 45,
    category: Category.SOUVENIRS,
    imageUrl: '/Gemini_Generated_Image_ynqbk1ynqbk1ynqb.png'
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
    imageUrl: '/Gemini_Generated_Image_sp8wq9sp8wq9sp8w.png'
  },
  {
    id: 'pack-plus',
    name: 'L\'Élégance',
    price: 399,
    tag: 'BEST-SELLER',
    description: 'Pour les hôtes qui visent le statut Superhost. Un équilibre parfait entre goût et souvenir.',
    features: ['Huile d\'Argan Bio (30ml)', 'Cornes de Gazelle (Boîte)', 'Savon Noir Eucalyptus', 'Guide "Secret Marrakech"'],
    imageUrl: '/Gemini_Generated_Image_wumzauwumzauwumz.png'
  },
  {
    id: 'pack-premium',
    name: 'Le Palais',
    price: 699,
    tag: 'PRESTIGE',
    description: 'L\'expérience VIP ultime pour Villas et Riads de luxe. Marquez les esprits durablement.',
    features: ['Parfum d\'Ambiance "Oud"', 'Pochette Kilim Artisanale', 'Assortiment Pâtisseries Fines', 'Conciergerie Dédiée'],
    imageUrl: '/Gemini_Generated_Image_9w8o4x9w8o4x9w8o.png'
  }
];