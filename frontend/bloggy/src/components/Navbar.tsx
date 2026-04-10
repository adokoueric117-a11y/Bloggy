import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Actualités", path: "/Articles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b-4 border-[#006a4e] px-6 py-4 relative shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo - Utilisation du Rouge et Vert */}
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-1">
          <span className="text-[#d21034]">BLO</span>
          <span className="text-[#006a4e]">GGY</span>
          <div className="w-2 h-2 bg-[#ffce00] rounded-full ml-1 animate-pulse"></div>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-10 text-gray-800 font-bold">
          {navLinks.map(function(link) {
            return (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="hover:text-[#006a4e] border-b-2 border-transparent hover:border-[#ffce00] transition-all duration-200 pb-1"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions - Bouton Rouge (Rappel de l'étoile) */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 bg-[#d21034] text-white px-5 py-2.5 rounded-xl hover:bg-red-700 transition-all cursor-pointer font-bold shadow-md shadow-red-100">
            <LogIn size={18} />
            Connexion
          </button>

          {/* Bouton Burger Mobile */}
          <button 
            className="md:hidden p-2 text-[#006a4e] hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={function() { setIsOpen(!isOpen); }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-8 border-[#ffce00] z-50 shadow-2xl">
          <ul className="flex flex-col p-6 gap-2">
            {navLinks.map(function(link, index) {
              return (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    // Alternance de couleurs vert/jaune sur les textes mobiles
                    className={`block text-xl py-3 px-4 rounded-xl font-black ${index % 2 === 0 ? 'text-[#006a4e]' : 'text-gray-800'}`}
                    onClick={function() { setIsOpen(false); }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <div className="h-px bg-gray-100 my-2"></div>
            <button className="w-full flex justify-center items-center gap-2 bg-[#d21034] text-white px-4 py-4 rounded-xl font-black">
              <LogIn size={20} />
              Se connecter
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
