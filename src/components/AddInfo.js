import { Link, Outlet } from "react-router-dom";

export default function AddInfo() {
    return (
        <ul>
            <li>
                <Link to="cast"> Cast </Link>
            </li>
            <li>
                <Link to="reviews"> Reviews </Link>
            </li>
            <Outlet/>
        </ul>
    )
}