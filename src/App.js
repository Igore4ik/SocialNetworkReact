import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {isInitialiseApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {getInitialized} from "./redux/selectors/appSelectors";
import SettingsContainer from "./components/Settings/SettingsContainer";

 class App extends Component {
    componentDidMount() {
        this.props.isInitialiseApp();
    }

    render() {
        if(!this.props.initialized) return <Preloader/>;
        return (
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer/>
                    <section className="content">
                        <Navbar/>
                        <div className="App-content">
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/settings" render={()=><SettingsContainer/>}/>
                            <Route path="/login" component={Login}/>
                        </div>
                    </section>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state)
});
export default connect(mapStateToProps,{isInitialiseApp})(App);