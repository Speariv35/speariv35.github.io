import React, {Component} from 'react';
import './Results.css';
const queryString = require('query-string');
import api from '../utils/api.js';
import PlayerInfo from './PlayerInfo';
import Loading from './Loading';
import PieChart from "react-chartjs";
var Chart = PieChart.Pie;


class DataChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Looser Score",
                    value: this.props.looserScore
                },
                {
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Winner score",
                    value: this.props.winnerScore
                }
            ],
            chartOptions: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    }

    render() {
        return <Chart data={this.state.data} options={this.state.chartOptions}/>
    }
}


class PlayerStats extends Component {
    render() {
        return (
            <div className="row-item stats">
                <p>{this.props.info.name}</p>
                <p>Followers: {this.props.info.followers}</p>
                <p>Following: {this.props.info.following}</p>
                <p>Public Repos: {this.props.info.public_repos}</p>
                <a href={this.props.info.blog} target="_blank">{this.props.info.blog}</a>
            </div>
        )
    }
}

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: '',
            looser: '',
            isLoading: true
        };

    }

    componentDidMount() {
        var playerTwoName = queryString.parse(this.props.location.search).playerTwoName;
        var playerOneName = queryString.parse(this.props.location.search).playerOneName;
        var players = [playerOneName, playerTwoName];
        api.battle(players).then(result => {
            this.setState(
                {
                    winner: result[0],
                    looser: result[1],
                    isLoading: false
                }
            );
        });

    }

    render() {

        return (
            <div className="home-container">
                {this.state.isLoading &&
                <Loading />
                }
                <h1>Results</h1>
                <div className="results">
                    <div className="row">
                        <div className="row-item">
                            <p className="score-title">Winner</p>
                            <p className="score">Score: {this.state.winner.totalScore}</p>
                            <PlayerInfo
                                username={this.state.winner.login}
                                imgLink={this.state.winner.avatar_url}
                            >
                                <PlayerStats
                                    info={this.state.winner}
                                />
                            </PlayerInfo>
                        </div>
                        {this.state.winner.totalScore &&
                        <div className="row-item chart">
                            <DataChart
                                winnerScore={this.state.winner.totalScore}
                                looserScore={this.state.looser.totalScore}
                            />
                        </div>
                        }
                        <div className="row-item">
                            <p className="score-title">Looser</p>
                            <p className="score">Score: {this.state.looser.totalScore}</p>
                            <PlayerInfo
                                s
                                username={this.state.looser.login}
                                imgLink={this.state.looser.avatar_url}
                            >
                                <PlayerStats
                                    info={this.state.looser}
                                />
                            </PlayerInfo>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Results;