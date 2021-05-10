import React from "react";
import Lottie from "react-lottie";
import animationData from "./texas.json";


function CoronaVirus() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  

  return (<Lottie options={defaultOptions} height={400} width={600} />);
}

export default CoronaVirus;
