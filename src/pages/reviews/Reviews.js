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
        <ul className="reviews-list">
            {
                reviews.length === 0
                    ? <p className="reviews-errorText">We don`t have any reviews for this movie</p>
                    : reviews.map(review => 
                        <li className="reviews-item" key={review.id}>
                            <p className="reviews-author">Author: {review.author}</p>
                            <p className="reviews-content">{review.content}</p>
                        </li>
            )}
        </ul>
    )
}