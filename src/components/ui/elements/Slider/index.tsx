// components/CompanySlider.tsx

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SwiperCore from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

// Install Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

interface SlideData {
  id: number;
  company: string;
  quote: string;
  person: string;
  role: string;
  imageUrl: string;
}

const slidesData: SlideData[] = [
  {
    id: 1,
    company: 'Magical',
    quote: 'We did consider open source, but WorkOS provided a far superior developer experience.',
    person: 'Jeanne Thai',
    role: 'Product Manager',
    imageUrl: '/path-to-image.jpg', // Use actual image URL
  },
  {
    id: 2,
    company: 'PlanetScale',
    quote: 'PlanetScale has transformed our database management process and has made it faster.',
    person: 'John Doe',
    role: 'Lead Engineer',
    imageUrl: '/path-to-image.jpg', // Use actual image URL
  },
  {
    id: 3,
    company: 'incident.io',
    quote: 'Incident management has become a breeze with incident.io.',
    person: 'Alice Smith',
    role: 'Tech Lead',
    imageUrl: '/path-to-image.jpg', // Use actual image URL
  },
  // Add more slides as needed
];

const CompanySlider = () => {
  const [activeCompany, setActiveCompany] = useState<string>('Magical');

  const handleCompanyClick = (company: string) => {
    setActiveCompany(company);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = slidesData.findIndex((slide) => slide.company === activeCompany);
      const nextIndex = (currentIndex + 1) % slidesData.length;
      setActiveCompany(slidesData[nextIndex].company);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [activeCompany]);

  return (
    <div className="container mx-auto py-8">
      {/* Swiper for Testimonial Slides */}
      <div className="bg-white shadow-md p-6 rounded-lg max-w-4xl mx-auto">
        <Swiper
          effect="fade"
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1}
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => setActiveCompany(slidesData[swiper.realIndex].company)}
          onSwiper={(swiper) => swiper.slideTo(slidesData.findIndex((s) => s.company === activeCompany))}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-green-600">{slide.company}</h2>
                <p className="text-lg italic mb-6 text-gray-700">"{slide.quote}"</p>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                    <img src={slide.imageUrl} alt={slide.person} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{slide.person}</h4>
                    <p className="text-sm text-gray-500">{slide.role}</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:underline">Read more &rarr;</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Company Name List */}
      <div className="flex justify-center space-x-8 mt-6">
        {slidesData.map((slide) => (
          <button
            key={slide.id}
            className={`text-lg font-semibold ${
              slide.company === activeCompany ? 'text-green-600' : 'text-gray-400'
            }`}
            onClick={() => handleCompanyClick(slide.company)}
          >
            {slide.company}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompanySlider;

