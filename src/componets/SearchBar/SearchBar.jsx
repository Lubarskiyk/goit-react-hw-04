import { FiSearch } from "react-icons/fi";
import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
export default function SearchBar() {
  function handleSubmit(evt) {
    evt.preventDefault();
    const value = evt.target.elements.search.value.trim();
    value.length === 0
      ? toast.error("The field must not be empty", {
          duration: 2000,
          position: "top-right",
        })
      : console.log(value);
    evt.target.reset();
  }
  return (
    <header>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={style.input}
        />
        <button type="submit" className={style.button}>
          {" "}
          <FiSearch size="16px" />
        </button>
      </form>
      <Toaster />
    </header>
  );
}
