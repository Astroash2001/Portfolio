import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Mail, Phone, Download } from "lucide-react";
import ResumeDownloadCard from "./DownloadBtn";
import CardDown from "./DownloadBtn";

// Import the AboutMeImage component directly
// Since the component is exported as default and named Card in the source file
import AboutMeImage from "./AboutMeImage";

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-background-light">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Get to know me better and discover the passion that drives my work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Replaced the commented code with the AboutMeImage component */}
            <AboutMeImage />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Crafting purposeful experiences through{" "}
              <span className="text-gradient">
                bold ideas, clean design, and smart technology
              </span>
              .
            </h3>
            <p className="text-text-secondary mb-6">
              I'm a passionate Web Developer and Designer with a keen eye for
              detail and a drive to craft seamless, user-focused experiences.
              From concept to code, I specialize in transforming ideas into
              intuitive, visually engaging digital solutions.
            </p>
            <p className="text-text-secondary mb-8">
              With experience across both frontend and backend technologies, I
              approach every project with creativity and precision—building
              clean, scalable systems and interfaces that are not only
              functional but also feel effortless to use.
            </p>

            <div className="flex flex-row gap-8 mb-16">
              {/* Left column for contact info */}
              <div className="flex flex-col gap-4 w-7/12">
                <div className="flex items-center">
                  <Calendar className="text-primary mr-3" size={20} />
                  <span className="text-text-secondary">Born: 8 July 2001</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-3" size={20} />
                  <span className="text-text-secondary">
                    Varanasi, Uttar Pradesh
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary mr-3" size={20} />
                  <span className="text-text-secondary">
                    avinashsingh2003ash@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-3" size={20} />
                  <span className="text-text-secondary">9695787877</span>
                </div>
              </div>

              {/* Right column for the download button */}
              <ResumeDownloadCard />
            </div>
          </motion.div>{" "}
        </div>
      </div>
    </section>
  );
};
