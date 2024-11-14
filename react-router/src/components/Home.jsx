import {Link, Outlet} from 'react-router-dom'
const Home = () => {
    return (
        <>
        <h2>Home Component</h2>
        <ul>
            <li>
                <Link to={`/`}>Back</Link>
            </li>
        </ul>
        </>
    )
}

export default Home