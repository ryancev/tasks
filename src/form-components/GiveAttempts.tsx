import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [triesRemaining, setRemaining] = useState<number>(3);
    const [triesRequested, setRequested] = useState<number>(0);

    function addAttempts(): void {
        if (triesRequested > 0) {
            setRemaining(triesRemaining + triesRequested);
        }
    }

    function useAttempts(): void {
        if (triesRemaining > 0) {
            setRemaining(triesRemaining - 1);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <span>Number of attempts: {triesRemaining}</span>
            </div>
            <Form.Group controlId="formAddAttmepts">
                <Form.Label>Add Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={triesRequested}
                    onChange={(event: ChangeEvent) =>
                        setRequested(parseInt(event.target.value) || 0)
                    }
                ></Form.Control>
            </Form.Group>
            <Button onClick={useAttempts} disabled={!(triesRemaining > 0)}>
                Use
            </Button>
            <Button onClick={addAttempts}>Gain</Button>
        </div>
    );
}
