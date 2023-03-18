import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import "./style.css"

function Footer() {
    return (
        <div className="footer">
            <div className="container">
            <FontAwesomeIcon icon={faCopyright} style={{marginRight: "5px"}} />
            copyRight <span> Movies</span>
            </div>
        </div>
    )
}

export default Footer;