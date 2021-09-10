import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

    let posts_elements = props.profile_page.data_posts.map(p => <Post message={p.message} likes={p.likes} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onTextChange = () => {
        let text = newPostElement.current.value;
        props.textChange(text)
    }

    return(
        <div className={s.content}>
            <div>
                Мои посты
                <div>
                    <textarea ref={newPostElement} onChange={onTextChange} value={props.profile_page.post_textarea}></textarea>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div>
                    {posts_elements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;