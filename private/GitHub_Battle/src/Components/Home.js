import React, {Component} from 'react';
import './Home.css';
import {
    Link
} from 'react-router-dom'


class Home extends Component {

    render() {

        return (
            <div className="home-container">
                <h1>Github Battle: Battle your friends ... and more.</h1>
                <Link className="battle" to="/battle">
                    Battle
                </Link>
            </div>
        )
    }
}


export default Home;