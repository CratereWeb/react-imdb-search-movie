import TextContainer from "../TextContainer/TextContainer";

export default function MovieHeader(props) {
  return (
    <div className="movie-header">
      <TextContainer text={props.title} />
    </div>
  );
}
