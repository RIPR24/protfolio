import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

interface props {
  arr: {
    url: string;
    str: string;
  }[];
  scrollYProgress: MotionValue;
  del: number;
}

const Imgline = (props: props): JSX.Element => {
  const { arr, scrollYProgress, del } = props;
  const smoothprogress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        display: "flex",
        gap: 30,
        width: "95%",
        overflowX: "visible",
        x: useTransform(smoothprogress, [0, 1], [0, del * -700]),
      }}
    >
      {arr.map((el, i): JSX.Element => {
        return (
          <a key={i} href={el.str} target="blank">
            <img
              className="primg"
              src={el.url}
              alt=""
              loading="lazy"
              style={{
                height: 280,
                width: 500,
                borderRadius: 20,
                objectFit: "cover",
                transition: "0.1s",
              }}
            />
          </a>
        );
      })}
    </motion.div>
  );
};

export default Imgline;
