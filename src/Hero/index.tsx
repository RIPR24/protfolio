import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mountain from "../assets/mountains.png";
import ripr from "../assets/ripr.png";
import btres from "../assets/back-trees.png";
import ftres from "../assets/front-trees.png";

const Hero = () => {
  const heroref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroref,
    offset: ["start start", "end start"],
  });

  return (
    <div
      style={{ height: "100vh", position: "relative", zIndex: -1 }}
      ref={heroref}
    >
      <motion.div
        style={{
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "96%"]),
        }}
        className="moon"
      ></motion.div>
      <motion.img
        src={mountain}
        alt=""
        className="hero-imgs"
        style={{
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
        }}
      />
      <motion.img
        src={btres}
        alt=""
        className="hero-imgs"
        style={{
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]),
        }}
      />
      <motion.div
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="fldev"
        style={{
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "200%"]),
        }}
      >
        <p>FULL STACK</p>
        <p>DEVELOPER</p>
      </motion.div>
      <div className="itsme">
        <motion.p
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          I AM
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          BAPIYA SADHUKHAN
        </motion.p>
      </div>
      <motion.img
        src={ripr}
        alt=""
        className="hero-imgs"
        style={{
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]),
        }}
      />
      <motion.img
        src={ftres}
        alt=""
        className="hero-imgs"
        style={{
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]),
        }}
      />
    </div>
  );
};

export default Hero;
