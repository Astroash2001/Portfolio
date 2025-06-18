import React from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent";
  className?: string;
  onClick?: () => void;
  square?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  color = "primary",
  className = "",
  onClick,
  square = false,
}) => {
  const getColorClasses = () => {
    switch (color) {
      case "secondary":
        return "bg-secondary hover:bg-secondary-hover shadow-glow-secondary";
      case "accent":
        return "bg-accent hover:bg-accent-hover shadow-glow-accent";
      default:
        return "bg-primary hover:bg-primary-hover shadow-glow";
    }
  };

  return (
    <motion.button
      className={`relative overflow-hidden ${
        square ? "rounded-lg" : "rounded-full"
      } px-6 py-2.5 text-text-primary font-medium 
        transition-all duration-300 hover:scale-105 hover:shadow-lg ${getColorClasses()} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className={`absolute inset-0 bg-white bg-opacity-20`}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0.4 }}
        transition={{ duration: 0.4 }}
        style={{
          originX: 0.5,
          originY: 0.5,
          borderRadius: square ? "8px" : "50%",
        }}
      />
    </motion.button>
  );
};
