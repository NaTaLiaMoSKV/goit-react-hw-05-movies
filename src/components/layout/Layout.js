import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "./Layout.styled"

export const Layout = () => {
    return (
        <>
            <header>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </header>
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
        
        
    )
}