import React from "react";
import c from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={c.ldsRipple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Preloader;
