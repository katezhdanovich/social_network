import { NavLink } from 'react-router-dom';
import s from './Message.module.css';

const Message = (props) => {
    return(
        <div className={s.message}>
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
            {props.text}
        </div>
    )
}

export default Message;