import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getMovieById} from "api/Movie-api";
import MovieCard from "components/movieCard/MovieCard";
import AddInfo from "components/addInfo/AddInfo";

export default function MovieDetails() {
    const { movieId } = useParams();
    const location = useLocation();
    const [movie, setMovie] = useState('');
    const [genres, setGenres] = useState('');
    const backLinkHref = location.state?.from ?? "/movies";

    useEffect(
        () => {
            getMovieById(movieId)
                .then(data => {
                    setMovie(data);
                    setGenres(data.genres.map(genre => genre.name).join(', '));
                });
                
        },
    [movieId]);
    
    
    return (
        <>
            <button className="back-button"><Link to={backLinkHref} className="back-link"> go back </Link></button>
            <MovieCard movie={movie} genres={genres} />
            <AddInfo />
        </>
    );
}