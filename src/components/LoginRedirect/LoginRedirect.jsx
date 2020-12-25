import React from "react";
//редирект - спецКомпонента, которая перенаправляет на страницу указанную в атрибуте -(to)
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getIsLogin} from "../../redux/selectors/loginRedirectSelectors";

//создаем стейт с нужными нам параметрами - проверкой на логин
const mapStateToProps = (state) => {
    return {
        isLogin: getIsLogin(state)
    }
};


//redirect with function component
// создаем хок, т.е. функцию которая принимает компоненту и возвращает эту же компоненту но обернутую контейнерной компонентой
// в хок настраиваем(пишем логику какой должна быть и что делать) обертку
// в хок при вызове можем передавать разные компоненты, но обортка будет одна и та же
export let withLoginRedirect = (Component) => {
    //обертка, принамает пропсы, из них достает свойство логин и если он тру - рисует
    // Component с передаными свойствами по дефолту
    // если нет - перенаправляет на страницу с логинизацией
    let LoginRedirect = (props) => {
        if (!props.isLogin) return <Redirect to="/login"/>;
        return <Component {...props}/>
    };
    // здесь создаем обертку с помощью connect в который передаем стейт и нашу обертку
    let LoginRedirectConnect = connect(mapStateToProps)(LoginRedirect);
    // возвращаем обертку которая знает о текущей логинизации и отрисует нужную компоненту
    return LoginRedirectConnect;
};


//redirect with class component
//withAuthRedirect и withLoginRedirect аналогичны
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogin) return <Redirect to="/login"/>;
            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedRedirectComponent;
};



























