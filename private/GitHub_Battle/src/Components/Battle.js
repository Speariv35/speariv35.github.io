import React, {Component} from 'react';
import './Battle.css';
import PropTypes from 'prop-types';
import PlayerInfo from './PlayerInfo';
import api from '../utils/api.js';
import {Link} from 'react-router-dom'


class PlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        api.fetchUserInfo(this.state.username).then(result => {
                this.props.onSubmit(
                    this.props.id,
                    result.login,
                    result.avatar_url,
                )
            }
        );

    }


    render() {
        return (
            <div className="row">
                <form action="" className="row-item" onSubmit={this.handleSubmit}>
                    <label htmlFor="" className="header">{this.props.label}</label>
                    <input
                        id={this.props.id} type="text"
                        placeholder='github username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button
                        className='button'
                        type='submit'
                        disabled={!this.state.username}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )

    }

}


PlayerInput.propTypes = {
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};


class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerTwoFound: false,
            playerOneFound: false,
            playerOneImage: null,
            playerTwoImage: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearUsername = this.clearUsername.bind(this);
    }

    handleSubmit(id, username, imgUrl, isFound) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = imgUrl;
            newState[id + 'Found'] = isFound;
            return newState;
        })
    }

    clearUsername(id) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            newState[id + 'Found'] = false;
            return newState;
        })
    }


    render() {
        var match = this.props.match;
        var playerOneName = this.state.playerOneName;
        var playerTwoName = this.state.playerTwoName;


        return (
            <div className="home-container">
                <h1>Battle</h1>
                <div>
                    <div className="row">
                        {!playerOneName &&
                        <PlayerInput
                            id='playerOne'
                            label="Player One"
                            onSubmit={this.handleSubmit}
                        />}
                        {playerOneName &&
                        <PlayerInfo
                            username={this.state.playerOneName}
                            imgLink={this.state.playerOneImage}
                        >
                            <p
                                onClick={this.clearUsername.bind(null, 'playerOne')}
                                className="clear"
                            >Clear
                            </p>
                        </PlayerInfo>}
                        {!playerTwoName &&
                        <PlayerInput
                            id='playerTwo'
                            label="Player Two"
                            onSubmit={this.handleSubmit}
                        />}
                        {playerTwoName &&
                        <PlayerInfo
                            username={this.state.playerTwoName}
                            imgLink={this.state.playerTwoImage}
                        >
                            <p
                                onClick={this.clearUsername.bind(null, 'playerTwo')}
                                className="clear"
                            >Clear
                            </p>
                        </PlayerInfo>}

                    </div>
                    {playerTwoName && playerOneName &&
                    <Link
                        className="button start-battle"
                        to={{
                            pathname: match.url + '/results',
                            search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                        }}
                    >Start Battle
                    </Link>
                    }
                </div>
            </div>
        )
    }
}


export default Battle;