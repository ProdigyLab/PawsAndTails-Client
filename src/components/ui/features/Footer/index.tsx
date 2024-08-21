import React from "react";
import Image from 'next/image';
import { Button, Input } from 'antd';
import Link from "next/link";
const FooterComponent = () => {
  return (
    <>
    <footer className="py-12 w-full bg-slate-600 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sign up for offers</h3>
            <p className="mb-4">Sign up for our newsletter to receive exclusive offers & discounts!</p>
            <div className="flex justify-end items-center">
              <Input
                placeholder="Your email address..."
                className=" border-none rounded-l-md py-2 px-1 focus:outline-none relative"
              />
              <Button
                type="primary"
                className="bg-orange-500 hover:bg-orange-600 rounded-r-md py-2 px-4 absolute"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Corporate</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-500">Careers</Link></li>
              <li><Link href="#" className="hover:text-orange-500">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Code of Ethics</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Event Sponsorships</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Vendors</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Affiliate Program</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-500">Track Order</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Returns</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Recalls & Advisories</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Pet Store Locator</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-500">Grooming</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Positive Dog Training</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Veterinary Services</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Petco Insurance</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Pet Adoption</Link></li>
              <li><Link href="#" className="hover:text-orange-500">Resource Center</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-orange-500">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            {/* Add other social media icons here */}
          </div>
          <div className="flex items-center space-x-4">
            {/* <Image src="/payment-methods.png" alt="Payment methods" width={160} height={40} /> */}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} The Pet Shop
        </div>
      </div>
      </footer>
    </>
  );
};

export default FooterComponent;
