import { Link, Outlet } from "react-router-dom";

export default function AddInfo({backLinkHref}) {
    return (
        <>
            <div className="addInfo">
                <p className="addInfo-text">Additional information</p>
                <ul className="addInfo-list">
                    <li className="addInfo-item">
                        <Link to="cast" state={{ from: backLinkHref}}> Cast </Link>
                    </li>
                    <li className="addInfo-item">
                        <Link to="reviews" state={{ from: backLinkHref}}> Reviews </Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}