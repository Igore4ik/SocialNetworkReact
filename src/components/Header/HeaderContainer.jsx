import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { logoutThunk} from "../../redux/authReducer";
import {getIsLogin, getLoginUser} from "../../redux/selectors/loginRedirectSelectors";

class HeaderContainer extends Component {
    // componentDidMount() {
    //
    //     this.props.isLoginThunk();
    //
    // }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    login: getLoginUser(state),
    isLogin: getIsLogin(state)
});

export default connect(mapStateToProps,{logoutThunk})(HeaderContainer);