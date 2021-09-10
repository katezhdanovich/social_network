import { NavLink } from 'react-router-dom';
import Friend from './friend/Friend';
import s from './Navbar.module.css';

const Navbar = (props) => {

    //let friends_elements = props.state.data_friends.map(f => <Friend name={f.name} />)
    return(
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </div>
            </nav>
            <div>
                <h2>Friends</h2>
                <div className={s.friends}>
                    friends_elements
                </div>
            </div>
        </div>
    )
}

export default Navbar;