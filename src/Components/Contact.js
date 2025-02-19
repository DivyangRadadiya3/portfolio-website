import React, { useCallback, useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactForm = React.memo(() => {
  const contactInfo = useMemo(
    () => [
      { icon: FaMapMarkerAlt, text: "Surat, Gujarat, India" },
      { icon: FaEnvelope, text: "hello@company.com" },
      { icon: FaPhone, text: "+91 11111111111" },
    ],
    []
  );
  const socialLink = useMemo(
    () =>[
      { icon: FaFacebook, text: "Facebook", hoverColor: "blue-500" },
      { icon: FaTwitter, text: "Twitter", hoverColor: "blue-400" },
      { icon: FaInstagram, text: "Instagram", hoverColor: "red-600" },
      { icon: FaLinkedin, text: "LinkedIn", hoverColor: "blue-500" },
    ],
    []
  );

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too short!").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string()
      .min(10, "Message too short!")
      .required("Message is required"),
  });

  const handleSubmit = useCallback((values, { setSubmitting, resetForm }) => {
    console.log("Form submitted:", values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 1000);
  }, []);

  return (
    <section id="contact" className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4 ">
        <h2 className="text-center text-4xl my-5 font-mono font-bold text-purple-600 dark:text-purple-400">
          Contact
        </h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-200">
          Want to contact us? Choose an option below and we'll be happy to show
          you how we can transform your company's web experience.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {contactInfo.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-200"
            >
              <div className="flex p-2 items-center justify-center rounded-full bg-green-900 text-gray-300">
                <Icon className="w-5 h-5" />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ring-1 ring-green/20 w-full mx-auto">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-5">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border-2 rounded-md dark:bg-gray-900 focus:ring-4 border-gray-300 dark:border-gray-600"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-5">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border-2 rounded-md dark:bg-gray-900 focus:ring-4 border-gray-300 dark:border-gray-600"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border-2 rounded-md dark:bg-gray-900 h-36 focus:ring-4 border-gray-300 dark:border-gray-600"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:ring-offset-2 focus:ring-gray-200 dark:bg-white dark:text-black"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <hr className="my-4 mx-6  border-t border-gray-300" />

      <div className="mx-auto flex flex-wrap items-center justify-center gap-3 space-x-4 md:space-x-6 lg:space-x-8">
        {socialLink.map(({ icon: Icon, text, hoverColor }, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-200 sm:space-x-4 md:space-x-6 lg:space-x-8"
          >
            <div
              className={`flex p-2 items-center justify-center rounded-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:text-${hoverColor} dark:hover:text-${hoverColor}`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <p
              className={`text-gray-600 dark:text-gray-200 hover:text-${hoverColor} dark:hover:text-${hoverColor} text-sm sm:text-base md:text-lg lg:text-xl`}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default ContactForm;
