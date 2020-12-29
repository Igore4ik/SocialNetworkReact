import React from "react";
import {Field, reduxForm} from 'redux-form';
import c from "./Login.module.css";
import {Input} from "../common/FormsControls/FormsControls";
import {required, setMaxLength} from "../utils/validators/validators";
import { loginThunk} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getIsLogin} from "../../redux/selectors/loginRedirectSelectors";

const mapStateToProps = (state) => ({
    captcha: state.auth.captcha,
    isLogin: getIsLogin(state)
});
const maxLength = setMaxLength(25);
const LoginForm = (props) => {
    console.log(props.captcha)
    return (

        <form onSubmit={props.handleSubmit} className={c.form}  >
            <div>
                <Field placeholder={"Login"} name="login" component={Input} type="email" validate={[required,maxLength]}/>
                {/*<Field placeholder={"Login"} name="login" component="input" type="text"/>*/}
            </div>
            <div>
                <Field placeholder={"Password"} name="password" component={Input} type="password" validate={[required,maxLength]} />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>
            </div>

            {
                props.captcha &&  <div >

                    <img src={props.captcha} alt=""/>
                    <Field placeholder={"Symbols"} name="captcha" component={Input} type="text" validate={[required,maxLength]} />
                </div>
            }
                {
                   props.error &&  <div className={c.formError}>
                       <p>error</p>
                              {props.error}

                    </div>
                }

                <button>SEND</button>

        </form>
    )
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: "login"
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.login,formData.password,formData.rememberMe, formData.captcha);

    };
    return (

        <>
          {  props.isLogin
              ? <Redirect to="/profile"/>
             :<> <h1 className={c.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} /></>}
        </>
    )
};

export default connect(mapStateToProps,{loginThunk})(Login);