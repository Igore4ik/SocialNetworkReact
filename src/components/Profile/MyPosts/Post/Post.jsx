import React from "react";
import c from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={c.post}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Gnome-face-smile.svg/1200px-Gnome-face-smile.svg.png"
        alt=""
      />
      {props.message}
      <p>like <span className={c.countLikes}>{props.countLikes}</span></p>
    </div>
  );
};

export default Post;
