let ADD_POST = 'ADD-POST'
let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    data_posts: [
        {id: 1, message: "Hello there!", likes: 7},
        {id: 2, message: "Всем привет", likes: 12},
        {id: 3, message: "post", likes: 28}
    ],
    post_textarea: ""
}

const profileReducer = (state = initialState, action) => {
    let copy_state
    switch(action.type) {
        case ADD_POST:
            return copy_state = {
                ...state,
                post_textarea: '',
                data_posts: [...state.data_posts, {id: 5, message: state.post_textarea, likes: 0}]
            }
        case UPDATE_POST_TEXT:
            return copy_state = {
                ...state,
                post_textarea: action.text
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => 
    ({ type: UPDATE_POST_TEXT, text: text })

export default profileReducer