import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import Moonoz from './img/MoonSquare.jpg';
import NavBar from './components/NavBar';
import './style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>

      {/* <NavBar /> */}
      <Container className="App" fluid>
        <Container className='banner'>

          <img  class='img-banner'src={Moonoz} alt="Moonoz" />
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joels world
          </a>
          <p>this is how you make an app</p>
        </header> */}

        </Container>
      </Container>
      <Container>

      </Container>
    </>
  );
}

export default App;
