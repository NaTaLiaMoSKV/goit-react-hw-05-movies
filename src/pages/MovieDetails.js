import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import {getMovieById} from "api/Movie-api";
import { useEffect, useState } from "react";
import MovieCard from "components/MovieCard";
import AddInfo from "components/AddInfo";

export default function MovieDetails() {
    const { movieId } = useParams();

    const [movie, setMovie] = useState('');
    const [genres, setGenres] = useState('');

    useEffect(
        () => {
            getMovieById(movieId)
                .then(data => {
                    setMovie(data);
                    setGenres(data.genres.map(genre => genre.name).join('  '));
                });
                
        },
    [movieId]);
    
    
    return (
        <>
            <MovieCard movie={movie} genres={genres} />
            <AddInfo />
            {/* <Link to="cast"> Cast </Link> */}
        </>
    );
}