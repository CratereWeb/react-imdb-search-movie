import TextContainer from "../TextContainer/TextContainer";

export default function MovieFooter(props) {
  return (
    <div className="movie-footer">
      <TextContainer text={props.plot} />
    </div>
  );
}
