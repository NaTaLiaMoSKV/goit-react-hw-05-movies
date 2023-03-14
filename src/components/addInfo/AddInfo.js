import { Link, Outlet } from "react-router-dom";

export default function AddInfo() {
    return (
        <>
            <div className="addInfo">
                <p className="addInfo-text">Additional information</p>
                <ul className="addInfo-list">
                    <li className="addInfo-item">
                        <Link to="cast"> Cast </Link>
                    </li>
                    <li className="addInfo-item">
                        <Link to="reviews"> Reviews </Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}