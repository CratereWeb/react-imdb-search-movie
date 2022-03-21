import { useRef } from "react";
import InputForm from "../InputForm/InputForm";
import ButtonForm from "../ButtonForm/ButtonForm";

export default function Form(props) {
  const inputRef = useRef();

  return (
    <form id="search-form" onSubmit={props.onsubmit}>
      <InputForm ref={inputRef} />
      <ButtonForm />
    </form>
  );
}
