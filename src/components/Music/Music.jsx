import React from 'react';
import c from './Music.module.css';
import Preloader from "../Preloader/Preloader";

const Music = () =>{
   return(
       <div>
           <h1 className={c.title}>Music</h1>
           <span className={c.pre}><Preloader/></span>
       </div>
   )
};

export default Music;