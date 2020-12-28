import React from "react";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import c from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {required,setMaxLength} from "../utils/validators/validators";

//maxLength и required для валидации формы
const maxLength = setMaxLength(30);
const Dialogs = ({dialogsPage, addMessage}) => {
    //при сабмите FormTextRedux мы вызываем метод onAddMessage, в который передаем строку из инпута формы
    // и далее эти данные закидываем в addMessage, который создает новое сообщение
    const onAddMessage = (formData) => {
        addMessage(formData.newMessage);
    };
    // const onUpdateMessage = (e) => {
    //     let text = e.target.value;
    //     updateMessage(text);
    // };
    //создаем массив с юзерами
    const dialogsJsx = dialogsPage.dialogs.map((el) => (
        <DialogItem key={el.name + " " + el.id} name={el.name} id={el.id}/>
    ));
    //создаем массив с сообщениями
    const messagesJsx = dialogsPage.messages.map((el) => (
        <Message key={el.name + " " + el.id} text={el.text}/>
    ));
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>{dialogsJsx}</div>
            <div className={c.messages}>{messagesJsx}</div>
            <FormTextRedux onSubmit={onAddMessage}/>
        </div>
    );
};

//создаем форму с использованием redux-form и на сабмит цепляем метод handleSubmit, который соберет все данные с формы
const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/*Textarea -мы создали свою компоненту, чтобы при ошибке валидации показывать
            спан с ошибкой,он изначально скрыт и инпуту даем красные границы*/}
            <Field name="newMessage" placeholder="Enter your message" component={Textarea} validate={[ required, maxLength]} />
            {/*<Field name="newMessage" placeholder="Enter your message" component="textarea"/>*/}
            <button>Add message</button>
        </form>
    )
};
//создаем переменную в которую присваиваем метод reduxForm, он в первом вызове принимает ключ form и значение addNewMessage
//addNewMessage-уникальное название именно для данной формы(выдуманное)
//эта переменная имеет доступ ко всем собранным данным в форме
const FormTextRedux = reduxForm({form: "addNewMessage"})(Form);

export default Dialogs;
