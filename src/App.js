import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import Moonoz from './img/MoonSquare.jpg';
import MoonTag from './img/moonozTag.svg';
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
          <br/>
          <img class='moonTag' src={MoonTag} alt="Moonoz Tag" />

        </Container>
      </Container>
      <Container>

      </Container>
    </>
  );
}

export default App;
