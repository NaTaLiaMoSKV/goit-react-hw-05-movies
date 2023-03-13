import { getMovieReviews } from "api/Movie-api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(
        () => {
            getMovieReviews(movieId)
                .then(data => {
                    setReviews(data.results);
                });
        },
    [movieId])
    return (
        <ul>
            {
                reviews.length === 0
                    ? <p>We don`t have any reviews for this movie</p>
                    : reviews.map(review => 
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
            )}
        </ul>
    )
}