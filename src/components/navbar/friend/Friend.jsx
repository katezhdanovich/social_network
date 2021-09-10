import { NavLink } from 'react-router-dom';
import s from './Friend.module.css';

const Friend = (props) => {
    return(
        <div className={s.friend}>
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
            <div>{props.name}</div>
        </div>
    )
}

export default Friend;