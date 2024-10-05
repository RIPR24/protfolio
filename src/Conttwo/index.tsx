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
        <Headings str="I CAN BUILD YOU" />
      </div>
      <div
        style={{
          width: "90%",
          overflowX: "hidden",
          height: "auto",
          borderRadius: 60,
          backgroundColor: "white",
          padding: "90px 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "1fr 1fr",
            placeItems: "center",
          }}
        >
          <div>
            <Fadeup>
              <img src={svg1} alt="" style={{ height: 500, width: 500 }} />
            </Fadeup>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              height: 300,
              marginTop: 100,
            }}
          >
            <Fadeup>
              <p style={{ width: 500, fontSize: "3rem" }}>WEB DEVELOPMENT</p>
            </Fadeup>
            <Fadeup>
              <p style={{ width: 500, fontSize: "2rem" }}>
                An amazing website with a gorgeous landing page and a seamless
                user experience
              </p>
            </Fadeup>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              height: 300,
              marginTop: 100,
            }}
          >
            <Fadeup>
              <p style={{ width: 500, fontSize: "3rem" }}>MOBILE APP</p>
            </Fadeup>
            <Fadeup>
              <p style={{ width: 500, fontSize: "2rem" }}>
                An amazing website with a gorgeous landing page and a seamless
                user experience
              </p>
            </Fadeup>
          </div>
          <div>
            <Fadeup>
              <img src={svg2} alt="" style={{ height: 500, width: 500 }} />
            </Fadeup>
          </div>
          <div>
            <Fadeup>
              <img src={svg3} alt="" style={{ height: 500, width: 500 }} />
            </Fadeup>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              height: 300,
              marginTop: 100,
            }}
          >
            <Fadeup>
              <p style={{ width: 500, fontSize: "2.2rem" }}>
                INCREASE YOUR BUSINESS
              </p>
            </Fadeup>
            <Fadeup>
              <p style={{ width: 500, fontSize: "2rem" }}>
                Assist you in analyzing your data and clientele to help you make
                wise decisions that will grow your company
              </p>
            </Fadeup>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              height: 300,
              marginTop: 100,
            }}
          >
            <Fadeup>
              <p style={{ width: 500, fontSize: "3rem" }}>HELP YOU RELAX</p>
            </Fadeup>
            <Fadeup>
              <p style={{ width: 500, fontSize: "2rem" }}>
                Creates an experience that users enjoy
              </p>
            </Fadeup>
          </div>
          <div>
            <Fadeup>
              <img src={svg4} alt="" style={{ height: 500, width: 500 }} />
            </Fadeup>
          </div>
          <div>
            <Fadeup>
              <img src={svg5} alt="" style={{ height: 500, width: 500 }} />
            </Fadeup>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              height: 300,
              marginTop: 100,
            }}
          >
            <Fadeup>
              <p style={{ width: 500, fontSize: "3rem" }}>HELPS YOU RELAX</p>
            </Fadeup>
            <Fadeup>
              <p style={{ width: 500, fontSize: "2rem" }}>
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
