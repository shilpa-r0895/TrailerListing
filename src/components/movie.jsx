import React from 'react';
import { Col } from 'react-bootstrap';


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetails: props.movie,
            eventCode: props.eventCode,
            activeCode : props.activeCode
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps);
    }

    render() {
        let activeMovie = this.state.eventCode === this.state.activeCode;
        let showDate = this.state.movieDetails['ShowDate'].split(',')[0];
        return (
            <div className={ activeMovie ? "movieImage highlight" : "movieImage"} id={this.state.eventCode}>
                <Col>
                    <div className={activeMovie ? "hidden" : "play-container"} onClick = {this.props.select}>
                        <i className="fa fa-play-circle"></i>
                    </div>
                    <div className="movieDate" onClick = {this.props.select}>
                        <div className="date">{showDate}</div>
                    </div>
                    <img
                        width={172}
                        height={172}
                        className="mr-3"
                        src={`https://in.bmscdn.com/events/moviecard/${this.state.eventCode}.jpg`}
                        alt={this.state.movieDetails['EventTitle']}
                        onClick = {this.props.select}
                    />
                    <div className="movieName">
                        {this.state.movieDetails['EventTitle']}
                    </div>
                </Col>

            </div>
        )
    }
} 