import MovieHeader from "../MovieHeader/MovieHeader";
import MovieMain from "../MovieMain/MovieMain";
import MovieFooter from "../MovieFooter/MovieFooter";

export default function MovieContainer(props) {
  console.log("from MovieContainer.jsx : ", props.data);
  const movieTitle = props.data["Title"];
  const moviePoster = props.data["Poster"];
  const moviePlot = props.data["Plot"];

  return (
    <div className="movie-container">
      <MovieHeader title={movieTitle} />
      <MovieMain posterUrl={moviePoster} />
      <MovieFooter plot={moviePlot} />
    </div>
  );
}
