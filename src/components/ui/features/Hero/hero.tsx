import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Parallax,Navigation, Pagination, Autoplay } from 'swiper/modules';
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
    <div className="relative w-full overflow-hidden">
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
        //  navigation={true}
         modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="h-screen"
        loop={true}
      >
        {pets.map((pet) => (
          <SwiperSlide key={pet.id}>
            <div className="relative h-full flex items-center justify-between">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={pet.imageUrl}
                  alt={pet.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  data-swiper-parallax="-23%"
                  className="z-10 transform scale-110"
                />
                <div className="absolute  z-10">
                  <h1 className="text-white text-5xl font-bold" data-swiper-parallax="-300">{pet.name}</h1>
                  <p className="text-white text-xl mt-2" data-swiper-parallax="-200">{pet.description}</p>
                </div>
                <button className="absolute bottom-10 left-10 z-10 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition" data-swiper-parallax="-100">
                  Shop Now
                </button>
              </div>
              {/* Paw Prints in the Background */}
              <div className="absolute inset-0 z-0 opacity-50">
                <div
                  className="absolute top-1/4 left-1/4 w-48 h-48 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: "url('https://i.ibb.co/418M2tY/KOA-Nassau-2697x1517.jpg')", // Replace with your paw print image path
                  }}
                  data-swiper-parallax="-400"
                ></div>
                <div
                  className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: "url('https://i.ibb.co/Wzq5zJ3/paw.png')", // Replace with your paw print image path
                  }}
                  data-swiper-parallax="-200"
                ></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L40,122.7C80,117,160,107,240,128C320,149,400,203,480,197.3C560,192,640,128,720,101.3C800,75,880,85,960,112C1040,139,1120,181,1200,192C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroComponent;
