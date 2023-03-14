import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {getTrendingMovies} from "api/Movie-api";

export default function Home() {
    const location = useLocation();
    const [trendingMovies, setTrendingMovies] = useState([]);
    
    
    useEffect(() => {
        getTrendingMovies()
            .then(data => {
                setTrendingMovies(data);
        })
       
    }, [])

    return (
        <div>
            <h1> Trending today </h1>
            <ul className="search-list">
                {trendingMovies.map(movie => (
                    (movie.title !== undefined)  &&
                        <li className="search-list-item" key={movie.id}>
                            <Link to={`movies/${movie.id}`} state={{ from: location }}>{movie.original_title}</Link>
                        </li>
                ))}
            </ul>
        </div>
    );
}