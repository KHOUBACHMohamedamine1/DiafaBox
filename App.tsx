import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, Package, Send, Gift, Play, X, Plus, Minus, Phone, Mail, Instagram, MapPin, CheckCircle, TrendingUp, Heart, Award, ArrowRight, Menu, Trash2, Facebook } from 'lucide-react';
import { PRODUCTS, PACKS } from './constants';
import { Product, CartItem, Category } from './types';

// --- Helper Components ---

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' | 'gold' | 'black' }> = ({ 
  children, className = '', variant = 'primary', ...props 
}) => {
  const baseStyle = "px-6 py-3 md:px-8 md:py-4 rounded-sm font-sans uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden";
  const variants = {
    primary: "bg-emerald-900 text-white border border-emerald-900 hover:bg-emerald-950",
    gold: "bg-gold-500 text-white border border-gold-500 hover:bg-gold-600 hover:shadow-xl hover:shadow-gold-500/20",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-emerald-950",
    ghost: "text-emerald-900 hover:bg-sand-100 border border-transparent",
    black: "bg-emerald-950 text-white hover:bg-black"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-12 md:mb-20 animate-slide-up px-4">
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className={`h-[1px] w-8 md:w-12 ${light ? 'bg-gold-400/50' : 'bg-gold-600/30'}`}></div>
      <span className={`block text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] ${light ? 'text-gold-400' : 'text-gold-600'}`}>
        DiafaBox Excellence
      </span>
      <div className={`h-[1px] w-8 md:w-12 ${light ? 'bg-gold-400/50' : 'bg-gold-600/30'}`}></div>
    </div>
    <h2 className={`font-serif text-4xl md:text-6xl mb-6 md:mb-8 leading-tight ${light ? 'text-white' : 'text-emerald-950'}`}>
      {title}
    </h2>
    {subtitle && (
      <div className="flex justify-center">
        <p className={`max-w-2xl text-sm md:text-lg font-light leading-relaxed font-sans ${light ? 'text-emerald-100/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      </div>
    )}
  </div>
);

// --- Intro Animation Component (Unboxing Reveal) ---

const IntroBoxReveal: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'finished'>('closed');

  useEffect(() => {
    // Start opening after 1s
    const timer1 = setTimeout(() => setPhase('opening'), 800);
    // Remove from DOM after animation completes (approx 1.2s transition)
    const timer2 = setTimeout(() => {
      setPhase('finished');
      onComplete();
    }, 2000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  if (phase === 'finished') return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col pointer-events-none">
      {/* Top Lid */}
      <div 
        className={`flex-1 bg-emerald-950 flex items-end justify-center border-b-[1px] border-gold-500/50 transition-transform duration-[1200ms] cubic-bezier(0.77, 0, 0.175, 1) ${phase === 'opening' ? '-translate-y-full' : 'translate-y-0'}`}
        style={{ willChange: 'transform' }}
      >
        <div className={`mb-8 transition-opacity duration-500 ${phase === 'opening' ? 'opacity-0' : 'opacity-100'}`}>
           {/* Top part could be added here */}
        </div>
      </div>

      {/* Bottom Box */}
      <div 
        className={`flex-1 bg-emerald-950 flex items-start justify-center border-t-[1px] border-gold-500/50 transition-transform duration-[1200ms] cubic-bezier(0.77, 0, 0.175, 1) ${phase === 'opening' ? 'translate-y-full' : 'translate-y-0'}`}
        style={{ willChange: 'transform' }}
      >
        <div className={`mt-8 transition-opacity duration-500 ${phase === 'opening' ? 'opacity-0' : 'opacity-100'}`}>
           {/* Bottom part could be added here */}
        </div>
      </div>

      {/* Center Logo/Seal - Fades out */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center transition-all duration-700 ${phase === 'opening' ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
         <div className="bg-emerald-900 border border-gold-500 p-6 md:p-8 rounded-sm shadow-2xl relative">
            <div className="absolute inset-0 border border-gold-500/30 m-1"></div>
            <Package size={48} md:size={64} className="text-gold-400" strokeWidth={0.8} />
         </div>
         <h1 className="text-gold-100 font-serif text-2xl md:text-3xl mt-6 tracking-[0.4em] font-light text-center">DIAFABOX</h1>
      </div>
    </div>
  );
};

// --- Toast Notification ---

const Toast: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-slide-up pointer-events-none w-full px-4 md:w-auto">
      <div className="bg-emerald-950/95 backdrop-blur text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-4 border border-white/10 mx-auto max-w-sm justify-center">
        <div className="bg-gold-500 rounded-full p-1 flex-shrink-0">
          <CheckCircle size={14} className="text-emerald-950" />
        </div>
        <span className="font-serif tracking-wide text-sm truncate">{message}</span>
      </div>
    </div>
  );
};

// --- Product Card ---

const ProductCard: React.FC<{ 
  product: Product; 
  onAdd: (p: Product) => void;
  count: number;
  onRemove: (p: Product) => void;
}> = ({ product, onAdd, count, onRemove }) => {
  
  return (
    <div className="group flex flex-col h-full bg-transparent">
      {/* Aspect ratio 4:5 (Portrait) */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-100 mb-4 md:mb-6 cursor-pointer rounded-sm">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transform md:group-hover:scale-105 transition-transform duration-[1s] ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590059390239-2c3f82458444?auto=format&fit=crop&w=600&q=80';
          }}
        />
        
        {/* Dark overlay on hover (desktop) or always slight (mobile) */}
        <div className="absolute inset-0 bg-emerald-950/0 md:group-hover:bg-emerald-950/10 transition-colors duration-500" />
        
        {/* Interaction Area - Always visible on mobile, slide-up on desktop */}
        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-center pb-4 md:pb-6 bg-gradient-to-t from-black/60 to-transparent">
          {count === 0 ? (
             <button 
               onClick={() => onAdd(product)}
               className="bg-white text-emerald-950 px-4 py-2 md:px-8 md:py-3 rounded-sm shadow-xl font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all transform active:scale-95 md:hover:-translate-y-1 w-full md:w-auto text-center"
             >
               Ajouter
             </button>
          ) : (
             <div className="flex items-center gap-2 bg-white rounded-sm shadow-xl px-2 py-1">
                <button onClick={() => onRemove(product)} className="w-8 h-8 flex items-center justify-center text-emerald-900 hover:text-red-500 transition-colors active:bg-gray-100">
                  <Minus size={14} />
                </button>
                <span className="font-sans font-bold text-emerald-900 w-6 text-center text-xs">{count}</span>
                <button onClick={() => onAdd(product)} className="w-8 h-8 flex items-center justify-center text-emerald-900 hover:text-gold-500 transition-colors active:bg-gray-100">
                  <Plus size={14} />
                </button>
             </div>
          )}
        </div>
        
        {/* Count Badge */}
        {count > 0 && (
          <div className="absolute top-3 left-3 bg-gold-500 text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-sm shadow-md animate-fade-in">
            {count} DANS LE COFFRET
          </div>
        )}
      </div>

      {/* Info Section - Minimalist */}
      <div className="flex-1 flex flex-col items-center text-center px-2">
        <h3 className="font-serif text-xl md:text-2xl text-sand-100 md:group-hover:text-gold-400 transition-colors duration-300 mb-1 leading-none">{product.name}</h3>
        <span className="text-[9px] md:text-[10px] font-bold text-emerald-400/60 uppercase tracking-widest mb-2 md:mb-3">{product.category.split('&')[0]}</span>
        
        <div className="w-8 h-[1px] bg-emerald-800 mb-3 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>
        
        <p className="text-emerald-100/50 text-[10px] md:text-xs font-light leading-relaxed mb-3 line-clamp-2 max-w-[200px] hidden md:block">{product.description}</p>
        
        <span className="font-serif text-base md:text-lg text-gold-200 mt-auto">{product.price} <span className="text-[9px] md:text-[10px] font-sans text-emerald-100/40 align-top">MAD</span></span>
      </div>
    </div>
  );
};

// --- Cart Drawer Component ---

const CartDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onAdd: (p: Product) => void;
  onRemove: (p: Product) => void;
}> = ({ isOpen, onClose, cart, onAdd, onRemove }) => {
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-emerald-950/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Drawer Header */}
        <div className="p-6 md:p-8 border-b border-sand-200 flex items-center justify-between bg-sand-50">
          <div className="flex items-center gap-3">
            <div className="relative">
               <ShoppingBag className="text-gold-500" size={24} />
               <span className="absolute -top-1 -right-1 bg-emerald-950 text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                 {cart.reduce((a, b) => a + b.quantity, 0)}
               </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-emerald-950">Votre Coffret</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-emerald-950 transition-colors p-2 hover:bg-sand-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-gold-200 bg-white">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-60">
              <div className="w-20 h-20 bg-sand-100 rounded-full flex items-center justify-center">
                 <Gift size={32} strokeWidth={1} className="text-gold-500" />
              </div>
              <div>
                <p className="font-serif text-2xl text-emerald-950 mb-2">Votre panier est vide</p>
                <p className="text-sm text-gray-500 font-light max-w-[200px] mx-auto">Sélectionnez des articles dans l'atelier pour composer votre box.</p>
              </div>
              <button onClick={onClose} className="px-6 py-3 bg-emerald-950 text-white text-xs uppercase tracking-widest font-bold hover:bg-gold-500 transition-colors rounded-sm">
                Retourner à l'Atelier
              </button>
            </div>
          ) : (
            <ul className="space-y-6 md:space-y-8">
              {cart.map(item => (
                <li key={item.id} className="flex gap-4 md:gap-6 animate-fade-in group">
                  <div className="w-16 h-20 md:w-20 md:h-24 flex-shrink-0 bg-sand-100 rounded-sm overflow-hidden relative">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-serif text-lg md:text-xl text-emerald-950 leading-none line-clamp-2">{item.name}</h4>
                        <button onClick={() => onRemove(item)} className="text-gray-300 hover:text-red-500 transition-colors md:opacity-0 md:group-hover:opacity-100 p-1">
                           <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{item.category.split('&')[0]}</p>
                    </div>
                    
                    <div className="flex items-end justify-between mt-2">
                      <div className="flex items-center gap-4 bg-sand-50 rounded-sm px-3 py-1 border border-sand-200">
                        <button onClick={() => onRemove(item)} className="text-gray-400 hover:text-emerald-950 transition-colors p-1">
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center text-emerald-950">{item.quantity}</span>
                        <button onClick={() => onAdd(item)} className="text-gray-400 hover:text-emerald-950 transition-colors p-1">
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-bold text-gold-600 font-serif text-base md:text-lg">{item.price * item.quantity} <span className="text-[10px] text-gray-400 font-sans font-normal">MAD</span></span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="p-6 md:p-8 bg-sand-50 border-t border-sand-200 space-y-6">
             <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-500 font-light">
                  <span>Sous-total</span>
                  <span>{cartTotal} MAD</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 font-light">
                  <span>Livraison (Marrakech)</span>
                  <span className="text-emerald-700 font-medium bg-emerald-100 px-2 py-0.5 rounded text-xs">OFFERTE</span>
                </div>
             </div>
             <div className="flex justify-between items-baseline pt-4 md:pt-6 border-t border-dashed border-sand-300">
                <span className="font-serif text-xl md:text-2xl text-emerald-950">Total</span>
                <span className="text-3xl md:text-4xl font-serif text-emerald-950 font-medium">{cartTotal} <small className="text-sm font-sans text-gray-400 font-normal ml-1">MAD</small></span>
             </div>
             <Button variant="primary" className="w-full">
                Finaliser la commande
             </Button>
             <p className="text-center text-[10px] text-gray-400 font-light">
               Devis envoyé par email sous 24h. Paiement à la livraison disponible.
             </p>
          </div>
        )}
      </div>
    </>
  );
};

// --- Main App Component ---

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | 'ALL'>('ALL');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        setToastMessage(`Quantité mise à jour : ${product.name}`);
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      setToastMessage(`Ajouté au coffret : ${product.name}`);
      // Auto open cart on first add if closed
      if (prev.length === 0) setIsCartOpen(true);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing && existing.quantity > 1) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item);
      }
      return prev.filter(item => item.id !== product.id);
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const getProductCount = (id: string) => cart.find(item => item.id === id)?.quantity || 0;

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-gold-200 selection:text-emerald-950 overflow-x-hidden">
      
      {/* Opening Animation */}
      <IntroBoxReveal onComplete={() => setIntroFinished(true)} />

      {/* Toast Notification */}
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-sand-200' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 relative z-50">
             {/* Logo */}
             <div className="relative group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                <div className={`absolute inset-0 bg-gold-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full`}></div>
                <Package size={24} md:size={28} strokeWidth={1} className={`relative z-10 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-gold-600' : 'text-white'}`} />
             </div>
            <span className={`font-serif text-xl md:text-2xl tracking-widest font-bold ${isScrolled || isMobileMenuOpen ? 'text-emerald-950' : 'text-white'}`}>
              DIAFA<span className={isScrolled || isMobileMenuOpen ? 'text-gold-600' : 'text-gold-400'}>BOX</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {[
              { label: 'Nos Packs', id: 'nos-packs' },
              { label: 'Atelier', id: 'atelier' },
              { label: 'Pourquoi Nous', id: 'pourquoi-nous' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] relative group py-2 ${isScrolled ? 'text-emerald-900' : 'text-white/90'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-gold-500' : 'bg-white'}`}></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4 relative z-50">
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative group flex items-center gap-3 px-3 py-2 md:px-6 md:py-2.5 rounded-sm transition-all duration-300 border ${isScrolled || isMobileMenuOpen ? 'bg-emerald-950 text-white border-emerald-950 hover:bg-gold-500 hover:border-gold-500' : 'bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white hover:text-emerald-950'}`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="font-serif text-lg leading-none pt-0.5 hidden sm:inline">{cartTotal} MAD</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 rounded-md transition-colors ${isScrolled || isMobileMenuOpen ? 'text-emerald-950 hover:bg-sand-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay - Redesigned as a Side Drawer/Luxury Panel */}
        <div 
            className={`fixed inset-0 bg-emerald-950/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div className={`fixed inset-y-0 right-0 w-[85%] max-w-sm bg-emerald-950 shadow-2xl z-50 transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           {/* Mobile Menu Header */}
           <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="font-serif text-2xl text-white tracking-widest">MENU</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gold-400 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>
           </div>

           {/* Mobile Menu Links */}
           <nav className="flex-1 flex flex-col justify-center px-8 gap-8">
            {[
              { label: 'Nos Packs', id: 'nos-packs' },
              { label: 'Atelier', id: 'atelier' },
              { label: 'Pourquoi Nous', id: 'pourquoi-nous' },
              { label: 'Contact', id: 'contact' }
            ].map((item, idx) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className={`text-3xl font-serif text-sand-100 text-left transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${100 + idx * 100}ms` }}
              >
                <span className="text-gold-500/50 mr-4 text-sm font-sans tracking-widest">0{idx + 1}</span>
                {item.label}
              </button>
            ))}
           </nav>

           {/* Mobile Menu Footer */}
           <div className="p-8 border-t border-white/10 bg-black/20">
              <p className="text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-4">Service Conciergerie</p>
              <a href="tel:+212600000000" className="flex items-center gap-4 text-white mb-4">
                 <Phone size={18} className="text-gold-400" />
                 <span className="font-serif text-lg">+212 600 000 000</span>
              </a>
              <a href="mailto:conciergerie@diafabox.ma" className="flex items-center gap-4 text-white">
                 <Mail size={18} className="text-gold-400" />
                 <span className="text-sm font-light">conciergerie@diafabox.ma</span>
              </a>
           </div>
        </div>
      </header>

      {/* Cart Popup/Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-900">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1542326237-94b1c5a538d4?auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-60"
          >
            {/* Reliable video source: Riad Courtyard with Pool (Luxury vibe) */}
            <source src="https://videos.pexels.com/video-files/4204918/4204918-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradients for text readability */}
          <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/50" />
        </div>

        <div className={`relative z-10 text-center max-w-6xl px-6 transition-all duration-1000 transform ${introFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 md:gap-3 border border-white/30 rounded-full px-4 py-1.5 md:px-5 text-white/90 text-[9px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8 md:mb-10 bg-black/20 backdrop-blur-sm">
            <Award size={14} className="text-gold-400" />
            Excellence Riad & Villa
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] drop-shadow-2xl">
            L'Art de l'Accueil <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic font-light tracking-tight pr-4">Marocain.</span>
          </h1>
          
          <p className="text-base md:text-2xl text-sand-100 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide hidden sm:block">
            Sublimez l'expérience de vos invités Airbnb avec nos coffrets signature. 
            Le luxe du détail pour des souvenirs inoubliables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full px-8 sm:px-0">
             <Button variant="gold" onClick={() => scrollToSection('nos-packs')} className="w-full sm:w-auto">
                Voir les Collections
                <ArrowRight size={16} />
             </Button>
             <Button variant="outline" onClick={() => scrollToSection('atelier')} className="w-full sm:w-auto">
                Créer Sur Mesure
             </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center animate-bounce opacity-50">
           <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* Value Proposition / Why Us */}
      <section id="pourquoi-nous" className="py-16 md:py-32 bg-sand-50 relative overflow-hidden scroll-mt-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionTitle 
            title="Pourquoi DiafaBox ?" 
            subtitle="Dans l'hôtellerie de luxe, chaque détail compte. Nous vous aidons à transformer une simple location en une expérience mémorable."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Star strokeWidth={1} size={40} />,
                title: "Statut Superhost",
                text: "L'algorithme Airbnb favorise les expériences exceptionnelles. Les cadeaux d'accueil sont le levier #1 pour décrocher les 5 étoiles."
              },
              {
                icon: <Heart strokeWidth={1} size={40} />,
                title: "Connexion Émotionnelle",
                text: "Plus qu'un produit, offrez une histoire. Nos articles artisanaux créent un lien immédiat et chaleureux avec vos voyageurs."
              },
              {
                icon: <TrendingUp strokeWidth={1} size={40} />,
                title: "Rentabilité & Avis",
                text: "Des invités ravis laissent des avis élogieux, vous permettant d'augmenter votre taux d'occupation et vos prix à la nuitée."
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 md:p-10 bg-white border border-sand-100 hover:border-gold-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sand-200/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold-500 transition-all duration-500 group-hover:h-full"></div>
                <div className="mb-6 md:mb-8 text-emerald-900 group-hover:text-gold-600 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-emerald-950 mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section id="nos-packs" className="py-16 md:py-32 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionTitle 
            title="Collections Signatures" 
            subtitle="Des assemblages curés par nos experts pour s'adapter à chaque standing de propriété."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {PACKS.map((pack) => (
              <div key={pack.id} className="group relative flex flex-col h-full bg-white rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10">
                <div className="relative h-[350px] md:h-[450px] overflow-hidden">
                  <div className="absolute top-6 left-6 z-20">
                     <span className="bg-white/95 backdrop-blur text-emerald-950 text-[10px] font-bold px-4 py-2 uppercase tracking-[0.2em] shadow-sm border border-sand-200">{pack.tag}</span>
                  </div>
                  <img 
                    src={pack.imageUrl} 
                    alt={pack.name} 
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">{pack.name}</h3>
                    <p className="text-gold-400 text-lg md:text-xl font-serif italic mb-4">{pack.price} MAD <span className="text-xs font-sans text-white/60 not-italic uppercase tracking-wider ml-2">HT</span></p>
                    <div className="h-[1px] w-20 bg-white/30 mb-6 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex-1 flex flex-col border-x border-b border-sand-100 relative bg-white">
                  <p className="text-gray-600 mb-8 md:mb-10 font-light leading-relaxed text-sm md:text-base">{pack.description}</p>
                  
                  <ul className="space-y-4 mb-10 flex-1">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-gray-700 font-light group/item">
                        <CheckCircle size={16} className="text-gold-500 mt-0.5 flex-shrink-0 opacity-50 group-hover/item:opacity-100 transition-opacity" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="primary" className="w-full">
                    Commander
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier (Custom Builder) Section - Redesigned */}
      <section id="atelier" className="py-16 md:py-36 bg-emerald-950 text-sand-50 relative scroll-mt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-emerald-950"></div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-900/30 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
          <SectionTitle 
            title="L'Atelier Sur Mesure" 
            subtitle="Composez votre signature d'accueil. Chaque pièce est sélectionnée pour son authenticité et son raffinement."
            light={true}
          />

          {/* Category Filter - Scrollable on mobile */}
          <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:justify-center items-center gap-8 md:gap-12 mb-12 md:mb-20 border-b border-emerald-800/50 pb-6 mx-auto max-w-4xl px-4 scrollbar-hide snap-x">
              <button
                onClick={() => setActiveCategory('ALL')}
                className={`text-xs md:text-sm uppercase tracking-[0.2em] font-serif transition-all duration-300 pb-2 relative whitespace-nowrap snap-center flex-shrink-0 ${activeCategory === 'ALL' ? 'text-gold-400' : 'text-emerald-400/60 hover:text-white'}`}
              >
                Tout Voir
                <span className={`absolute bottom-[-1px] left-0 w-full h-[2px] bg-gold-400 transition-transform duration-300 ${activeCategory === 'ALL' ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </button>
              {Object.values(Category).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`text-xs md:text-sm uppercase tracking-[0.2em] font-serif transition-all duration-300 pb-2 relative whitespace-nowrap snap-center flex-shrink-0 ${activeCategory === cat ? 'text-gold-400' : 'text-emerald-400/60 hover:text-white'}`}
                >
                  {cat.split('&')[0]}
                  <span className={`absolute bottom-[-1px] left-0 w-full h-[2px] bg-gold-400 transition-transform duration-300 ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </button>
              ))}
          </div>

          {/* New Clean Grid for Atelier - 2 cols on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
              {PRODUCTS.filter(p => activeCategory === 'ALL' || p.category === activeCategory).map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAdd={addToCart}
                  onRemove={removeFromCart}
                  count={getProductCount(product.id)}
                />
              ))}
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-emerald-950 text-white border-t border-emerald-900 pt-16 md:pt-32 pb-12 md:pb-16 relative overflow-hidden scroll-mt-20">
        {/* Abstract Background shape */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 md:gap-20 mb-12 md:mb-24">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="bg-gold-500/20 p-3 rounded-full text-gold-500 border border-gold-500/30">
                  <Package size={24} strokeWidth={1.5} />
                </div>
                <span className="font-serif text-3xl md:text-4xl tracking-wide text-white">
                  DIAFA<span className="text-gold-500">BOX</span>
                </span>
              </div>
              <p className="text-emerald-100/60 max-w-md leading-relaxed mb-8 md:mb-12 font-light text-base md:text-lg">
                La référence des coffrets d'accueil premium au Maroc. <br/>
                Nous aidons les hôtes visionnaires à offrir une hospitalité inoubliable pour la CAN 2025 et au-delà.
              </p>
              <div className="flex gap-6">
                {[Instagram, Facebook, MapPin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-emerald-800 flex items-center justify-center text-emerald-200 hover:bg-gold-500 hover:text-emerald-950 hover:border-gold-500 transition-all duration-300">
                    <Icon size={18} md:size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gold-500 mb-6 md:mb-10 text-[10px] font-bold uppercase tracking-[0.25em]">Navigation</h4>
              <ul className="space-y-4 md:space-y-5 text-emerald-100/70 text-sm font-light">
                {['Notre Histoire', 'Collections', 'Sur Mesure', 'Blog Hôtes', 'Mentions Légales'].map(item => (
                  <li key={item}><a href="#" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gold-500 mb-6 md:mb-10 text-[10px] font-bold uppercase tracking-[0.25em]">Contact VIP</h4>
              <ul className="space-y-6 md:space-y-8 text-emerald-100/70 text-sm font-light">
                <li className="flex items-start gap-5">
                  <MapPin size={20} className="text-gold-500/80 flex-shrink-0 mt-1" />
                  <span>24 Boulevard d'Anfa,<br/>Triangle d'Or, Casablanca</span>
                </li>
                <li className="flex items-start gap-5">
                  <Mail size={20} className="text-gold-500/80 flex-shrink-0 mt-1" />
                  <span className="border-b border-emerald-800 pb-1 hover:text-white transition-colors cursor-pointer">conciergerie@diafabox.ma</span>
                </li>
                <li className="flex items-start gap-5">
                  <Phone size={20} className="text-gold-500/80 flex-shrink-0 mt-1" />
                  <span>+212 600 000 000</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-emerald-900/50 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-emerald-100/30 uppercase tracking-[0.2em]">
            <p>&copy; 2025 DiafaBox Luxury.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-2">
              <Heart size={10} className="text-red-900 fill-current" />
              Fait avec passion à Casablanca
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}