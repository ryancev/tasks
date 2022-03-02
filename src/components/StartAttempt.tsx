import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizStatus, setStatus] = useState<boolean>(false);
    const [numAttempts, setAttempts] = useState<number>(4);
    function startQuiz(): void {
        setStatus(true);
        removeAttempt();
    }
    function stopQuiz(): void {
        setStatus(false);
    }
    function removeAttempt(): void {
        setAttempts(numAttempts - 1);
    }
    function addAttempt(): void {
        setAttempts(numAttempts + 1);
    }
    return (
        <div>
            <div>
                <div>Number of attempts: {numAttempts}</div>
                <Button
                    onClick={startQuiz}
                    disabled={numAttempts <= 0 || quizStatus}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!quizStatus}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={addAttempt} disabled={quizStatus}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
