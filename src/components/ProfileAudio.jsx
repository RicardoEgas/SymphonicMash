import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons'
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
                <div className={profileStyle.audioItem}>
                <div>
                   <div></div> <p>Sent From Even</p> 
                </div>
                <button className={profileStyle.audioItemDeleteButton}>
                <FontAwesomeIcon icon={faX}/>
                </button>
                <button className={profileStyle.audioItemUpdateButton}>
                UPDATE
                </button>
                </div>
                <div className={profileStyle.audioItem}>
                <div>
                   <div></div> <p>Sent From Even</p> 
                </div>
                <button className={profileStyle.audioItemDeleteButton}>
                <FontAwesomeIcon icon={faX}/>
                </button>
                <button className={profileStyle.audioItemUpdateButton}>
                UPDATE
                </button>
                </div>
                <div className={profileStyle.audioItem}>
                <div>
                   <div></div> <p>Sent From Even</p> 
                </div>
                <button className={profileStyle.audioItemDeleteButton}>
                <FontAwesomeIcon icon={faX}/>
                </button>
                <button className={profileStyle.audioItemUpdateButton}>
                UPDATE
                </button>
                </div>
                <div className={profileStyle.audioItem}>
                <div>
                   <div></div> <p>Sent From Even</p> 
                </div>
                <button className={profileStyle.audioItemDeleteButton}>
                <FontAwesomeIcon icon={faX}/>
                </button>
                <button className={profileStyle.audioItemUpdateButton}>
                UPDATE
                </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileAudio;