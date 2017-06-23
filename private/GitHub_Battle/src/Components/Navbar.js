import React, {Component} from 'react';
import './Navbar.css';
import {
    NavLink
} from 'react-router-dom'


class Navbar extends Component {

    render() {
        return (
            <div className="nav-wrapper">
                <img className="battle-logo" src="/battle-logo.png" alt=""/>
                <div className="nav-right-part">
                    <p className="battle-logo-text">GitHub Battle</p>
                    <ul className="navigation">
                        <li>
                            <NavLink exact activeClassName="active-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-link" to="/battle">
                                Battle
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active-link" to="/popular">
                                Popular
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}


export default Navbar;