import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function QuizerMC({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group
                controlId="optionsList"
                as={Row}
                style={{ justifyContent: "center", margin: "20px" }}
            >
                <Form.Label column sm={2}>
                    Select an answer:
                </Form.Label>
                <Col sm={2}>
                    <Form.Select value={userChoice} onChange={updateChoice}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Form.Group>
            Result: {userChoice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
