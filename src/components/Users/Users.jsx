import React from "react";
import {NavLink} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import c from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";

const defaultPhoto =
    "https://us.123rf.com/450wm/yayayoy/yayayoy1511/yayayoy151100009/48712505-stock-vector-smiling-emoticon-with-open-mouth-and-smiling-eyes.jpg?ver=6";

const Users = (props) => {
    return (
        <div>
            {props.isFetching ? <Preloader/> : null}

            {Paginator(props.totalUsersCount, props.pageSize, props.currentPage, props.setPage)}

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
