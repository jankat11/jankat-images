import { useContext, useEffect, useRef } from "react";
import UnsplashContext from "../appContext";

let timeOut: number;

const SearchForm = () => {
  const {
    handleChangeSearchvalue,
    closeGallery,
    isMyGalleryOpen,
    searchValue,
  } = useContext(UnsplashContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      handleChangeSearchvalue(inputRef.current!.value);
      closeGallery();
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isMyGalleryOpen) {
      inputRef.current!.value = "";
    } else {
      inputRef.current!.value = searchValue;
    }
  }, [isMyGalleryOpen]);

  return (
    <section>
      <article>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            placeholder={!isMyGalleryOpen ? "desk" : "your gallery:"}
            type="text"
            ref={inputRef}
            onChange={handleChange}
            className="form-input search-input"
          />
        </form>
      </article>
    </section>
  );
};
export default SearchForm;
