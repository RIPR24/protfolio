import Imgline from "./Imgline";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Headings from "../Headings";
import { arr1, arr2, arr3 } from "./getarr";

const Contone = () => {
  const conref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: conref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={conref} className="cont-one">
      <div
        style={{
          height: 400,
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Headings str="SOME OF MY PROJECTS" />
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", gap: 30 }}
        className="imgcont"
      >
        <Imgline arr={arr1} scrollYProgress={scrollYProgress} del={0.8} />
        <Imgline arr={arr2} scrollYProgress={scrollYProgress} del={1} />
        <Imgline arr={arr3} scrollYProgress={scrollYProgress} del={1.2} />
      </div>
    </div>
  );
};

export default Contone;
