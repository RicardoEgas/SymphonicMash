import navStyle from '../assets/css/nav.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faEllipsisV } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
      <nav className={navStyle.nav}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <FontAwesomeIcon icon={faEllipsisV} />
      </nav>
    )
  }
  
  export default Navbar