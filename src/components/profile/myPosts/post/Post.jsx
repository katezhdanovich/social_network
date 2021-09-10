import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.content}>
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
            {props.message}
            <div className={s.likes}>{props.likes} likes</div>
        </div>
    )
}

export default Post;