import React, { useState, useEffect, useRef } from 'react';

const MobileAppSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState('https://7xcel.com/wp-content/uploads/2024/05/Food.png');
  const imgLinksRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = (imageSrc: string) => {
    setActiveImage(imageSrc);
  };

  useEffect(() => {
    const handleMouseWheel = (ele: HTMLElement) => {
      if (imgLinksRef.current) {
        const buttons = imgLinksRef.current.querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('active'));
        ele.classList.add('active');
        setActiveImage(ele.getAttribute('data-src') || '');
      }
    };

    const options = { threshold: 0.4 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('wheel', () => handleMouseWheel(entry.target as HTMLElement));
        } else {
          window.removeEventListener('wheel', () => handleMouseWheel(entry.target as HTMLElement));
        }
      });
    }, options);

    if (imgLinksRef.current) {
      const targetElements = imgLinksRef.current.querySelectorAll('button');
      targetElements.forEach(element => observer.observe(element));
    }

    return () => {
      window.removeEventListener('wheel', () => {});
    };
  }, []);

  return (
    <section className="bg-gray-900 pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="flex flex-col xl:w-7/12 lg:w-7/12 w-full">
            <div className="space-y-5" ref={imgLinksRef}>
              {buttonData.map((button, index) => (
                <button
                  key={index}
                  data-src={button.imageSrc}
                  className={`text-left border border-gray-600 rounded-lg p-4 bg-transparent hover:bg-gray-800 transition-all ${activeImage === button.imageSrc ? 'shadow-lg border-none bg-gray-800' : ''}`}
                  onClick={() => handleButtonClick(button.imageSrc)}
                >
                  <i className={`hp_icon ${button.icon}`}></i>
                  <h3 className="text-xl font-bold mb-2 text-orange-400">{button.title}</h3>
                  <p className="text-base text-gray-300">{button.description}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="xl:w-4/12 lg:w-4/12 w-full hidden sm:block ml-auto">
            <div className="relative h-[700px] sticky top-[140px]">
              <img src={activeImage} id="mainImage" alt="Featured" className="absolute top-9 left-20 w-[55%] rounded-xl" />
              <div className="absolute inset-0 bg-[url('https://7xcel.com/wp-content/uploads/2024/05/iphone-1-1.png')] bg-left bg-no-repeat bg-contain"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const buttonData = [
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/Food.png',
    icon: 'food',
    title: 'Image 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/Grocery-App.png',
    icon: 'grocery',
    title: 'Image 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/Home-Services.png',
    icon: 'homeser',
    title: 'Image 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/Medicine-Delivery-App.png',
    icon: 'medicine',
    title: 'Image 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/Fitness-App.png',
    icon: 'fitness',
    title: 'Image 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/Taxi-Booking.png',
    icon: 'taxi',
    title: 'Image 6',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/e-learning.png',
    icon: 'elearning',
    title: 'Image 7',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/Doctor-on-Demand.png',
    icon: 'doctor',
    title: 'Image 8',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    imageSrc: 'https://7xcel.com/wp-content/uploads/2024/05/Dating-App.png',
    icon: 'dating',
    title: 'Image 9',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
];

export default MobileAppSection;
