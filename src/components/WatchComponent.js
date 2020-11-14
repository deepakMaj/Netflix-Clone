import React, { Fragment } from 'react';
import RowComponent from './RowComponent';
import requests from '../api/requests';
import BannerComponent from './BannerComponent';

const WatchComponent = () => {
  return (
    <Fragment>
      <BannerComponent />
      <div className="watch container">
        <RowComponent title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <RowComponent title="Trending Now" fetchUrl={requests.fetchTrending} />
        <RowComponent title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <RowComponent title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <RowComponent title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <RowComponent title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <RowComponent title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </Fragment>
  )
}

export default WatchComponent
