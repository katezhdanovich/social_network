let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET-USERS'
let SELECT_PAGE = 'SELECT-PAGE'
let SET_USERS_COUNT = 'SET-USERS-COUNT'

let initialState = {
    data_users: [],
    page_size: 20,
    total_users_count: 0,
    selected_page: 1
}
const usersReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                data_users: state.data_users.map( u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                data_users: state.data_users.map( u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state, 
                data_users: [...action.users]}
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                total_users_count: action.count
            }
        }
        case SELECT_PAGE:
            return {
                ...state,
                selected_page: action.page
            }
        default:
            return state
    }
}

export const followActionCreator = (id) => ({ type: FOLLOW, id: id })
export const unfollowActionCreator = (id) => ({ type: UNFOLLOW, id: id })
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users: users })
export const selectPageActionCreator = (page) => ({ type: SELECT_PAGE, page: page })
export const setUsersCountActionCreator = (count) => ({ type: SET_USERS_COUNT, count: count })

export default usersReducer