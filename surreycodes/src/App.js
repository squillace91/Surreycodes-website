import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <header id="header" className="fixed-top">
          <nav id="navbar" className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img id="logo" src="assets/SurreyCodeCampLogoNew.svg" width="30" height="30" className="d-inline-block align-top" alt="Surrey Code Camp"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i>
      </span>
            </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul id="navbar-nav" className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#meetup">Meetup</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#history">History</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sponsors">Sponsors</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <article id="home" className="anchor">
            <div id="hook" className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="text-center text-primary">PEER TO PEER MENTORING<br />TECH COMMUNITY</h1>
              </div>
            </div>
            <section id="meetup" className="anchor">
              <div className="container">
                <h1 className="text-primary">Meetup</h1>
                <div className="row">
                  <div id="next-meetup" className="col-lg-8 text-primary">
                    <h4>Upcoming Events</h4>
                    <p>SurreyCodeCamp 1st Anniversary</p>
                    <p>January 17, 2017 @ 6:30pm</p>
                    <p>Beta Colective</p>
                  </div>
                  <div id="meetup-btn" className="col-lg-4">
                    <button className="btn btn-primary" type="button" name="button">RSVP Here</button>
                  </div>
                </div>
              </div>
            </section>
            <section id="about" className="anchor text-primary">
              <div className="container">
              <h1>About SurreyCodeCamp</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum lacus eget dolor feugiat, vitae semper est tristique. Duis ut ullamcorper ante, at finibus turpis. Nam pharetra turpis urna, nec ullamcorper purus laoreet ut. Donec egestas, ligula vitae tempor condimentum, ex est posuere nibh, pulvinar tempor elit enim quis enim. Fusce sodales sit amet enim eget cursus. Nunc malesuada blandit libero, eu laoreet magna tincidunt id. Etiam vulputate, erat vel condimentum ornare, massa odio venenatis nisi, sit amet lacinia quam augue sed est. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
              </div>
            </section>
            <section id="history" className="anchor text-primary">
              <div className="container">
              <h1>SurreyCodeCamp's History</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum lacus eget dolor feugiat, vitae semper est tristique. Duis ut ullamcorper ante, at finibus turpis. Nam pharetra turpis urna, nec ullamcorper purus laoreet ut. Donec egestas, ligula vitae tempor condimentum, ex est posuere nibh, pulvinar tempor elit enim quis enim. Fusce sodales sit amet enim eget cursus. Nunc malesuada blandit libero, eu laoreet magna tincidunt id. Etiam vulputate, erat vel condimentum ornare, massa odio venenatis nisi, sit amet lacinia quam augue sed est. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
              </div>
            </section>
            <section id="sponsors" className="anchor text-primary">
              <div className="container">
              <h1>Sponsors</h1>
              <p> -- Images and a link to each sponsor here --</p>
              </div>
            </section>
          </article>
      <footer id="footer" className="container-fluid">
        <div className="container">
          <ul>
            <li>Our Code of Conduct</li>
            <li>Terms of use for members</li>
            <li>Sponsor Us</li>
          </ul>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
