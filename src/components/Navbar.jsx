import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faArrowLeft,faEllipsisV } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
      <div>
        <FontAwesomeIcon icon={faArrowLeft} />
        <h1> Navbar <FontAwesomeIcon icon={faEnvelope} /></h1>
        <FontAwesomeIcon icon={faEllipsisV} />
       
      </div>
    )
  }
  
  export default Navbar