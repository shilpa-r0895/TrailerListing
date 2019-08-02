import React from 'react';
import { Card, Col, Button, Container, Row } from 'react-bootstrap';


export default class DetailWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: this.props.details,
            activeMovie: this.props.activeCode,
            code: this.props.details["EventCode"]
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    getVideoUrl(url) {
        //"https://www.youtube.com/embed/RDUBrM0g8KI?enablejsapi=1&origin=http://localhost:3000"
        //https:\/\/www.youtube.com\/watch?v=BuZRJZ5FVM4

        let urlArr = url.split('watch?v=');
        return urlArr[0] + 'embed/' + urlArr[1] + "?autoplay=1&amp;origin=http://localhost:3000&amp;enablejsapi=1";

    }

    render() {
        let movieDetails = this.state.details;
        let genre = movieDetails['EventGenre'].split('|');
        let showDate = movieDetails["ShowDate"].split(',');
        let ratings = movieDetails['ratings'];
        return (
            <React.Fragment>
                {
                    this.state.activeCode === this.state.code ?
                        <Col sm={12} xs={12}>
                            <div className="overlay">
                                <img src={`https://in.bmscdn.com/events/moviecard/${this.state.activeCode}.jpg`} alt=""></img>
                            </div>
                            <Card className="movieDetails">
                                <div className="embed-responsive embed-responsive-21by9">
                                    <iframe className="embed-responsive-item" title={movieDetails['EventTitle']} enablejsapi="1" origin="http://localhost:3000" autoPlay="1" src={this.getVideoUrl(movieDetails["TrailerURL"])} allow=""></iframe>
                                </div>

                                <div className="cardContainer">
                                    <Card.Body>
                                        <Card.Title>{movieDetails["EventTitle"]}</Card.Title>
                                        <Card.Text>
                                            {movieDetails['EventLanguage']}
                                        </Card.Text>
                                        <Card.Text>
                                            {
                                                genre.map((g, i) => {
                                                    if (g !== '|') {
                                                        return <Button variant="outline-info" className="genre" key={i}>{g}</Button>
                                                    }
                                                    else {
                                                        return null;
                                                    }
                                                })
                                            }
                                        </Card.Text>
                                        <div className="flex">
                                            <div className="flex iconData">
                                                <i className="fa fa-thumbs-up" ></i>
                                                <div>
                                                    <span className="mediumText">{movieDetails["wtsPerc"]}%</span>
                                                    <div className="smallText">{movieDetails["csCount"]}</div>
                                                </div>
                                            </div>
                                            <div className="flex iconData">
                                                <i className="fa fa-calendar"></i>
                                                <div>
                                                    <span className="mediumText">{showDate[0]}</span>
                                                    <div className="smallText">{showDate[1]}</div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="footer marginNegative">
                                            <Container>
                                                <Row>
                                                    <Col className="center">
                                                        <Button variant="outline-info" className="genre circle green"><i className="fa fa-thumbs-up"></i></Button>
                                                        <div className="extraSmallText green">
                                                            WILL WATCH
                                                        </div>
                                                        <div className="extraSmallText green">
                                                            ({ratings["wtsCount"]})
                                                        </div>
                                                    </Col>
                                                    <Col className="center">
                                                        <Button variant="outline-info" className="genre circle yellow"><i className="fa fa-question"></i></Button>
                                                        <div className="extraSmallText yellow">
                                                            MAYBE
                                                        </div>
                                                        <div className="extraSmallText yellow">
                                                            ({ratings["maybe"]})
                                                        </div>
                                                    </Col>
                                                    <Col className="center">
                                                        <Button variant="outline-info" className="genre circle red"><i className="fa fa-thumbs-down"></i></Button>
                                                        <div className="extraSmallText red">
                                                            WON'T WATCH
                                                        </div>
                                                        <div className="extraSmallText red">
                                                            ({ratings["dwtsCount"]})
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Container>
                                        </div>
                                    </Card.Body>

                                </div>



                            </Card>
                        </Col>
                        : null
                }
            </React.Fragment>
        )
    }
}