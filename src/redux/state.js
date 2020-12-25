import reducerDialogsPage from "./reducer-dialogsPage";
import reducerProfilePage from "./reducer-pfofilePage";

export const store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, text: "It's my first post", countLikes: 12},
                {id: 2, text: "Hello everyone", countLikes: 2},
                {id: 3, text: "Nice to meet you", countLikes: 123}
            ],
            newPostValue: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Garry"},
                {id: 2, name: "Inna"},
                {id: 3, name: "Tom"},
                {id: 4, name: "Lena"},
                {id: 5, name: "Oksana"},
                {id: 6, name: "Ivan"}
            ],
            messages: [
                {id: 1, text: "Hello"},
                {id: 2, text: "How are you?"},
                {id: 3, text: "It's funny!"}
            ],
            newMessage: ""
        }
    },

    rerenderEntireTree() {
        console.log("State changed");
    },
    subscribe: function (observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
        this.state.profilePage = reducerProfilePage(this.state.profilePage, action);
        this.state.dialogsPage = reducerDialogsPage(this.state.dialogsPage, action);

        this.rerenderEntireTree(this.state);
    }
    // ,id: 100,

    // newPost() {
    //   return {
    //     id: this.id++,
    //     text: this.state.profilePage.newPostValue,
    //     countLikes: 0
    //   };
    // },
    // addNEWMessage() {
    //   return {
    //     id: this.id++,
    //     text: this.state.dialogsPage.newMessage
    //   };
    // }
};