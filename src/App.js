import "./styles.css";
//!!! Utiliser un useState pour extraite data de la fonction getMovieData
//!!! Pour ensuite l'injecter via des props via MovieContainer
import { useState } from "react";
import Form from "./components/Form/Form";
import MovieContainer from "./components/MovieContainer/MovieContainer";

export default function App() {
  const [movieData, setMovieData] = useState("");

  function submit(e) {
    e.preventDefault();
    const searchInput = e.target.children[0].value;
    //console.log(searchInput);
    getMovieData(searchInput);
  }

  async function getMovieData(searchInput) {
    const query = `https://www.omdbapi.com/?t=${searchInput}&apikey=63949f1a`;
    const response = await fetch(query, { mode: "cors" });
    const data = await response.json();
    console.log(data);
    setMovieData(data);
  }

  return (
    <>
      <Form onsubmit={submit} />
      <MovieContainer data={movieData} />
    </>
  );
}
