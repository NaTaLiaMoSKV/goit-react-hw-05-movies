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
        <ul className="cast-list">
            {
                cast.length === 0
                    ? <p className="reviews-errorText">We don`t any information about cast</p>
                    :cast.map(actor =>
                        <li className="cast-item" key={actor.id}>
                            <img className="cast-image" src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={actor.original_name} width="100" />
                            <p className="cast-name">{actor.original_name}</p>
                            <p className="cast-character">Character: {actor.character}</p>
                        </li>
            )}
        </ul>
    )
}