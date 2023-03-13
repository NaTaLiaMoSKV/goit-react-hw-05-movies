
const API_KEY = '01da1c68b81345f905c14aa4e6274718'; 

export const getTrendingMovies = async() => {
    return await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`)
            .then(response => {
            return response.json();
        })
        .then(data => {
            return data.results;
        });
}

export const getMovieById = async(movieId) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(response => {
            return response.json();
    })
}

export const getMovieByTitle = async(movieTitle) => {
    return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieTitle}&page=1&include_adult=false`)
            .then(response => {
            return response.json();
    })
}

export const getMovieCast = async (movieId) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            return response.json();
    })
}

export const getMovieReviews= async (movieId) => {
    return await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            return response.json();
    })
}