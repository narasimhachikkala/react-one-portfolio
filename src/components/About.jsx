import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white py-20 px-4 md:px-20"
      style={{ scrollMarginTop: '100px' }} // Adds space for smooth scrolling
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        {/* Title */}
        <motion.div
          className="pb-8 mt-6" // Added margin-top for spacing
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>

        {/* First Paragraph */}
        <motion.p
          className="text-xl mt-4 mb-8 text-justify" // Added text-justify class for justification
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am a Data Engineer with a Master’s degree in Data Science from the University of Maryland, Baltimore County. I have a solid background in building and optimizing data pipelines, managing large-scale cloud infrastructure, and automating ETL processes. My expertise includes tools such as Apache Airflow, AWS Glue, and Informatica, as well as proficiency in cloud platforms like AWS (Redshift, S3, EMR) and big data frameworks including Apache Spark and Hadoop. I specialize in data modeling, real-time data processing, and leveraging machine learning to deliver insightful, data-driven solutions.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          className="text-xl mt-6 mb-6 text-justify" // Added text-justify class for justification
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Currently, I work at SForce Corp, where I manage large-scale data systems, implement ETL pipelines, and collaborate on projects that drive operational efficiency and business intelligence. I thrive on solving complex data challenges, whether it's optimizing data storage or developing machine learning models to improve decision-making. My expertise in cloud platforms like AWS, combined with a knack for data visualization using tools like Tableau and Power BI, allows me to deliver clear, impactful results to stakeholders.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
