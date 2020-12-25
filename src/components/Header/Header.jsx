import React from "react";
import c from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <section className={c.header}>
      <div className={c.img}><img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" /></div>
      <div className={c.auth}>
          {
              props.isLogin
                  ? <><span>{props.login}</span> <button onClick={props.logoutThunk}>Log out</button> </>
              : <NavLink to={"/login"}>Login</NavLink>
          }

      </div>
    </section>
  );
};

export default Header;

