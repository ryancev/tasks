import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Ryan Evans
            </header>
            <div>
                <Container>
                    <Row className="buttonRow">
                        <Col>
                            {" "}
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {" "}
                            <div className="redRect">Red Rect One</div>
                        </Col>
                        <Col>
                            {" "}
                            <div className="redRect">Red Rect Two</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {" "}
                            <h3>This is a header</h3>
                            <img
                                src="https://i.picsum.photos/id/572/400/400.jpg?hmac=Ye6GYI-pcWI2iL7VuNUp-VQ0bheZ95k_yRnUw1wQtV8"
                                alt="Placeholder Image"
                            />
                        </Col>
                        <Col>
                            {" "}
                            <ul>
                                <li>I</li>
                                <li>Love</li>
                                <li>Lists</li>
                                <li>Hello World :)</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
