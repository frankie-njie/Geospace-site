import React from "react";
import "./Banner.css";

function Banner(props) {
  return (
    <div
      className="hero-image"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${props.src})`,
      }}
    >
      <div className="hero-text">
        <h1>{props.head}</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.{" "}
        </p>
      </div>
    </div>
  );
}

export default Banner;
