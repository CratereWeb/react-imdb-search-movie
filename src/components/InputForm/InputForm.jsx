import react from "react";
function InputForm(props, ref) {
  return (
    <input
      type="text"
      id="search-input"
      name="search-input"
      placeholder="Quel film cherchez-vous ?"
      ref={ref}
    />
  );
}

export default react.forwardRef(InputForm);
