import { useNavigate } from 'react-router-dom';
import profileStyle from '../assets/css/profile.module.css';
import user from '../assets/img/user.svg';

const Profile=()=>{
    const navegate=useNavigate();
    return(
        <div className={profileStyle.profileContainer}>
            <div className={profileStyle.avatarContainer}>
            <img src={user} alt="Purnima Khan"/>
            </div>
            <div className={profileStyle.description}>
            <h3>Purnima Khan</h3>
            <p className={profileStyle.role}>Guidhali School of Music and Drama</p>
            </div>
            <div className={profileStyle.options}>
                <a href="#">Nr Upload</a>
                <a href="#" onClick={(el)=>{
                    el.preventDefault();
                    navegate('/profile/audio');                  
                }}>
                    My Audios</a>
            </div>
        </div>
    );
};

export default Profile;