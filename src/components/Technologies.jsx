import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
//import nextjs from "../assets/nextjs.png";
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
      style: "shadow-blue-400",
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
      title: "PYTHON",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: postgreSQL,
      title: "postgreSQL",
      style: "shadow-blue-300",
    },
    {
      id: 9,
      src: mysql,
      title: "MYSQL",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: mongoDB,
      title: "mongoDB",
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
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit p-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md py-2 rounded-lg ${style}`}
              initial={{ opacity: 0, scale: 0.9 }} // Initial state
              whileInView={{ opacity: 1, scale: 1 }} // Final state when in view
              viewport={{ amount: 0.3 }} // Trigger when 30% of the item is in view
              transition={{ duration: 0.5, delay: id * 0.1 }} // Smooth transition
              whileHover={{
                scale: 1.05, // Scale up slightly on hover
                transition: { duration: 0.3 }, // Smooth transition for hover
              }}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
