import React from 'react';
import axios from 'axios';
import apiData from '../data/api.json';
import Movie from './movie';
import { Container, Row } from 'react-bootstrap';
import DetailWindow from './detailWindow';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            movieCodes: [],
            activeCode: ''
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        let config = {
            'Content-Type': 'application/json',
            "Cache-Control": " no-cache"
        }
        axios.get("https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs", config)
            .then((results) => {

                if (results.data[1]) {
                    this.setState({ movies: results.data[1] });
                    this.setState({
                        movieCodes: Object.keys(results.data[1])
                    });

                }
                //this is return when cors issue happens in chrome
                else {
                    this.setState({ movies: apiData[1] });
                    this.setState({
                        movieCodes: Object.keys(apiData[1])
                    })
                }

            });
    }

    setActiveMovie(code) {
        this.setState({
            activeCode: code
        })
    }

    renderMovies() {
        return this.state.movieCodes.map((code, i) => {
            return (
                <React.Fragment key={i}>
                    <DetailWindow details={this.state.movies[code]} activeCode={this.state.activeCode} />
                    <div>
                        <Movie movie={this.state.movies[code]} key={code} activeCode={this.state.activeCode} eventCode={code} select={() => {
                            this.setActiveMovie(code)
                        }} />
                    </div>
                </React.Fragment>
            )
        })
    }
    render() {

        return (
            <div>                
                <Container>
                    <Row>
                        {
                            this.renderMovies()
                        }
                    </Row>
                </Container>

            </div>
        )

    }
}


export default MovieList;