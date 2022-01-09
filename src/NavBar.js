import React from 'react'
import { Col, Row } from 'reactstrap';
import './NavBar.css';



 function NavBar(props) {
    return (
        <div >
            <Row>
                <Col lg={7}>
                 <img className='imageClass' style={{backgroundColor:"black"}} src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"/>
                </Col>
                <Col lg={5}>
                <Row>
                    <Col>
                    <p>blog</p>
                    </Col>
                    <Col>
                    <p>Register as a professional</p>
                    </Col>
                    <Col>
                    <p>login/sign Up</p>
                    </Col>
                </Row>
                </Col>
            </Row>
        </div>
    );
}

export default NavBar;

