import React, { Component } from 'react';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class HotelRes extends React.Component {
  render() {
    return <div>
      <div class="row">
        <div class="col-sm-3 col-md-3 col-lg-3"></div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div className={"borderr"}>
              <div >
                <h1 className='title'>Your Reservations</h1>
              </div>
              <div >
                <h2 className='subtitle'>You don't have any reservations yet!</h2>
              </div>
          </div>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3"></div>
      </div>
    </div>;
  }
}

export default HotelRes;

