import React from "react";
import { NavLink } from "react-router-dom";
import c from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={c.dialog + " " + c.active}>
      <img
        src="https://jooinn.com/images/smiling-face-2.jpg"
        alt=""
      />
      <NavLink activeClassName={c.active} to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
