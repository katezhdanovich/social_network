import Information from './information/Information';
import MyPostsContainer from './myPosts/MyPostsContainer';
import s from './Profile.module.css';

const Profile = (props) => {
    return(
        <div className={s.content}>
            <Information />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;