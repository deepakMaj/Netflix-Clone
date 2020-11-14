import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import requests from '../api/requests';
import { youtubeApi } from '../config/default';

const BannerComponent = () => {

  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  // eslint-disable-next-line 
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("https://api.themoviedb.org/3" + requests.fetchNetflixOriginals);
      const result = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];
      setMovies(result);
      const youtubeResult = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${result.name}&key=${youtubeApi}`);
      setUrl(`https://www.youtube.com/watch?v=${youtubeResult.data.items[0].id.videoId}`);
      return request;
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <section className="banner" style={{
        backgroundImage: `url(${imageUrl}${movies.backdrop_path})`
      }}>
        <div className="banner-contents">
          <h1>{movies.name || movies.title || movies.original_name}</h1>
          <div>
            <a href={url} rel="noreferrer" target="_blank" className="banner-btn">Play</a>
            <button className="banner-btn">My List</button>
          </div>
          <p>{movies.overview}</p>
        </div>
      </section>
      <div className="banner-gradient"></div>
    </Fragment>
  )
}

export default BannerComponent
