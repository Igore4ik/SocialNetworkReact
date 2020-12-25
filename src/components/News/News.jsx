import React from "react";
import c from "./News.module.css";
import Preloader from "../Preloader/Preloader";

const News = () => {
    return (
        <div>
            <h1 className={c.title}>News</h1>
            <span className={c.pre}><Preloader/></span>
        </div>
)
};

export default News;
