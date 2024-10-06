import { useState } from "react";
import Fadeup from "../Fadeup";
import Headings from "../Headings";

const Contactme = () => {
  const [rev, setRev] = useState(false);
  return (
    <div
      id="contactme"
      style={{
        width: "100%",
        minHeight: 400,
        backgroundColor: "#151f21",
        padding: "100px 20px",
        display: "flex",
      }}
    >
      <div style={{ width: "100%", maxWidth: 700 }}>
        <Headings str="CONTACT"></Headings>
        <Fadeup>
          <p
            style={{
              color: "white",
              fontSize: "1.5rem",
              width: 600,
              paddingLeft: 100,
            }}
          >
            It doesn’t matter how large or small your business is, just how big
            your vision is.
          </p>
        </Fadeup>
      </div>
      <div
        style={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
          width: "100%",
          padding: 50,
        }}
      >
        <Fadeup>
          <p
            style={{
              color: "white",
              fontSize: "1.5rem",
              paddingLeft: 100,
            }}
          >
            EMAIL ME :
          </p>
        </Fadeup>
        <Fadeup>
          <div
            style={{
              height: 50,
              width: 250,
              overflow: "hidden",
              marginLeft: 100,
              position: "relative",
            }}
          >
            <p
              style={{
                position: "absolute",
                top: 0,
                left: rev ? -250 : 0,
                zIndex: 1,
                backgroundColor: "#c1c1c1",
                height: 50,
                width: 250,
                transition: ".6s",
                textAlign: "center",
                padding: 15,
              }}
              onClick={() => {
                setRev(true);
              }}
            >
              click to reveal
            </p>
            <p
              style={{
                color: "white",
                fontSize: "1.2rem",
                width: 250,
                padding: "5px 0",
              }}
            >
              bapiyaofficial@gmail.com
            </p>
          </div>
        </Fadeup>
      </div>
    </div>
  );
};

export default Contactme;
