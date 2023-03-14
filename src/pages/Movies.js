import Searchbar from "components/Searchbar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByTitle } from "api/Movie-api";
import { Link } from "react-router-dom";

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
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
                console.log(movies.results);
        })
    }, [movieName]);

    return (
        <div>
            <Searchbar changeQueryString={updateQueryString} />
            {movies.map(movie => 
                <li key={movie.id}>
                    <Link to={`${movie.id}`}>{movie.original_title}</Link>
                </li>
            )}
        </div>
    );
}