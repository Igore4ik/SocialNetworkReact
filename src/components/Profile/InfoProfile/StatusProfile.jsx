import React, {Component} from "react";

// import Preloader from "../../Preloader/Preloader";
import c from "./InfoProfile.module.css";

class StatusProfile extends Component {

    //создаем локальный стейт
    state = {
        editMode: false,
        status: this.props.status
    };

    //деаактивируем режим редактирования и отображаем спан со статусом
    UnActiveEditMode = () => {
        this.setState(
            {
            editMode: true
        });
        this.props.updateStatusThunk(this.state.status)
    };
  //активируем режим редактирования и отображаем инпут
    activeEditMode = () => {
        this.setState(
         {
            editMode: false
        }

    )
    };
    updateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <div className={c.desc}>
                {/*//отображаем полное имя полученого профиля*/}
                {/*<div>{this.props.profile.fullName}</div>*/}
                <div>
                    {
                        // отображаем режим с статусом и если он нал - используем по умолчанию
                        !this.state.editMode
                            ? <h3 onDoubleClick={this.UnActiveEditMode}>
                                {!this.props.status ? "I'm a student" : this.props.status}
                                {/*{!this.props.profile.aboutMe ? "I'm a student" : this.props.profile.aboutMe}*/}
                            </h3>
                            //отображаем режим редактирования и если он нал - используем по умолчанию
                            : <input
                            onChange={this.updateStatus}
                                onBlur={this.activeEditMode}
                                autoFocus={true}
                                type="text"
                                defaultValue={!this.state.status ? "I'm a student" : this.state.status}/>
                    }
                </div>
            </div>
        )
    }
}

export default StatusProfile;












