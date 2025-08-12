import Fadeup from "../Fadeup";
import Headings from "../Headings";
import svg1 from "../assets/ilust/undraw_website_5bo8.svg";
import svg2 from "../assets/ilust/mobile_development.svg";
import svg3 from "../assets/ilust/bar_graph.svg";
import svg4 from "../assets/ilust/Like.svg";
import svg5 from "../assets/ilust/relaxation.svg";

const Conttwo = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#151f21",
      }}
    >
      <div
        style={{
          height: 400,
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Headings str="I CAN BUILD" />
      </div>
      <div className="white-back">
        <div className="box">
          <div className="imgcon">
            <Fadeup>
              <img src={svg1} alt="" />
            </Fadeup>
          </div>
          <div className="con2con">
            <Fadeup>
              <p className="wp1">WEB DEVELOPMENT</p>
            </Fadeup>
            <Fadeup>
              <p className="wp2">
                An amazing website with a gorgeous landing page and a seamless
                user experience
              </p>
            </Fadeup>
          </div>
        </div>
        <div className="box rev">
          <div className="con2con">
            <Fadeup>
              <p className="wp1">MOBILE APP</p>
            </Fadeup>
            <Fadeup>
              <p className="wp2">
                Create an attractive mobile application with responsive design
                and effortless navigation.
              </p>
            </Fadeup>
          </div>
          <div className="imgcon">
            <Fadeup>
              <img src={svg2} alt="" />
            </Fadeup>
          </div>
        </div>
        <div className="box">
          <div className="imgcon">
            <Fadeup>
              <img src={svg3} alt="" />
            </Fadeup>
          </div>
          <div className="con2con">
            <Fadeup>
              <p className="wp1">INCREASE YOUR BUSINESS</p>
            </Fadeup>
            <Fadeup>
              <p className="wp2">
                Assist you in analyzing your data and clientele to help you make
                wise decisions that will grow your company
              </p>
            </Fadeup>
          </div>
        </div>
        <div className="box rev">
          <div className="con2con">
            <Fadeup>
              <p className="wp1">USER-FRIENDLY EXPIRIENCE</p>
            </Fadeup>
            <Fadeup>
              <p className="wp2">Creates an experience that users enjoy</p>
            </Fadeup>
          </div>
          <div className="imgcon">
            <Fadeup>
              <img src={svg4} alt="" />
            </Fadeup>
          </div>
        </div>
        <div className="box">
          <div className="imgcon">
            <Fadeup>
              <img src={svg5} alt="" />
            </Fadeup>
          </div>
          <div className="con2con">
            <Fadeup>
              <p className="wp1">HELPS YOU RELAX</p>
            </Fadeup>
            <Fadeup>
              <p className="wp2">
                I would create a calm atmosphere and earn your trust, which
                should enable you to take it easy.
              </p>
            </Fadeup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conttwo;
