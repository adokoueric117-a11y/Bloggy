import { ArrowRight, Sparkles, BookOpen, Zap, Users, Code, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureProps {
  delay: number;
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard(props: FeatureProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: props.delay }}
      className="group p-8 bg-white rounded-4xl border-b-4 border-gray-100 hover:border-[#ffce00] shadow-sm hover:shadow-2xl transition-all hover:-translate-y-3"
    >
      <div className={`${props.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
        {props.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#006a4e] transition-colors">{props.title}</h3>
      <p className="text-gray-500 leading-relaxed">{props.description}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#ffce00] selection:text-[#006a4e]">
      
      {/* BACKGROUND DECORATION TOGO STYLE */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 opacity-30">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#006a4e]/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-[#ffce00]/20 rounded-full blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative px-6 pt-28 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#006a4e] text-white px-5 py-2 rounded-full text-sm font-bold mb-10 shadow-xl"
          >
            <div className="w-2 h-2 bg-[#ffce00] rounded-full animate-ping"></div>
            <span>Tech & Innovation au Togo</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-black tracking-tight text-gray-900 mb-8"
          >
            L'avenir de la <br />
            <span className="bg-linear-to-r from-[#006a4e] via-[#ffce00] to-[#006a4e] bg-clip-text text-transparent">
              Tech Togolaise
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Décryptage de l'IA, du Web3 et du code moderne depuis Lomé. 
            Rejoignez la communauté de développeurs visionnaires.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-5"
          >
            {/* Bouton Rouge Étoile */}
            <Link to="/Articles" className="group flex items-center gap-3 bg-[#d21034] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-100">
              Voir les actualités
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-[#006a4e] text-[#006a4e] hover:bg-[#006a4e] hover:text-white transition-all">
              Notre Mission
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-[#ffce00]/10 border-y border-[#ffce00]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Articles", val: "228+", icon: <Code className="text-[#006a4e]" /> },
            { label: "Passionnés", val: "5k+", icon: <Users className="text-[#d21034]" /> },
            { label: "Projets", val: "100%", icon: <Globe className="text-[#006a4e]" /> },
            { label: "Vitesse", val: "Giga", icon: <Zap className="text-[#ffce00]" /> }
          ].map(function(stat, i) {
            return (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="p-2 bg-white rounded-xl shadow-sm">{stat.icon}</span>
                <span className="text-3xl font-black text-gray-900">{stat.val}</span>
                <span className="text-xs font-bold text-[#006a4e] uppercase tracking-widest">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard 
            delay={0.2}
            color="bg-[#006a4e]"
            icon={<Zap size={28} />}
            title="Rapidité"
            description="Le web moderne ne supporte pas l'attente. Apprenez à optimiser vos apps."
          />
          <FeatureCard 
            delay={0.4}
            color="bg-[#ffce00]"
            icon={<BookOpen size={28} className="text-[#006a4e]" />}
            title="Savoir"
            description="Des guides complets sur React, Node et l'IA générative."
          />
          <FeatureCard 
            delay={0.6}
            color="bg-[#d21034]"
            icon={<Sparkles size={28} />}
            title="Inspiration"
            description="Découvrez comment les tech togolaises rayonnent à l'international."
          />
        </div>
      </section>

    </div>
  );
}
