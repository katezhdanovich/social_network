let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
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
    message_textarea: ''
}

const messagesReducer = (state = initialState, action) => {
    let copy_state
    switch(action.type) {
        case ADD_MESSAGE:
            return copy_state = {
                ...state,
                message_textarea: '',
                data_messages: [...state.data_messages, {id: 4, text: state.message_textarea}]

            }
        case UPDATE_MESSAGE_TEXT:
            return copy_state = {
                ...state,
                message_textarea: action.text
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (text) => 
    ({ type: UPDATE_MESSAGE_TEXT, text: text })

export default messagesReducer