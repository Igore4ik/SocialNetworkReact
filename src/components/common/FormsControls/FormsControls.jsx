import React from "react";
import c from "./FormsControls.module.css"

//создаем свою компоненту вместо textarea и передаем ее в форму
//это нужно для того чтобы в ней была возможность отобразить ошибки при неправильной валидации

export const Textarea = ( {input, meta, ...props}) => {
   let showError = meta.touched && meta.error;
    return(
        <div >
            <textarea {...props} {...input} className={c.form+" "+(showError ? c.error : "") } />
            {meta.touched && meta.error && <span className={c.er}>{meta.error}</span>}
        </div>
    )
};
export const Input = ( {input, meta, ...props}) => {
    let showError = meta.touched && meta.error;
    return(
        <div >
            <input {...props} {...input} className={c.form+" "+(showError ? c.error : "") } />
            {meta.touched && meta.error && <span className={c.er}>{meta.error}</span>}
        </div>
    )
};