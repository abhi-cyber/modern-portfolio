import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}>
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}>
        Abhiraj Singh Chatrath.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}>
        I craft things for the web.
      </motion.h3>
    </div>
  );
}

export default Hero;
