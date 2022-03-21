export default function MovieMain(props) {
  return (
    <div className="movie-main">
      movie main
      <img className="movie-poster" src={props.posterUrl} alt="" />
    </div>
  );
}
