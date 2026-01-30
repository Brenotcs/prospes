
import { ClassAttributes, HTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { beforeAfterImages } from '../data/beforeAfterImages';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function BeforeAfterSection() {

  return (
    <section id="antesedepois" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Antes e Depois
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja resultados reais do uso dos produtos Decreína
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          {beforeAfterImages.map((item, idx) => {
            // Se só houver uma imagem, usa a mesma dos dois lados
            const beforeImg = item.before || item.after;
            const afterImg = item.after || item.before;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp flex flex-col items-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative w-full" style={{ maxWidth: 400, minWidth: 250, height: 260 }}>
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={beforeImg} alt="Antes" style={{ objectFit: 'cover', width: '100%', height: 260 }} />}
                    itemTwo={<ReactCompareSliderImage src={afterImg} alt="Depois" style={{ objectFit: 'cover', width: '100%', height: 260 }} />}
                    portrait={false}
                    className="rounded-xl overflow-hidden w-full"
                    style={{ width: '100%', height: 260 }}
                    onlyHandleDraggable
                    handle={
                      <div style={{ background: 'white', borderRadius: 999, boxShadow: '0 2px 8px #0002', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontWeight: 700, fontSize: 18, color: '#666' }}>|||</span>
                      </div>
                    }
                  />
                  <span className="text-white font-bold text-lg absolute top-3 left-4 drop-shadow pointer-events-none select-none">Antes</span>
                  <span className="text-white font-bold text-lg absolute top-3 right-4 drop-shadow pointer-events-none select-none">Depois</span>
                </div>
                <div className="flex flex-col justify-between h-full w-full">
                  <p className="text-gray-700 text-center italic text-base mb-8 mt-4">“{item.description}”</p>
                  <div className="w-full flex justify-center absolute bottom-4 left-0">
                    <span className="bg-teal-50 text-teal-700 px-4 py-1 rounded-full font-bold text-sm shadow-sm border border-teal-200">{item.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
