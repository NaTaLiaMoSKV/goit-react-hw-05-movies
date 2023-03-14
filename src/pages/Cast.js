import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieCast } from "api/Movie-api";

export default function Cast() {
    const { movieId } = useParams();
     const [cast, setCast] = useState([]);

    useEffect(
        () => {
        getMovieCast(movieId)
            .then(data => {
                setCast(data.cast);
            });
    }, [movieId])
    return (
        <ul>
            {cast.map(actor =>
                <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={actor.original_name} width="50" />
                    <p>{actor.original_name}</p>
                    <p>Character: {actor.character}</p>
                </li>
            )}
        </ul>
    )
}