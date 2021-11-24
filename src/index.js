import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flight from './components/Flight';
import History from './components/History';
import MainPage from './components/MainPage';
import HotelRes from './components/HotelRes';
import SignIn from './components/SignIn';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);



