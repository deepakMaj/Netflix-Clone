import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';
import { youtubeApi } from '../config/default';

const RowComponent = ({ title, fetchUrl }) => {

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("https://api.themoviedb.org/3" + fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async movie => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
    else {
      const result = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movie.name || movie.originalName || movie.title}&key=${youtubeApi}`);
      setTrailerUrl(result.data.items[0].id.videoId);
    }
  };

  return (
    <Fragment>
      <div className="row-container">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="flex">
          {movies.map(movie => (
            <div key={movie.id}>
              <img src={imageUrl + movie.poster_path} alt={movie.name || movie.originalName || movie.title} title={movie.name || movie.originalName || movie.title} className="movie-img" onClick={() => handleClick(movie)} />
            </div>
          ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </Fragment>
  )
}

export default RowComponent
