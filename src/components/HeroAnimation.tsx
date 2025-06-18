import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

export const HeroAnimation = () => {
  return (
    <div className="w-full max-w-5xl">
      {" "}
      {/* Increased from max-w-4xl to max-w-5xl */}
      <motion.div
        whileHover={{
          y: -15,
          scale: 1.1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }}
        className="scale-125" // Added a base scale to make it 25% larger
      >
        <DotLottieReact
          src="https://lottie.host/dc285ec0-c906-43a6-8906-3cf7e88f55ed/gaDN7X7HKf.lottie"
          autoplay
          loop
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};
