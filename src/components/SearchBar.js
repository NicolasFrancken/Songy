import "./SearchBar.css";

import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";
import { useLazyGetArtistQuery } from "../store";
import Dropdown from "./Dropdown";
import Skeleton from "./Skeleton";

function SearchBar() {
  const [trigger, { data, error, isFetching }] = useLazyGetArtistQuery();

  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => {
    return { searchTerm: state.search.searchTerm };
  });

  const handleNameChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
    if (event.target.value !== "") {
      trigger(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    trigger(searchTerm);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={7} />;
  } else if (error) {
    content = (
      <div className="SearchBar-error">
        <h2>Sorry, there was an error...</h2>
      </div>
    );
  } else {
    content = <Dropdown data={data} />;
  }

  return (
    <div className="SearchBar-content-container">
      <div className="SearchBar-container">
        <form className="SearchBar-form" onSubmit={handleSubmit}>
          <input
            className="SearchBar-input"
            placeholder="Search for a song!"
            value={searchTerm}
            onChange={handleNameChange}
          />
        </form>
      </div>
      <div className="SearchBar-other-container">{content} </div>
    </div>
  );
}

export default SearchBar;
