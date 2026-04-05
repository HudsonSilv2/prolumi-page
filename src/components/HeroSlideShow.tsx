import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAutoPlay } from '../hooks';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

export function HeroSlideShow() {
  const [paused, setPaused] = useState(false);
  const [current, setCurrent, _next] = useAutoPlay(4500, images.length, paused);

  const go = (dir: 1 | -1) => setCurrent((prev) => (prev + dir + images.length) % images.length);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt="Projeto de iluminao Prolumi"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-dark)]/60 via-[var(--primary-dark)]/30 to-black/70" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
          Solues em iluminao inteligente
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Iluminao que <br className="hidden sm:block" />
          <span className="text-[var(--primary-light)]">transforma espaos</span>
        </h1>

        <p className="text-base md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
          Projetos de iluminao para residncias, comrcios e espaos urbanos com tecnologia,
          sustentabilidade e design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projetos" className="btn-primary">
            Ver Projetos
          </a>
          <a href="#contato" className="btn-ghost">
            Fale Conosco
          </a>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3" role="tablist" aria-label="Indicadores do carrossel">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-400 ${
              i === current ? 'w-8 h-2 bg-[var(--primary)]' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => go(-1)}
        aria-label="Slide anterior"
        className="absolute z-10 left-4 md:left-8 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Prximo slide"
        className="absolute z-10 right-4 md:right-8 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
