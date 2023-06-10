import "./Dropdown.css";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeSearchTerm } from "../store";
import SongShow from "./SongShow";

function Dropdown({ data }) {
  const dispatch = useDispatch();

  const [closeDropdown, setCloseDropdown] = useState(false);
  const [songData, setSongData] = useState({});

  if (data && !data.error) {
    const handleClick = (song) => {
      dispatch(changeSearchTerm(song.title));
      setCloseDropdown(true);

      const songDataObj = {
        title: song.title,
        cover: song.album.cover,
        artistName: song.artist.name,
        preview: song.preview,
      };

      setSongData((songData) => ({ ...songData, ...songDataObj }));
    };

    const dataArray = data.data;
    const result = dataArray.slice(0, 7);

    const renderedDropdown = result.map((song) => {
      return (
        <div
          className="Dropdown-list-container"
          key={song.id}
          onClick={() => {
            handleClick(song);
          }}
        >
          <img className="Dropdown-list-image" src={song.album.cover} alt="" />
          <div className="Dropdown-text-container">
            <li className="Dropdown-list-song">{song.title}</li>
            <li className="Dropdown-list-artist">{song.artist.name}</li>
          </div>
        </div>
      );
    });

    let content;
    if (closeDropdown) {
      content = <SongShow songData={songData} />;
    } else {
      content = renderedDropdown;
    }

    return (
      <div className="Dropdown-container">
        <ul className="Dropdown-list">{content}</ul>
      </div>
    );
  }
}

export default Dropdown;
