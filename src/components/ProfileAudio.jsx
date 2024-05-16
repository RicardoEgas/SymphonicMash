import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX,faPlay,faPause } from '@fortawesome/free-solid-svg-icons'
import profileStyle from '../assets/css/profile.module.css';
import user from '../assets/img/user.svg';
import { useState } from 'react';
import music from '../assets/music/music.mp3';

const ProfileAudio=()=>{
    const [playIcon,setPlayIcon]=useState(faPlay);
    const [audio,setAudio]=useState(null);
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
                   <div>
                    <button onClick={()=>{
                        if(!audio){
                            let audioItem=document.createElement('audio');
                            audioItem.src=music;
                            audioItem.play();
                            setAudio(audioItem);
                            setPlayIcon(faPause);
                        }else{
                            if(audio.paused) {
                                audio.play();
                                setPlayIcon(faPause);
                            } else {
                                audio.pause();
                                setPlayIcon(faPlay);
                            }
                        }
                    }
                    }>
                   <FontAwesomeIcon icon={playIcon}/>
                    </button>
                    </div> <p>Sent From Even</p> 
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