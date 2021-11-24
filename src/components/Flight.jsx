import React, { Component, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import axios from 'axios';
import Flightsdb from './Flightsdb';
import '../App.css';
import Card from './Card';

class Flight extends React.Component {
    state = {
        Flightsdb: []
    };
    componentDidMount() {
        axios.get('http://localhost:5000/signin1')//flightsDB
            .then((res) => {
                console.log(res.data);
                const Flightsdb = res.data
                this.setState({ Flightsdb });
            });
    }

    render() {
        let mData = this.state && this.state.Flightsdb.length > 0 ?
            this.state.Flightsdb.map(p =>
                <Card dest={p.destination} dep={p.departure} ldate={p.date} img={p.imgurl} dur={p.duration} />
            ) : <span style={{ margin: "4%", color: "gray", fontSize: 35 }}> It looks like this Flight does not exist </span>;
        return <div>
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3"></div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <div className="borderr">
                        <h1 className='title'>Flights</h1>
                        {mData}
                        { }
                    </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3"></div>
            </div>
        </div>;
    }
}
export default Flight;




