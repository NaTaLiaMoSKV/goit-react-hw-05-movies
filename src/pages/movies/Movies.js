import { useEffect, useState } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { getMovieByTitle } from "api/Movie-api";
import Searchbar from "components/searchbar/Searchbar";

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const movieName = searchParams.get("query") ?? "";
    const [movies, setMovies] = useState([]);
    
    
    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

    useEffect(() => {
        getMovieByTitle(movieName)
            .then(movies => {
                setMovies(movies.results);
        })
    }, [movieName]);

    return (
        <div>
            <Searchbar changeQueryString={updateQueryString} />
            <ul className="search-list">
                {movies.map(movie => 
                    <li className="search-list-item" key={movie.id}>
                        <Link to={`${movie.id}`} state={{ from: location }} >{movie.original_title}</Link>
                    </li>
                )}
            </ul>
            
        </div>
    );
}