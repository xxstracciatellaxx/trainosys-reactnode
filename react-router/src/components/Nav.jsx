// import {Link, Outlet} from 'react-router-dom'

// const Nav = () => {
//     return (

//         <>
//         <h2>Nav Component</h2>
//         <ul>
//             <li>
//                 <Link to={`/home`}>Home</Link>
//             </li>
//             <li>
//                 <Link to={`/contact`}>Contact</Link>
//             </li>
//             <li>
//                 <Link to={`/about`}>About</Link>
//             </li>
//         </ul>
//         </>
//     )
// }

// export default Nav
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <h2>Nav Component</h2>
            <ul>
                <li>
                    <Link to={`/home`}>Home</Link>
                </li>
                <li>
                    <Link to={`/contact`}>Contact</Link>
                </li>
                <li>
                    <Link to={`/about`}>About</Link>
                </li>
                <li>
                    <Link to={`/pokemon`}>Pokemons</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;