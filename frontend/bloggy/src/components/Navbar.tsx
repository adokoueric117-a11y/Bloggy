import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react'; // Importation des icônes

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Actualités", path: "/Articles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-blue-600">
          BLOGGY
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-semibold">
          {navLinks.map(function(link) {
            return (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className="hover:text-blue-600 transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all cursor-pointer font-medium">
            <LogIn size={18} />
            Connexion
          </button>

          {/* Bouton Burger Mobile avec Lucide */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            onClick={function() { setIsOpen(!isOpen); }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile avec animation simple */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 z-50 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <ul className="flex flex-col p-6 gap-4 text-gray-800 font-bold">
            {navLinks.map(function(link) {
              return (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="block text-xl py-2 active:text-blue-600"
                    onClick={function() { setIsOpen(false); }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            
          </ul>
        </div>
      )}
    </nav>
  );
}
