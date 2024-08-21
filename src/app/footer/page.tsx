import FooterComponent from "@/components/ui/features/Footer";
import React from "react";

const FooterLayout = () => {
    return  (
        <footer className="bg-gray-900 text-white py-12 w-full">
            {/* Add footer content here */}
            <FooterComponent />
        </footer>
    )
}

export default FooterLayout;