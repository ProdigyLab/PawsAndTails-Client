import { Image } from "antd";
import { FaTruck, FaUndo, FaShieldAlt, FaHeadset } from 'react-icons/fa';
const PetPolicyDescription = () => {
  return (
    <div>
      <div className="text-center py-16 bg-white">
        <div className="mb-8">
          <Image
            width={200}
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt="logo"
            
          />
          <p className="text-3xl font-bold text-orange-500">
            What your pet needs, <span>when they need it</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Free Same-Day Delivery */}
          <div className="flex flex-col items-center">
          <FaTruck className="text-gray-500 text-4xl mb-4" />
            <p className="text-lg font-semibold">Free Same-Day Delivery</p>
            <span className="text-wrap text-gray-500">
              Order by 2pm local time to get free delivery on orders $35+ today.
            </span>
          </div>
          {/* 30 Day Return */}
          <div className="flex flex-col items-center">
            <FaUndo className="text-gray-500 text-4xl mb-4" />
            <p className="text-lg font-semibold">30 Day Return</p>
            <span className="text-wrap text-gray-500">
              35% off your first order plus 5% off all future orders.
            </span>
          </div>
          {/* Security payment */}
          <div className="flex flex-col items-center">
          <FaShieldAlt className="text-gray-500 text-4xl mb-4"/>
            <p className="text-lg font-semibold">Security payment</p>
            <span className="text-wrap text-gray-500">
              25% off your online order of $50+. Available at most locations.
            </span>
          </div>
          {/* 24/7 Support */}
          <div className="flex flex-col items-center">
            <FaHeadset className="text-gray-500 text-4xl mb-4"/>
            <p className="text-lg font-semibold">24/7 Support</p>
            <span className="text-wrap text-gray-500">
              Shop online to get orders over $35 shipped fast and free.*
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetPolicyDescription;
