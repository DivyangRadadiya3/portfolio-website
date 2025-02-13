import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
 
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl  my-5 font-bold text-purple-600 dark:text-purple-400 ">
          Contact
        </h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-200">
          Want to contact us? Choose an option below and we'll be happy to show
          you how we can transform your company's web experience.
        </p>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-200">
            <div className="flex p-2 items-center justify-center rounded-full bg-green-900 text-gray-300">
              <FaMapMarkerAlt className="w-5 h-5" />
            </div>
            <span>Surat, Gujarat, India</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-200">
            <div className="flex p-2 items-center justify-center rounded-full bg-green-900 text-gray-300">
              <FaEnvelope className="w-5 h-5" />
            </div>
            <p className="">hello@company.com</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-200">
            <div className="flex p-2 items-center justify-center rounded-full bg-green-900 text-gray-300">
              <FaPhone className="w-5 h-5" />
            </div>
            <p className="">+91 11111111111</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ring-1 ring-green/20">
          <form>
            <input type="checkbox" id="" className="hidden" name="botcheck" />
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="name"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                autoComplete="false"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="email"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
