import React, { Fragment, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import background from './static/background.jpg';
import { signInWithGoogle } from '../firebase';
import arrow from './static/arrow.svg';
import tv from './static/tv.png';
import mobile from './static/mobile.jpg';
import boxshot from './static/boxshot.png';
import devices from './static/devices.png';
import plus from './static/plus.svg';
import cross from './static/cross.svg';
import UserContext from '../context/UserContext';

const HomeComponent = () => {

  const userContext = useContext(UserContext);
  if (userContext.user !== null) {
    return <Redirect to={{ pathname: '/watch' }} />
  }

  const toggle = e => {
    const target = document.getElementById(e.target.id + "1");
    if (target.style.display === '' || target.style.display === 'none') {
      e.target.src = cross;
      target.style.display = 'block';
    }
    else {
      e.target.src = plus;
      target.style.display = 'none';
    }
  }

  return (
    <Fragment>
      <section className="main">
        <div className="background">
          <img src={background} alt="background" className="background-img" />
          <div className="background-gradient"></div>
        </div>
        <div className="container">
          <div className="header-text">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Sign in with Google account.</p>
          </div>
          <div className="header-btn">
            <button className="btn" onClick={signInWithGoogle}>
              GET STARTED
              <img src={arrow} alt="" className="arrow" />
            </button>
          </div>
        </div>
      </section>

      <section className="netflix-tv">
        <div className="container grid">
          <div className="netflix-text">
            <h1>Enjoy on your TV.</h1>
            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
          </div>
          <div className="watch">
            <img src={tv} alt="" className="flix-tv" />
            <div className="watch-tv">
              <video className="tv" autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="netflix-mobile">
        <div className="container grid">
          <div className="mobile">
            <img src={mobile} alt="" className="flix-mobile" />
            <div className="download-card">
              <div className="flex">
                <img src={boxshot} alt="" className="boxshot" />
                <div className="download-text">
                  <h5>Stranger Things</h5>
                  <p>Downloading...</p>
                </div>
                <div className="download-gif">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="netflix-text">
            <h1>Download your shows to watch offline.</h1>
            <h2>Save your favourites easily and always have something to watch.</h2>
          </div>
        </div>
      </section>

      <section className="netflix-devices">
        <div className="container grid">
          <div className="netflix-text">
            <h1>Watch everywhere.</h1>
            <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
          </div>
          <div className="watch">
            <img src={devices} alt="" className="flix-laptop" />
            <div className="watch-tv">
              <video className="tv" autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="netflix-faq">
        <div className="container flex">
          <div>
            <h1>Frequently Asked Questions</h1>
            <ul>
              <li>
                <div className="flex items">
                  <h2>What is Netflix?</h2>
                  <img id="1" src={plus} alt="" className="toggle-btn" onClick={toggle} />
                </div>
                <div id="11" className="flex items para">
                  <h2>
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                      <br /><br />
                      You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                    </h2>
                </div>
              </li>
              <li>
                <div className="flex items">
                  <h2>How much does Netflix cost?</h2>
                  <img id="2" src={plus} alt="" className="toggle-btn" onClick={toggle} />
                </div>
                <div id="21" className="flex items para">
                  <h2>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
                  </h2>
                </div>
              </li>
              <li>
                <div className="flex items">
                  <h2>Where can I watch?</h2>
                  <img id="3" src={plus} alt="" className="toggle-btn" onClick={toggle} />
                </div>
                <div id="31" className="flex items para">
                  <h2>
                    Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                    <br /><br />
                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                  </h2>
                </div>
              </li>
              <li>
                <div className="flex items">
                  <h2>How do I cancel?</h2>
                  <img id="4" src={plus} alt="" className="toggle-btn" onClick={toggle} />
                </div>
                <div id="41" className="flex items para">
                  <h2>
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                  </h2>
                </div>
              </li>
              <li>
                <div className="flex items">
                  <h2>What can I watch on Netflix?</h2>
                  <img id="5" src={plus} alt="" className="toggle-btn" onClick={toggle} />
                </div>
                <div id="51" className="flex items para">
                  <h2>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                  </h2>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container grid">
          <div className="flex">
            <p>Questions? Call <a href="tel:000-800-040-1843">000-800-040-1843</a></p>
          </div>
          <div className="flex">
            <div>
              <ul>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Invsetor Relations</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="http://fast.com">Speed test</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="/">Help Center</a></li>
                <li><a href="/">Jobs</a></li>
                <li><a href="/">Cookie Preferences</a></li>
                <li><a href="/">Legal Notices</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="/">Account</a></li>
                <li><a href="/">Ways to Watch</a></li>
                <li><a href="/">Corporate Information</a></li>
                <li><a href="/">Netflix Originals</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="/">Media Center</a></li>
                <li><a href="/">Terms of Use</a></li>
                <li><a href="http://github.com/deepakMaj">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>

  )
}

export default HomeComponent
