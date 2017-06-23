import React, {Component} from 'react';
import './App.css';
import Popular from './Popular.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Battle from './Battle.js';
import Results from './Results.js';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'


class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Navbar />
                    <Switch>
                        <Route path="/popular" component={Popular}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/battle" component={Battle}/>
                        <Route path="/battle/results" component={Results}/>
                        <Route render={function () {
                            return (
                                <div className="page404-wrapper">
                                    <img src="/battle-logo.png" alt=""/>
                                    <p className="page404-text"> 404 - Not found</p>
                                </div>

                            )
                        }}
                        />
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default App;
