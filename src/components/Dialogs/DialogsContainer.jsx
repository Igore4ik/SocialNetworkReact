import {connect} from "react-redux";
import { addMessageActionCreator} from "./../../redux/reducer-dialogsPage";
import Dialogs from "./Dialogs";
import {withLoginRedirect} from "../LoginRedirect/LoginRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/selectors/dialogContainerSelectors";

//получаем стейт(а именно стр с диалогами, т.е. ту часть стейта которую будем исспользовать)
//и передаем ее в connect, он будет доступен как пропс в дочерней компоненте
let mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state)
    };
};
// создаем mapDispatchToProps
//и передаем ее в connect, он будет доступен как пропс в дочерней компоненте
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoginRedirect
)(Dialogs)


