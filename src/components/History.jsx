import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import '../App.css';

class History extends React.Component {
    render() {
        return <div>

            <body >
                <div class="row">
                    <div class="col-sm-3 col-md-3 col-lg-3"></div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <div className={"borderr"}>
                            <div >
                                <h1 className='title'>History</h1>
                            </div>
                            <div className='subtitle'>
                                <h2>Flights:</h2>
                                You haven't booked any flights yet!
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-md-3 col-lg-3"></div>
                </div>
            </body>
        </div>;
    }
}

export default History;