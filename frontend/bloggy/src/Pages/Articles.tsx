import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X, Clock, Newspaper } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  image?: string;
  created_at: string;
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(function() {
    setLoading(true);
    fetch('http://127.0.0.1:8000/api/articles/')
      .then(res => res.json())
      .then(function(data) {
        const trie = data.sort(function(a: Article, b: Article) {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
        setArticles(trie);
      })
      .catch(() => setError("Erreur serveur"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      {/* Spinner aux couleurs du drapeau */}
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#ffce00] border-t-[#006a4e] rounded-full animate-spin"></div>
        <div className="absolute w-4 h-4 bg-[#d21034] rounded-full"></div>
      </div>
      <p className="text-[#006a4e] font-black italic animate-pulse">Récupération des actus 228...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      {/* Header avec ligne tricolore */}
      <header className="mb-16 relative">
        <div className="flex items-center gap-3 mb-4">
          <Newspaper className="text-[#d21034]" size={32} />
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Journal <span className="text-[#006a4e]">Tech</span>
          </h1>
        </div>
        <div className="flex h-1.5 w-32 rounded-full overflow-hidden mb-6">
          <div className="bg-[#006a4e] flex-1"></div>
          <div className="bg-[#ffce00] flex-1"></div>
          <div className="bg-[#d21034] flex-1"></div>
        </div>
        <p className="text-gray-500 text-lg max-w-2xl font-medium">
          L'actualité numérique décryptée par des experts passionnés.
        </p>
      </header>

      {/* Grille d'articles */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map(function(art, index) {
          return (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border-b-4 border-gray-100 hover:border-[#ffce00] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={art.image} 
                  alt={art.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {/* Badge Togo Style */}
                <div className="absolute top-4 left-4 bg-[#006a4e] text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ffce00] rounded-full"></div>
                  Exclusif 228
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-[#006a4e] text-xs font-bold mb-3 uppercase tracking-tighter">
                  <Calendar size={14} />
                  {new Date(art.created_at).toLocaleDateString('fr-TG', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                
                <h2 className="text-xl font-black text-gray-900 mb-6 group-hover:text-[#006a4e] transition-colors line-clamp-2 leading-tight">
                  {art.title}
                </h2>

                <button 
                  className="mt-auto flex items-center gap-2 text-[#d21034] font-black hover:gap-4 transition-all cursor-pointer uppercase text-xs tracking-widest" 
                  onClick={function() { setSelectedArticle(art); }}
                >
                  Lire l'article
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* --- MODALE STYLE DRAPEAU --- */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#006a4e]/20 backdrop-blur-xl flex items-center justify-center p-4 z-50"
            onClick={function() { setSelectedArticle(null); }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-[2.5rem] border-t-8 border-[#d21034] max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12 shadow-[0_35px_60px_-15px_rgba(0,106,78,0.3)] relative"
              onClick={function(e) { e.stopPropagation(); }}
            >
              <button 
                className="absolute top-6 right-6 p-3 bg-gray-100 hover:bg-[#ffce00] text-gray-900 rounded-2xl transition-all cursor-pointer shadow-sm"
                onClick={function() { setSelectedArticle(null); }}
              >
                <X size={20} strokeWidth={3} />
              </button>

              <div className="flex items-center gap-3 text-[#006a4e] font-black text-xs uppercase tracking-[0.2em] mb-6">
                <Clock size={16} />
                <span>Lecture Instantanée</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-none tracking-tighter text-gray-900">
                {selectedArticle.title}
              </h2>
              
              {selectedArticle.image && (
                <div className="relative mb-10 group">
                  <div className="absolute inset-0 bg-[#ffce00] rounded-[2rem] rotate-2 group-hover:rotate-1 transition-transform -z-10"></div>
                  <img src={selectedArticle.image} alt="" className="w-full h-72 md:h-96 object-cover rounded-[2rem] shadow-xl" />
                </div>
              )}
              
              <div className="text-gray-700 leading-relaxed text-lg font-medium space-y-6">
                {selectedArticle.description.split('\n').map(function(para, i) {
                  return <p key={i} className="first-letter:text-4xl first-letter:font-black first-letter:text-[#006a4e] first-letter:mr-2">{para}</p>;
                })}
              </div>

              <div className="mt-12 pt-8 border-t-2 border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-[#006a4e] font-bold text-sm">Publié à Lomé, Togo</span>
                <button 
                  className="w-full md:w-auto bg-[#006a4e] text-white px-10 py-4 rounded-2xl font-black hover:bg-[#d21034] transition-all cursor-pointer shadow-lg shadow-green-100"
                  onClick={function() { setSelectedArticle(null); }}
                >
                  Terminer la lecture
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
