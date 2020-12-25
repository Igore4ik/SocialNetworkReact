import React from 'react';
import c from './Settings.module.css';
import Preloader from "../Preloader/Preloader";

const Settings = () =>{
   return(
       <div>
           <h1 className={c.title}>Settings</h1>
           <span className={c.pre}><Preloader/></span>
       </div>
   )
};

export default Settings;