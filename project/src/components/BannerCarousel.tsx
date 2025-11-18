import { useEffect, useRef, useState } from 'react';

export default function BannerCarousel() {
  const banners = [
    // Imagens públicas do Unsplash (tamanho grande, livre para uso)
    'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0b3a0d9e7a4e2f8b6b1c1a9f4bb2d3f7',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f1a2b3c4d5e6f7890abcd1234567890',
    'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef1234567890abcdef1234567890',
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // iniciar apenas no mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAuto() {
    stopAuto();
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 4000);
  }

  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function goToNext() {
    stopAuto();
    setIndex((i) => (i + 1) % banners.length);
    startAuto();
  }

  function goToPrev() {
    stopAuto();
    setIndex((i) => (i - 1 + banners.length) % banners.length);
    startAuto();
  }

  return (
    <section id="banners" className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {banners.map((src, i) => (
              <div
                key={i}
                className="min-w-full flex-shrink-0 cursor-pointer"
                onClick={goToNext}
              >
                <img
                  src={src}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={goToPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
            aria-label="Próximo"
          >
            ›
          </button>

          {/* Indicators */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => { stopAuto(); setIndex(i); startAuto(); }}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-teal-600' : 'bg-white/70'}`}
                aria-label={`Ir para banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
