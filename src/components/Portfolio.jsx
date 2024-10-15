import React from 'react';
import { motion } from 'framer-motion';

import reactWeather from "../assets/portfolio/reactWeather.jpg";
import flightDelay from '../assets/portfolio/FlightDelay.webp';
import roadAccident from '../assets/portfolio/roadAccident.jpg';
import StockPricevsCrypto from '../assets/portfolio/StockPricevsCrypto.png';
import cricket from '../assets/portfolio/cricket.jpeg';
import cyberbreach from '../assets/portfolio/cyberdata.jpg';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'; // Importing icons

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: flightDelay,
      demoLink: "https://docs.google.com/presentation/d/1djje-pTmSxo53bqp70PDPWRM8ch6ezk_/edit?usp=sharing&ouid=116299598193837839153&rtpof=true&sd=true",
      codeLink: "https://github.com/narasimhachikkala/Flight_Delay_Analysis_Prediction/blob/main/src/603_project.ipynb",
    },
    {
      id: 2,
      src: roadAccident,
      demoLink: "https://docs.google.com/presentation/d/1slwNGCyF18n7t9ImaoFtcUR0dpG_kHFF/edit?usp=sharing&ouid=116299598193837839153&rtpof=true&sd=true",
      codeLink: "https://github.com/narasimhachikkala/Capstone_606/blob/main/src/Capstone_606_Project_Final.ipynb",
    },
    {
      id: 3,
      src: StockPricevsCrypto,
      demoLink: "https://docs.google.com/presentation/d/1XdPcea3spKkwQ13QPld4wz7wTd77BFdP/edit?usp=sharing&ouid=116299598193837839153&rtpof=true&sd=true",
      codeLink: "https://github.com/narasimhachikkala/Stocks-vs-Crypto-Price-Prediction/blob/main/690_project_Group8.ipynb",
    },
    {
      id: 4,
      src: cricket,
      demoLink: "https://docs.google.com/document/d/1rcQrv-1euswZfOOGunxFI7QghnRYbN-c/edit?usp=sharing&ouid=116299598193837839153&rtpof=true&sd=true",
      codeLink: "https://github.com/narasimhachikkala/cricket-data-analysis/blob/main/Cricket_Data_Analysis.ipynb",
    },
    {
      id: 5,
      src: cyberbreach,
      demoLink: "https://github.com/narasimhachikkala/cyber_breach_prediction/blob/main/mini%20report1.pdf",
      codeLink: "https://github.com/narasimhachikkala/cyber_breach_prediction/blob/main/Cyber_breach_prediction.ipynb",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: "https://your-demo-link-for-react-weather.com",
      codeLink: "https://your-code-link-for-react-weather.com",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit p-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <motion.div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: id * 0.1 }}
            >
              <motion.img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <div className="flex items-center justify-center">
                <motion.a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 flex items-center justify-center text-center text-white bg-gradient-to-r from-orange-400 to-red-500 rounded-lg shadow-lg hover:from-orange-500 hover:to-red-600 border-2 border-transparent hover:border-red-400 transition-all"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <FaExternalLinkAlt className="mr-2" /> Docs
                </motion.a>
                <motion.a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 flex items-center justify-center text-center text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 border-2 border-transparent hover:border-blue-400 transition-all"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <FaCode className="mr-2" /> Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
