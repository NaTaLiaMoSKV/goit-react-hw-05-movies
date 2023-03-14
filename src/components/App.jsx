import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
// import Home from "pages/home/Home";
// import Movies from "pages/movies/Movies";
// import MovieDetails from "pages/movieDetails/MovieDetails";
// import Cast from "pages/cast/Cast";
// import Reviews from "pages/reviews/Reviews";
import { Layout } from "./layout/Layout";
const Home = lazy(() => import("pages/home/Home"));
const Movies = lazy(() => import("pages/movies/Movies"));
const MovieDetails = lazy(() => import("pages/movieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/cast/Cast"));
const Reviews = lazy(() => import("pages/reviews/Reviews"));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />;
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
