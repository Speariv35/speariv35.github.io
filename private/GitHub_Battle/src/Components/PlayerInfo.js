import React, {Component} from 'react';

class PlayerInfo extends Component {

    constructor(props) {
        super(props);
        this.clearPlayer = this.clearPlayer.bind(this);
    }

    clearPlayer() {
        this.props.clear(
            this.props.id,
        )
    }

    render() {

        return (
            <div className="row-item">
                < img
                    className="avatar-img"
                    src={this.props.imgLink}
                    alt={this.props.username}
                />
                <p>@{this.props.username}</p>
                {this.props.children}
            </div>
        )
    }
}


export default PlayerInfo;