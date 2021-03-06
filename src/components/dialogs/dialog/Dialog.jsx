import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return(
        <div className={s.dialog}>
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>

    )
}

export default Dialog;