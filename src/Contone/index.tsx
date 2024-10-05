import frontmem from "../assets/mem/front-mem.jpg";
import frontomem from "../assets/mem/front1-mem.jpg";
import logmem from "../assets/mem/log-mem.jpg";
import plansmem from "../assets/mem/plans-mem.jpg";
import infomem from "../assets/mem/info-mem.jpg";
import Imgline from "./Imgline";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Headings from "../Headings";

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
        <Imgline
          arr={[frontmem, plansmem, logmem, infomem, frontomem]}
          str={"https://singular-hamster-33a29c.netlify.app"}
          scrollYProgress={scrollYProgress}
          del={0.8}
        />
        <Imgline
          arr={[frontmem, plansmem, logmem, infomem, frontomem]}
          str={"https://singular-hamster-33a29c.netlify.app"}
          scrollYProgress={scrollYProgress}
          del={1}
        />
        <Imgline
          arr={[frontmem, plansmem, logmem, infomem, frontomem]}
          str={"https://singular-hamster-33a29c.netlify.app"}
          scrollYProgress={scrollYProgress}
          del={1.2}
        />
      </div>
    </div>
  );
};

export default Contone;
