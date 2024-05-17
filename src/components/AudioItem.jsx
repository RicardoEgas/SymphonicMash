import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX,faPlay,faPause } from '@fortawesome/free-solid-svg-icons'
import profileStyle from '../assets/css/profile.module.css';

const AudioItem=({music})=>{
    const [playIcon,setPlayIcon]=useState(faPlay);
    const [audio,setAudio]=useState(null);
 
    const audioHandler=(audioFile)=>{
        if(!audio){
            let audioItem=document.createElement('audio');
            audioItem.src=audioFile;
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

    return(
        <div className={profileStyle.audioFileContainer}>
        <div className={profileStyle.audioItem}>
        <div>
           <div>
            <button onClick={()=>{audioHandler(music.file)}}>
           <FontAwesomeIcon icon={playIcon}/>
            </button>
            </div><p>{music.title}</p> 
        </div>
        <button className={profileStyle.audioItemDeleteButton}>
        <FontAwesomeIcon icon={faX}/>
        </button>
        <button className={profileStyle.audioItemUpdateButton}>
        UPDATE
        </button>
        </div>
    </div>
    )
};

export default AudioItem;
