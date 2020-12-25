import { connect } from "react-redux";
import {  addPostActionCreator } from "./../../../redux/reducer-profilePage";
import MyPosts from "./MyPosts";
import {getProfilePage} from "../../../redux/selectors/myPostContainerSelectors";

let mapStateToProps = (state) => {
  return {
    profilePage: getProfilePage(state)
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPosts: (text) => {
      dispatch(addPostActionCreator(text));
    }
    // updateNewPost: (text) => {
    //   dispatch(updatePostActionCreator(text));
    // }
  };
};



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
