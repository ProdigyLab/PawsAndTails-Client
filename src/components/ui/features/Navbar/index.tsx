import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input, Space } from "antd";
import SearchBarComponent from "./searchBar";

const { Search } = Input;
const NavBarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //     const handleScroll = () => {
  //       setIsScrolled(window.scrollY > (showBanner ? 45 : 0));

  //       const sectionIDs = NavItems.map((item) => item.name.toLowerCase());

  //       const currentSection = sectionIDs.find((sectionID) => {
  //         const sectionElement = document.getElementById(sectionID);
  //         if (sectionElement) {
  //           const { top, bottom } = sectionElement.getBoundingClientRect();
  //           const isSectionInView = top >= 0 && bottom <= window.innerHeight;
  //           return isSectionInView;
  //         }
  //         return false;
  //       });

  //       if (currentSection) {
  //         setActiveSection(currentSection);
  //       } else {
  //         setActiveSection("");
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     handleScroll();

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [showBanner]);

  return (
    <div>
      <div className=" grid grid-cols-3 ">
        <div className=" flex justify-center ">
          <Image
            src={`https://i.ibb.co/wCFf0kW/pet-shop-with-home-animals-petshop-supermarket-vector-25837276.jpg`}
            alt="Picture of the author"
            width={70}
            height={90}
          />
        </div>
        <div className="flex justify-evenly items-center cursor-pointer ">
          <div>About Us</div>
          <div>Services</div>
          <div>Contact Us</div>
        </div>
        <div className=" flex justify-center items-center">
          <SearchBarComponent />
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
