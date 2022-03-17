import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function QuizzerSA({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setAnswer] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group
                controlId="formUserAnswer"
                as={Row}
                style={{ justifyContent: "center", margin: "20px" }}
            >
                <Form.Label column sm={2}>
                    Answer:
                </Form.Label>
                <Col sm={2}>
                    <Form.Control
                        value={userAnswer}
                        onChange={updateAnswer}
                    ></Form.Control>
                </Col>
            </Form.Group>
            <div style={{ margin: "20px" }}>
                {userAnswer.toLowerCase() === expectedAnswer.toLowerCase()
                    ? "✔️"
                    : "❌"}
            </div>
        </div>
    );
}
