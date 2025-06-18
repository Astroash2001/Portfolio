import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import ResumeDownloadCard from "./DownloadBtn";
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
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background-light">
      <div className="section-container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto px-4">
            Get to know me better and discover the passion that drives my work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            {/* Wrap the AboutMeImage in a responsive container */}
            <div className="w-full max-w-md mx-auto overflow-hidden rounded-lg">
              <AboutMeImage />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center px-2 sm:px-4 md:px-0"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Crafting purposeful experiences through{" "}
              <span className="text-gradient">
                bold ideas, clean design, and smart technology
              </span>
              .
            </h3>
            <p className="text-text-secondary mb-4 md:mb-6">
              I'm a passionate Web Developer and Designer with a keen eye for
              detail and a drive to craft seamless, user-focused experiences.
              From concept to code, I specialize in transforming ideas into
              intuitive, visually engaging digital solutions.
            </p>
            <p className="text-text-secondary mb-6 md:mb-8">
              With experience across both frontend and backend technologies, I
              approach every project with creativity and precision—building
              clean, scalable systems and interfaces that are not only
              functional but also feel effortless to use.
            </p>

            {/* Make contact info and download button more responsive */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Left column for contact info */}
              <div className="flex flex-col gap-4 w-full sm:w-8/12 md:w-7/12">
                <div className="flex items-center">
                  <Calendar
                    className="text-primary mr-3 flex-shrink-0"
                    size={18}
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary text-sm md:text-base">
                    Born: 8 July 2001
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin
                    className="text-primary mr-3 flex-shrink-0"
                    size={18}
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary text-sm md:text-base">
                    Varanasi, Uttar Pradesh
                  </span>
                </div>
                <div className="flex items-center group">
                  <Mail
                    className="text-primary mr-3 flex-shrink-0"
                    size={18}
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary text-sm md:text-base overflow-hidden text-ellipsis whitespace-nowrap max-w-full group-hover:overflow-visible group-hover:whitespace-normal">
                    avinashsingh2003ash@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone
                    className="text-primary mr-3 flex-shrink-0"
                    size={18}
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary text-sm md:text-base">
                    9695787877
                  </span>
                </div>
              </div>

              {/* Right column for the download button - make responsive */}
              <div className="w-full sm:w-4/12 md:w-5/12 flex justify-center sm:justify-end items-start sm:items-center">
                <div className="w-full sm:max-w-xs">
                  <ResumeDownloadCard />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
