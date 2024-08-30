import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Parallax, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
interface Pet {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const pets: Pet[] = [
  {
    id: 1,
    name: 'Bella',
    description: 'A friendly golden retriever.',
    imageUrl: 'https://i.ibb.co/tHsXGJS/manja-vitolic-g-KXKBY-C-Dk-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Max',
    description: 'A playful beagle.',
    imageUrl: 'https://i.ibb.co/RHjgfxt/dog-animal-DOTORLBDD7.jpg',
  },
  {
    id: 3,
    name: 'Luna',
    description: 'A gentle Labrador.',
    imageUrl: 'https://i.ibb.co/418M2tY/KOA-Nassau-2697x1517.jpg',
  },
];

const HeroComponent: React.FC = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        parallax={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="h-full"
        loop={true}
      >
        {pets.map((pet) => (
          <SwiperSlide key={pet.id}>
            <div className="relative h-full flex items-center justify-center">
            <div className="absolute inset-4 md:inset-0 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={pet.imageUrl}
                  alt={pet.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  data-swiper-parallax="-23%"
                  className="z-10"
                />
              </div>
              <div className="relative z-20 text-center">
                <h1 className="text-white text-4xl font-bold" data-swiper-parallax="-300">{pet.name}</h1>
                <p className="text-white text-lg mt-2" data-swiper-parallax="-200">{pet.description}</p>
                <button className="mt-4 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition" data-swiper-parallax="-100">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroComponent;