import { useRef, useState } from "react";
import "./SongShow.css";

function SongShow({ songData }) {
  const [start, setStart] = useState(true);

  const audioPlayer = useRef();

  const handleClick = () => {
    if (start) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setStart(!start);
  };

  return (
    <div className="SongShow-container">
      <div className="SongShow-container1">
        <img className="SongShow-container-image" src={songData.cover} alt="" />
        <div className="SongShow-container-names">
          <h1 className="SongShow-container-name">{songData.title}</h1>
          <p className="SongShow-container-artist">{songData.artistName}</p>
        </div>
      </div>
      <div className="SongShow-audio">
        <audio
          ref={audioPlayer}
          src={songData.preview}
          preload="metadata"
          className="SongShow-container-audio"
        ></audio>
        <button className="SongShow-btn" onClick={handleClick}>
          {start ? (
            <i className="bx bx-lg bx-play-circle"></i>
          ) : (
            <i className="bx bx-lg bx-pause-circle"></i>
          )}
          <p>preview</p>
        </button>
      </div>
    </div>
  );
}

export default SongShow;
