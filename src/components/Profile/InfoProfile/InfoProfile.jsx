import React from "react";
import Preloader from "../../Preloader/Preloader";
import c from "./InfoProfile.module.css";
import StatusProfileWithHooks from "./StatusProfileWithHooks";
import {NavLink} from "react-router-dom";


const defaultPhoto =
    "https://us.123rf.com/450wm/yayayoy/yayayoy1511/yayayoy151100009/48712505-stock-vector-smiling-emoticon-with-open-mouth-and-smiling-eyes.jpg?ver=6";

const InfoProfile = ({profile, status, updateStatusThunk}) => {
    //если профиль отсутствует - загружается прелоадер(круг с загрузкой)
    if (!profile) {
        return <Preloader/>;
    } else {

        return (
            <div>
                <img
                    className={c.image}
                    src="https://www.imgonline.com.ua/examples/random-pixels-big.png"
                    alt=""
                />

                <NavLink to={"/settings"}>
                    <button>Update info</button>
                </NavLink>

                {/*//отображаем профиль*/}
                {/* ------------------------------------------------------------------------------- */}
                <div className={c.userProfile}>

                    {/*//дивка с фото, если фото нет - исспользуем по умолчанию defaultPhoto*/}
                    <div className={c.photo}>
                        <img src={!profile.photos.large ? defaultPhoto : profile.photos.large} alt=""/>

                    </div>
                    <div className={c.profile}>
                        <div className={c.item}>
                            <b>Full name: </b>
                            <span>{profile.fullName}</span>
                        </div>
                        <div className={c.item}>
                            <b>About me: </b>
                            <span>{profile.aboutMe}</span>
                        </div>
                        <div className={c.item}>
                            <b>Looking for a job: </b>
                            <span>{profile.lookingForAJob ? "Yes" : "No"}</span>
                        </div>
                        <div className={c.item}>
                            <b>Professional abilities: </b>
                            <span>{profile.lookingForAJobDescription}</span>
                        </div>

                    </div>
                </div>


                {/* ------------------------------------------------------------------------------- */}
                {/*//отображаем компоненту StatusProfile которая рисует статус*/}
                <StatusProfileWithHooks profile={profile} status={status} updateStatusThunk={updateStatusThunk}/>
            </div>
        );
    }
};


export default InfoProfile;
