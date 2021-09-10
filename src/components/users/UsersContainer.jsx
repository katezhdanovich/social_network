import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users";
import { followActionCreator, setUsersActionCreator, setUsersCountActionCreator, unfollowActionCreator, selectPageActionCreator } from '../../redux/users_reducer'

class UsersContainer extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selected_page}&count=${this.props.page_size}`)
            .then(response => {
                debugger
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }
    onPageSelected = (page) => { 
        this.props.selectPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.page_size}`)
            .then(response =>
                this.props.setUsers(response.data.items)
            )
    }
    render(){
        return <Users total_users_count={this.props.total_users_count}
            page_size = {this.props.page_size}
            data_users = {this.props.data_users}
            selected_page = {this.props.selected_page}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            onPageSelected = {this.onPageSelected} />
    }
}

let mapStateToProps = (state) => {
    return {
        data_users: state.users_page.data_users,
        page_size: state.users_page.page_size,
        total_users_count: state.users_page.total_users_count,
        selected_page: state.users_page.selected_page
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setUsersCount: (count) => {
            dispatch(setUsersCountActionCreator(count))
        },
        selectPage: (page) => {
            dispatch(selectPageActionCreator(page))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer)