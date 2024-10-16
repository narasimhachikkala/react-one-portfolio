import React from "react";
import { motion } from "framer-motion"; // Importing motion for animations

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Data Engineer",
      company: "SForce Corp",
      duration: "July 2023 - Present",
      description: [
        "Managed large-scale data storage and ETL pipelines using AWS S3, Airflow, and Glue, optimizing workflows and reducing data processing time by 30%.",
        "Developed real-time data pipelines with Kafka and Spark, and created dashboards with Tableau and Power BI for actionable business insights.",
      ],
    },
    {
      id: 2,
      title: "Data Engineer Intern",
      company: "TechCiti Technologies Private Limited",
      duration: "January 2021 - June 2022",
      description: [
        "Collaborated with data scientists to provide clean datasets for machine learning, automating ETL workflows and optimizing cloud infrastructure, reducing costs and improving system performance.",
        "Optimized query performance, developed automated testing suites for data pipelines, and ensured schema evolution while maintaining data quality and accuracy.",
      ],
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Verzeo Edutech Pvt. Ltd",
      duration: "April 2021 - June 2021",
      description: [
        "Gathered, cleaned, and preprocessed large datasets using Pandas and NumPy while developing predictive models with Scikit-learn, TensorFlow, and Keras to support data-driven decision-making.",
        "Conducted exploratory data analysis with Matplotlib and Seaborn, delivering impactful visualizations and insights through Tableau and Power BI, enhancing stakeholder decision-making and improving classification accuracy by 15%.",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      title: "Masters in Data Science",
      company: "University of Maryland Baltimore County",
      duration: "August 2022 - May 2024",
      description: "Relevant Coursework: Machine Learning, Big Data, Data Management.",
    },
    {
      id: 2,
      title: "Bachelors in Computer Science Engineering",
      company: "Jawaharlal Nehru Technological University",
      duration: "July 2018 - July 2022",
      description: "Relevant Coursework: Database Management Systems, Java Programming, Data Structures and Algorithms, Computer Networks, Web Technologies.",
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-8 md:p-20">
        {/* Experience Section */}
        <div className="pb-8">
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            initial={{ opacity: 0, x: -100 }} // Slide in from the left
            whileInView={{ opacity: 1, x: 0 }} // Move to its original position
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Experience
          </motion.p>
          <motion.p
            className="py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Here are my professional experiences
          </motion.p>
        </div>

        <div className="mb-12">
          <ul className="space-y-8">
            {workExperience.map(({ id, title, company, duration, description }) => (
              <motion.li
                key={id}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 duration-300"
                initial={{ opacity: 0, y: 20 }} // Start slightly below
                whileInView={{ opacity: 1, y: 0 }} // Move into view
                viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the item is in view
                transition={{ duration: 0.7, ease: "easeInOut", delay: id * 0.1 }} // Smooth transition with custom easing
              >
                <h4 className="text-3xl font-bold">{title}</h4>
                <p className="text-xl text-gray-400">{company} - {duration}</p>
                <ul className="mt-4 list-disc ml-6 space-y-2 text-lg">
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Education Section */}
        <div className="pb-8">
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            initial={{ opacity: 0, x: -100 }} // Slide in from the left
            whileInView={{ opacity: 1, x: 0 }} // Move to its original position
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Education
          </motion.p>
          <motion.p
            className="py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            My educational background
          </motion.p>
        </div>

        <div className="mb-0">
          <ul className="space-y-8">
            {education.map(({ id, title, company, duration, description }) => (
              <motion.li
                key={id}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 duration-300"
                initial={{ opacity: 0, y: 20 }} // Start slightly below
                whileInView={{ opacity: 1, y: 0 }} // Move into view
                viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the item is in view
                transition={{ duration: 0.7, ease: "easeInOut", delay: id * 0.1 }} // Smooth transition with custom easing
              >
                <h4 className="text-3xl font-bold">{title}</h4>
                <p className="text-xl text-gray-400">{company} - {duration}</p>
                <p className="mt-4 text-lg">{description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
