import { Link } from "react-router-dom";

const BaseLink = ({children, path}) => {
    
    return(
        <Link to={path} className="text-form">
            {children}
        </Link>
    )
}

export default BaseLink