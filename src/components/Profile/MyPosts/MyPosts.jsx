import React from "react";
// import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {required,setMaxLength} from "../../utils/validators/validators";

const maxLength = setMaxLength(30);
const MyPosts = ({profilePage, addPosts}) => {

    const onAddPosts = (formData) => {
        addPosts(formData.newPost);
    };

    const posts = profilePage.posts.map((el) => (
        <Post
            key={el.id + el.countLikes}
            message={el.text}
            countLikes={el.countLikes}
        />
    ));
    return (
        <div>
            Posts
            <div>
                <FormRedux onSubmit={onAddPosts}/>
            </div>
            {posts}
        </div>
    );
};

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPost" validate={[required, maxLength]}/>
            {/*<Field component="textarea" name="newPost"/>*/}

            <button>Add post</button>
        </form>
    )
};

const FormRedux = reduxForm({form: "addForm"})(Form);

export default MyPosts;
