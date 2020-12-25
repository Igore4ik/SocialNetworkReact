import React from "react";
import c from "../Dialogs/Dialogs.module.css";
import {Field, reduxForm} from "redux-form";

const Form = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <Field name="newMessage" placeholder="Enter your message" component="textarea" />
        {/*<textarea*/}
        {/*    onChange={onUpdateMessage}*/}
        {/*    placeholder="Enter your message"*/}
        {/*    value={dialogsPage.newMessage}*/}
        {/*></textarea>*/}
            <button >Add message</button>
        </form>
    )
};

const FormTextRedux = reduxForm({form: "addText"})(Form);

const FormText = (formData) => {
    console.log(formData);
}

export default FormText;




