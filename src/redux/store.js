import messagesReducer from "./messages_reducer"
import navbarReducer from "./navbar_resucer"
import profileReducer from "./profile_reducer"

let store = {
    _state: {
        profile_page: {
            data_posts: [
                {id: 1, message: "Hello there!", likes: 7},
                {id: 2, message: "Всем привет", likes: 12},
                {id: 3, message: "post", likes: 28}
            ],
            post_textarea: ""
        },
        messages_page: {
            data_dialogs: [
                {id: 1, name: "Иван Иванов"},
                {id: 2, name: "Петр Петров"},
                {id: 3, name: "Иван Петров"},
                {id: 4, name: "Петр Иванов"}
            ],
            data_messages: [
                {id: 1, text: "Hello!"},
                {id: 2, text: "How are you"},
                {id: 3, text: "Сообщение"}
            ],
            message_textarea: ""
        },
        navbar: {
            data_friends: [
                {id: 1, name: "Иван"},
                {id: 2, name: "Иван"},
                {id: 3, name: "Иван"},
            ]
        }
    },
    _callSubscriber() {
        console.log('test')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profile_page = profileReducer(this._state.profile_page, action)
        this._state.messages_page = messagesReducer(this._state.messages_page, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)
        this._callSubscriber(this._state)
    }
}

export default store