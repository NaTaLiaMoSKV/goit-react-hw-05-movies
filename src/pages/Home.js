import { useEffect } from "react";
import { Link } from "react-router-dom";
import {getTrendingMovies} from "api/Movie-api";
import { useState } from "react";

export default function Home() {

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
            <ul>
                {trendingMovies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}