import img1 from '../assets/verticais/IMG_0140.jpg';
import img2 from '../assets/verticais/IMG_0180.jpg';
import img3 from '../assets/verticais/IMG_0323.jpg';

export default function VerticalImages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        <div className="grid grid-cols-3 gap-4 xl:gap-8">
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Imagem vertical 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={img2}
              alt="Imagem vertical 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={img3}
              alt="Imagem vertical 3"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
