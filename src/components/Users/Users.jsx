import React from "react";
import {NavLink} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import c from "./Users.module.css";

const defaultPhoto =
    "https://us.123rf.com/450wm/yayayoy/yayayoy1511/yayayoy151100009/48712505-stock-vector-smiling-emoticon-with-open-mouth-and-smiling-eyes.jpg?ver=6";

const Users = (props) => {
    let pages = Math.ceil(props.totalUsersCount / props.pageSize);
    let arrOfPages = [];
    for (let i = 1; i <= pages; i++) {
        arrOfPages.push(i);
    }
    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <div>
                {arrOfPages.map((el) => {
                    return (
                        <span
                            key={el}
                            className={
                                props.currentPage === el ? c.activePage + " " + c.page : c.page
                            }
                            onClick={() => {
                                props.setPage(el);
                            }}
                        >
              {el}
            </span>
                    );
                })}
            </div>
            {props.users.map((el) => (
                <div className={c.users} key={el.id}>
                    <div className={c.photo}>
                        <NavLink to={"/profile/" + el.id}>
                            <img
                                src={
                                    el.photos.small != null
                                        ? el.photos.small
                                        : defaultPhoto
                                }
                                alt=""
                            />
                        </NavLink>
                        <div>
                            {el.followed ? (
                                <button disabled={props.toggleBtn.some(id => id === el.id)}
                                        onClick={() => {
                                            props.unFollowThunk(el.id);
                                        }}

                                >
                                    Unfollowed
                                </button>
                            ) : (
                                <button disabled={props.toggleBtn.some(id => id === el.id)}
                                        onClick={() => {
                                            props.followThunk(el.id);

                                        }}
                                >
                                    Followed
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={c.content}>
                        <div className={c.info}>
                            <div className={c.name}>{el.name}</div>
                            <div className={c.status}>{el.status}</div>
                        </div>
                        <div className={c.location}>
                            <div className={c.city}>{'el.location.city'}</div>
                            <div className={c.country}>{'el.location.country'}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
