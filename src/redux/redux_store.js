import { createStore, combineReducers } from "redux"
import profileReducer from "./profile_reducer"
import messagesReducer from "./messages_reducer"
import navbarReducer from "./navbar_resucer"
import usersReducer from "./users_reducer"

let reducers = combineReducers({
    profile_page: profileReducer,
    messages_page: messagesReducer,
    navbar: navbarReducer,
    users_page: usersReducer
})

let store = createStore(reducers)

export default store