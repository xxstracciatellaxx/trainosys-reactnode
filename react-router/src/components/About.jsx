import {Link, Outlet} from 'react-router-dom'
const About = () => {
    return (
        <>
        <h2>About Component</h2>
        <ul>
            <li>
                <Link to={`/`}>Back</Link>
            </li>
        </ul>
        </>
    )
}

export default About