import React, { useMemo } from "react";

const Footer = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    // <footer className="bg-gray-800 text-white text-center p-4">
    //   <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
    // </footer>
    <div className="dark:bg-gray-900 dark:text-white bg-gray-200 text-black">
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg text-blue-500 dark:text-yellow-500">
            Quick Link
          </h3>
          <ul className="mt-2 space-y-2">
            {[
              "Home",
              "About Me",
              "My Experience",
              "Services",
              "My Recent Work",
              "Testimonials",
              "Contact Me",
            ].map((link, index) => (
              <li
                key={index}
                className="hover:text-blue-500 dark:hover:text-yellow-500 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-blue-500 dark:text-yellow-500">
            Services
          </h3>
          <ul className="mt-2 space-y-2">
            {[
              "Web Development",
              "APIs Development",
              "UI/UX Design",
              "Web Design",
              "Shopify",
            ].map((service, index) => (
              <li
                key={index}
                className="hover:text-blue-500 dark:hover:text-yellow-500 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-blue-500 dark:text-yellow-500">
            Contact
          </h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center space-x-2">
              <Phone size={16} />{" "}
              <span className="text-blue-500 dark:text-yellow-500">
                +91 9313706334
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />{" "}
              <span className="text-blue-500 dark:text-yellow-500">
                kriyanskthunt5678@gmail.com
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} />{" "}
              <span className="text-blue-500 dark:text-yellow-500">
                Surat, India
              </span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {["linkedin", "github", "instagram", "facebook", "x"].map(
              (icon, index) => (
                <div
                  key={index}
                  className="w-6 h-6 bg-blue-500 dark:bg-yellow-500 rounded-full"
                ></div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-500 dark:border-yellow-500">
        &copy; {currentYear} My Portfolio. All rights reserved.
      </div>
      
    </div>
  );
});

export default Footer;
