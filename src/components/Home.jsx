import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[80px]" // Adjust padding
      style={{ scrollMarginTop: "80px" }} // Ensures smooth scroll position leaves space for the navbar
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:space-x-8">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center h-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            <span className="whitespace-nowrap">Narasimha Naidu&nbsp;</span>
            <br className="hidden md:block" />
            <span>Chikkala</span>
          </h2>
          
          {/* Adjusted the Data Engineer text size responsively */}
          <p className="text-gray-400 py-4 max-w-md text-xl sm:text-2xl md:text-3xl font-bold">
            Data Engineer
          </p>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center md:w-1/2 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-4/5 max-w-[280px] md:max-w-[400px] lg:max-w-[300px] h-auto" // Adjust max-w sizes for different screens
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
