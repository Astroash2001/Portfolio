import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="#home"
              className="relative text-2xl font-bold text-gradient cursor-pointer px-4 py-2 rounded-lg border-2 border-transparent overflow-hidden"
              whileHover={{
                background:
                  "linear-gradient(135deg, #fff 0%, #a0c4ff 50%, #fff 100%)",
                backgroundSize: "200% 200%",
                color: "#0F172A",
                borderColor: "#a0c4ff",
                scale: 1.1, // Adds a small scale effect
                x: 5, // Moves the button a little to the right
                y: -5, // Moves the button slightly upwards
                transition: { duration: 0.3 },
              }}
            >
              AshFolio.
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium hover:text-primary transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="h-0.5 bg-primary mt-1"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <AnimatedButton>
              <a href="#contact" className="text-sm font-medium">
                Let's Talk
              </a>
            </AnimatedButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-background-light"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-text-secondary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <AnimatedButton className="w-full">
              <a
                href="#contact"
                className="block text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </a>
            </AnimatedButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
