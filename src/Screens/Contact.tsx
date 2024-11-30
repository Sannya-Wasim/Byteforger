import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Lottie from "lottie-react";
import ContactJSON from "../assets/json/Contact JSON.json";
import Footer from "../components/Footer";
import addressIcon from '../assets/images/addressIcon.png'
import mailIcon from '../assets/images/mailIcon.png'
import callIcon from '../assets/images/callIcon.png'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="my-8">
        {/* Hero Section */}
        <div className="flex flex-row justify-between items-center pl-8">
          <div className="lg:w-3/4">
            <p className="text-5xl text-darkBlue font-play font-400 my-6">
              Get in <span className="text-darkPink">Touch</span> with Us
            </p>
            <p className="text-xl text-black tracking-tight">
              We'd love to hear from you. Reach out for queries, feedback, or
              collaboration
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end">
            <Lottie
              animationData={ContactJSON}
              loop={true}
              className="lg:h-3/4"
            />
          </div>
        </div>
        {/* Details */}
        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-6 bg-lightGray">
          {/* Address Section */}
          <div className="flex flex-col items-center text-center">
            <img src={addressIcon} alt="Address" className="w-12 h-12" />
            <h3 className="mt-4 text-lg font-bold">Our Address</h3>
            <p className="mt-2 text-sm text-gray-600">
              1234 Main St, City, Country
            </p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center text-center">
            <img src={mailIcon} alt="Email" className="w-12 h-12" />
            <h3 className="mt-4 text-lg font-bold">Email Us</h3>
            <p className="mt-2 text-sm text-gray-600">contact@example.com</p>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col items-center text-center">
            <img src={callIcon} alt="Phone" className="w-12 h-12" />
            <h3 className="mt-4 text-lg font-bold">Call Us</h3>
            <p className="mt-2 text-sm text-gray-600">+123 456 7890</p>
          </div>
        </div>

        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
