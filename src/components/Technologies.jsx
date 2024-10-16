import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.jpg";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import mongoDB from "../assets/mongoDB.png";
import postgreSQL from "../assets/postgreSQL.png";
import aws from "../assets/aws.jpg";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-sky-300",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: postgreSQL,
      title: "PostgreSQL",
      style: "shadow-blue-300",
    },
    {
      id: 9,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: aws,
      title: "AWS",
      style: "shadow-blue-100",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Technologies
          </motion.p>
          <motion.p
            className="py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            These are the technologies I've worked with
          </motion.p>
        </div>

        {/* Adjusted grid layout for small screens and larger */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md py-2 rounded-lg ${style}`}
              initial={{ opacity: 0, y: 50 }} // Initial position
              whileInView={{ opacity: 1, y: 0 }} // Position when in view
              viewport={{ amount: 0.3 }} // Trigger when 30% in view
              transition={{ duration: 0.5, ease: "easeInOut", delay: id * 0.1 }} // Animation duration and delay
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }} // Faster hover scale
              // Set the transition for scale back to normal
              animate={{ scale: 1, transition: { duration: 0.1 } }} // Simultaneous reduction
            >
              <img
                src={src}
                alt={title}
                className="w-20 mx-auto" // Adjusted width for better view
              />
              <p className="mt-4 text-lg font-semibold">{title}</p> {/* Slightly bigger font */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
