import React from 'react';
import {Navbar, Button} from 'react-bootstrap';


function navBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>Movie Trailer</Navbar.Brand>
                <Navbar.Text>
                    <Button variant="outline-info" className="navigation">Coming Soon</Button>
                    <Button variant="outline-info" className="navigation">Now Showing</Button>
                </Navbar.Text>
            </Navbar>
        </div>
    );
}

export default navBar;