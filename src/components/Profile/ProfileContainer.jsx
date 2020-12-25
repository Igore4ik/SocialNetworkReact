import React, {Component} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setProfileThunk,setStatusThunk} from "./../../redux/reducer-profilePage";
import {withRouter} from "react-router-dom";
import {withLoginRedirect} from "../LoginRedirect/LoginRedirect";
import {compose} from "redux";
import {updateStatusThunk} from "../../redux/reducer-profilePage";
import {getAutorizedUserId, getProfileUser, getStatusUser} from "../../redux/selectors/profileContainerSelectors";

class ProfileComponent extends Component {
    componentDidMount() {
      // на странице с юзерами мы нажали на профиль и в юрл добавили айди пользователя
      // теперь мы с юрл получаем айди с помощью метода матч в парамс и наше свойство - юзерАйди
      // для того чтобы использоать матч мы обернули нашу компоненту withRouter в функции компосе
        let userId = this.props.match.params.userId;
        //если профиля нет, т.е. при входе в систему берем айди залогиненого юзера(отображаем свой профиль)
        if (!userId) userId = this.props.autorizedUserId;
        // if (!userId) userId = 13377;
        // теперь мы вызываем метод который рендерит профиль и передаем считаный юзерАйди
        this.props.setProfileThunk(userId);
        this.props.setStatusThunk(userId);
    }

    render() {
        return (

            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfileUser(state),
        status: getStatusUser(state),
        autorizedUserId: getAutorizedUserId(state)
    };
};
// const mapStateToProps = (state) => {
//     return {
//         profile: state.profilePage.profile,
//         status: state.profilePage.status,
//         autorizedUserId: state.auth.userId
//     };
// };

//конект принимает стейт(мапСтейтТуПропс), и функцию(в нашем случае санку) и возвращает измененный стейт
//withLoginRedirect проверяет залогинен ли пользователь, если нет то перенаправляет на страницу с логином
//withLoginRedirect создает вокруг нашей компоненты обертку и в ней проводит проверку
export default compose(
    connect(mapStateToProps, {setProfileThunk,setStatusThunk,updateStatusThunk}),
    withRouter,
    withLoginRedirect
)(ProfileComponent)


//функция компосе принимает в себя все функции, хоки, методы которые обрабатывают компоненту в порядке их вызоваб
//во вторых скобках - компонент который будет обрабатываться
//почему 2 пары скобок? --- в методе компосе первый вызов функции отдаст функцию-результат,после всех манипуляций
// потом происходит второй вызов функции, в которую мы и передаем компоненту



















