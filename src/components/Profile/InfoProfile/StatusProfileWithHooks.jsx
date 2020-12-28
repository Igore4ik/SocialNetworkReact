import React, {useState,useEffect} from "react";

// import Preloader from "../../Preloader/Preloader";
import c from "./InfoProfile.module.css";

const StatusProfileWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status]);

    const UnActiveEditMode = () => {
        setEditMode(true);
        props.updateStatusThunk(status);
    };
    const activeEditMode = () => {
        setEditMode(false);
    };
    const updateStatus = (e) => {
        setStatus(e.currentTarget.value);
    };


    return (
        <div className={c.desc}>
            {/*//отображаем полное имя полученого профиля*/}
            {/*<div>{props.profile.fullName}</div>*/}
            <div>
                {
                    // отображаем режим с статусом и если он нал - используем по умолчанию
                    !editMode
                        ? <h3 onDoubleClick={UnActiveEditMode}>
                            {!status ? "I'm a student" : status}
                        </h3>
                        //отображаем режим редактирования и если он нал - используем по умолчанию
                        : <input
                            onChange={updateStatus}
                            onBlur={activeEditMode}
                            autoFocus={true}
                            type="text"
                            defaultValue={!props.status ? "I'm a student" : props.status}/>
                }
            </div>
        </div>
    )
};

export default StatusProfileWithHooks;












