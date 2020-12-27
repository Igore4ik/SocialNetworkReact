import React, {Component} from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    followThunk,
    unFollowThunk,
    setTotalUsersCount,
    toggleFollowBtn
} from "../../redux/reducer-users";
import Users from "./Users";
import {setUsersThunk} from "../../redux/reducer-users";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize, getToggleBtn,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/usersSelectors";



class UsersContainer extends Component {

    componentDidMount() {
        this.props.setUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    setPage = (n) => {
        this.props.setCurrentPage(n);
        this.props.setUsersThunk(n, this.props.pageSize);
    };

    render() {
        return (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                setPage={this.setPage}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                toggleBtn={this.props.toggleBtn}
                toggleFollowBtn={this.props.toggleFollowBtn}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        toggleBtn: getToggleBtn(state)
    };
};

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         toggleBtn: state.usersPage.toggleBtn
//     };
// };
export default connect(mapStateToProps, {
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowBtn,
    setUsersThunk,
    followThunk,
    unFollowThunk

})(UsersContainer);
