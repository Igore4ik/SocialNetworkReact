import React from 'react';
import {getAutorizedUserId, getProfileUser} from "../../redux/selectors/profileContainerSelectors";
import {connect} from "react-redux";
import {setPhotoThunk, uploadProfileThunk} from "../../redux/reducer-profilePage";
import Settings from "./Settings";

class SettingsContainer extends React.Component {
    render() {
        return (
            <div>
                <Settings {...this.props} isOwner={this.props.autorizedUserId}/>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfileUser(state),
        autorizedUserId: getAutorizedUserId(state)
    };
};

export default connect(mapStateToProps,{uploadProfileThunk,setPhotoThunk})(SettingsContainer)