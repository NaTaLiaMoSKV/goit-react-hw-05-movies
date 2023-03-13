import { Outlet, Link } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/movies">Movies</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}