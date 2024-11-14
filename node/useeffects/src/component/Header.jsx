import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Header = () => {
    const { firstName} = useContext(UserContext)
    return(

<>
This is the header 
<div>{firstName}</div>
</>

    )
}

export default Header;