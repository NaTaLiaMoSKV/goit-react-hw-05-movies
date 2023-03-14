export default function MovieCard({ movie, genres }) {
    return (
        <div className="movieCard">
            <img className="movieCard-image" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} height="400" alt={movie.title} />
            <div className="movieCard-info">
                <h2 className="movieCard-info-title">{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
                <p className="movieCard-info-score"> User Score: {(movie.vote_average * 10).toFixed()}%</p>
                <h3>Overview</h3>
                <p className="movieCard-info-overview">{movie.overview}</p>
                <h4>Genres</h4>
                <p className="movieCard-info-genres">{genres}</p>
            </div>
            
        </div>
    )
}