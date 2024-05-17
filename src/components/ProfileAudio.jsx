import profileStyle from '../assets/css/profile.module.css';
import user from '../assets/img/user.svg';
import musicFile from '../assets/music/music.mp3';
import musicFil1 from '../assets/music/vira_homem.m4a';
import AudioItem from './AudioItem';

const ProfileAudio=()=>{

    return(
        <div className={profileStyle.profileContainer}>
            <div className={profileStyle.avatarContainer}>
            <img src={user} alt="Purnima Khan"/>
            </div>
            <h3>Your Audio Files</h3>
            <div className={profileStyle.audioContainer}>
            <AudioItem music={{file:musicFile,title:'Sent From Even'}} />
            <AudioItem music={{file:musicFil1,title:'Vira Homem'}} />
            <AudioItem music={{file:musicFile,title:'Sent From Even'}} />
            </div>

        </div>
    );
};

export default ProfileAudio;