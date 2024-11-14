import {Link, Outlet} from 'react-router-dom'
const Contact = () => {
    return (
        <>
        <h2>Contact Component</h2>
        <ul>
            <li>
                <Link to={`/`}>Back</Link>
            </li>
        </ul>
        </>
    )
}

export default Contact