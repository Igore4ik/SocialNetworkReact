import React from "react";
import Preloader from "../../Preloader/Preloader";
import c from "./InfoProfile.module.css";
// import StatusProfile from "./StatusProfile";
import StatusProfileWithHooks from "./StatusProfileWithHooks";


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
      {/*//отображаем профиль*/}
                <div className={c.userProfile}>
                    {/*//дивка с фото, если фото нет - исспользуем по умолчанию defaultPhoto*/}
                    <div className={c.photo}>
                        <img src={!profile.photos.large ? defaultPhoto : profile.photos.large} alt=""/>
                    </div>
                    {/*//отображаем компоненту StatusProfile которая рисует статус*/}
                      <StatusProfileWithHooks profile={profile} status={status} updateStatusThunk={updateStatusThunk}/>
                    {/*  <StatusProfile profile={profile} status={status} updateStatusThunk={updateStatusThunk}/>*/}
                </div>
            </div>
        );
    }
};

export default InfoProfile;
