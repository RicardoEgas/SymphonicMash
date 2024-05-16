import profileStyle from '../assets/css/profile.module.css';
import user from '../assets/img/user.svg';

const Profile=()=>{
    return(
        <div className={profileStyle.profileContainer}>
            <div className={profileStyle.avatarContainer}>
            <img src={user} alt="Purnima Khan"/>
            </div>
            <div className={profileStyle.description}>
            <h3>Purnima Khan</h3>
            <p>Guidhali School of Music and Drama</p>
            </div>
            <div className={profileStyle.options}>
                <a href="#">Nr Upload</a>
                <a href="#">My Audios</a>
            </div>
        </div>
    );
};

export default Profile;