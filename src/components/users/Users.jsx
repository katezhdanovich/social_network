import s from './Users.module.css';
import dog from './../../dog.jpg'

const Users = (props) => {
    let pages_count = Math.ceil(props.total_users_count / props.page_size)
    let pages = []
    for (let i = 1; i <= pages_count; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {props.onPageSelected(p)}} className={props.selected_page == p && s.selected}>{p}</span>
                })}
            </div>
            <div> {
                props.data_users.map(u =>
                    <div className={s.user}>
                        <img src={u.photos.large != null ? u.photos.large : dog}></img>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Users