import profileStyle from '../assets/css/profile.module.css';
import user from '../assets/img/user.svg';

const ProfileAudio=()=>{
    return(
        <div className={profileStyle.profileContainer}>
            <div className={profileStyle.avatarContainer}>
            <img src={user} alt="Purnima Khan"/>
            </div>
            <div className={profileStyle.description}>
            <h3>Your Audio Files</h3>
            </div>
            <div className={profileStyle.audioFileContainer}>
                <p>audio1</p>
                <p>audio1</p>
                <p>audio1</p>
            </div>
        </div>
    );
};

export default ProfileAudio;