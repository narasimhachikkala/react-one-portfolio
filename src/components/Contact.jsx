import React from "react";
import { motion } from "framer-motion"; // Importing motion for animations

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white p-4 md:h-fit" // Removed pt-24
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        {/* Contact Title and Description with Motion */}
        <div className="pb-8 pt-20"> {/* Added pt-20 for consistent top padding */}
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500" // Keeping the same styles as other headings
            initial={{ opacity: 0, x: -100 }} // Start off-screen (left)
            whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to original position
            viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
            transition={{ duration: 0.7, delay: 0.2 }} // Smooth transition
          >
            Contact
          </motion.p>
          <motion.p
            className="py-6"
            initial={{ opacity: 0, y: 20 }} // Initial position
            whileInView={{ opacity: 1, y: 0 }} // Position when in view
            viewport={{ amount: 0.3 }} // Trigger when 30% in view
            transition={{ duration: 0.7, delay: 0.3 }} // Smooth transition
          >
            Submit the form below to get in touch with me
          </motion.p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center items-center">
          <motion.form
            action="https://getform.io/f/bmdpzdda"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide into view
            viewport={{ amount: 0.5 }} // Trigger when 50% of the element is in view
            transition={{ duration: 0.8, delay: 0.3 }} // Smooth form transition
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;