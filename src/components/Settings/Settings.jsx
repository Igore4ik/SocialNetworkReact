import React from 'react';
import c from './Settings.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required, setMaxLength} from "../utils/validators/validators";
import {NavLink} from "react-router-dom";

const maxLength = setMaxLength(60);


const Settings = (props) => {

    const uploadProfile = (formData) => {
        console.log(formData)
        props.uploadProfileThunk(formData)
    }
    const uploadPhoto = (e) => {
        // вызываем setPhotoThunk из редьюсера и передаем выбраный файл из инпута
        props.setPhotoThunk(e.target.files[0]);
    }
    return (

<>
    <h1 className={c.title}>Settings</h1>
    {props.isOwner && <div className={c.wrapper}>

            {/*upload photo settings*/}
            <div className={c.inpPhoto}>
                <h1>UPLOAD PHOTO</h1>
                <input
                    type="file"
                    accept="image/*"
                    onChange={uploadPhoto}/>
            </div>

            {/*upload profile settings form*/}
            <div className={c.uploadProfile}>
                <h1>UPLOAD PROFILE</h1>
                <FormTextRedux onSubmit={uploadProfile} />
            </div>



        </div>
    }
    {!props.isOwner && <>
        <h1 className={c.titleRedirectToLogin}>If you want to change your profile, please login: </h1>

        <NavLink to={"/login"}>
            <span className={c.toLogin}>Login</span>
        </NavLink>
        </>
    }
    </>
    )
};

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={c.item}>
                <b>Full Name: </b>
                {/*<Field placeholder={"Login"} name="login" component={Input} type="text" validate={[required,maxLength]}/>*/}
                <Field name="fullName" placeholder="Enter your full name" component={Input} type="text" validate={[ required, maxLength]} />
            </div>
            <div className={c.item}>
                <b>About Me: </b>
                <Field name="aboutMe" placeholder="About me" component={Input} type="text" validate={[ required, maxLength]} />
            </div>
            <div className={c.item}>
                <b>Looking for a job: </b> <br/>
                <Field name="lookingForAJob"  component="input" type="checkbox" /> <br/>
            </div>
            <div className={c.item}>
                <b>Describe your ability: </b>
                <Field name="lookingForAJobDescription" type="text" placeholder="Enter your ability"
                       component={Input} validate={[ required, maxLength]} />
            </div>



            <button>UPLOAD</button>
        </form>
    )
};
const FormTextRedux = reduxForm({form: "uploadProfileSettings"})(Form);

export default Settings;