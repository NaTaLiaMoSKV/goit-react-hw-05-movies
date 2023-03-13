export default function MovieCard({ movie, genres }) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="100" alt={movie.title} />
            <h2>{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
            <p> User Score: {(movie.vote_average * 10).toFixed()}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{genres}</p>
        </div>
    )
}