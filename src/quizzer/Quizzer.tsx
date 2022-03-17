import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizView } from "./QuizView";

const INITIAL_QUIZES: Quiz[] = [
    {
        title: "Welcome to Quizzer!",
        description: "You can give your quizzes descriptions!",
        numQuestions: 2,
        questions: [
            {
                id: 1,
                name: "Question 1",
                body: "Do you like quizes?",
                type: "short_answer_question",
                options: [],
                expected: "Yes",
                points: 5,
                published: true
            },
            {
                id: 2,
                name: "Question 2",
                body: "How many days are in a week?",
                type: "short_answer_question",
                options: [],
                expected: "7",
                points: 4,
                published: true
            }
        ]
    },
    {
        title: "You can make your own quizzes",
        description: "Or edit these ones!",
        numQuestions: 2,
        questions: [
            {
                id: 1,
                name: "Question 1",
                body: "Do you like quizes?",
                type: "multiple_choice_question",
                options: ["Yes", "No"],
                expected: "No",
                points: 5,
                published: true
            },
            {
                id: 2,
                name: "Question 2",
                body: "Is the sky really blue?",
                type: "multiple_choice_question",
                options: ["Yes", "No", "Sometimes"],
                expected: "Sometimes",
                points: 3,
                published: true
            }
        ]
    }
];

export function Quizzer(): JSX.Element {
    // ADD SETTER FUNCTIONS, ONLY REMOVED TO PASS LINT
    const [userScore] = useState<number>(0);
    const [userQuizes] = useState<Quiz[]>(INITIAL_QUIZES);
    return (
        <div>
            <Row>
                <Col>
                    <span>
                        <h4>Earned Points:</h4>
                        <span>{userScore}</span>
                    </span>
                </Col>
                <Col>
                    <h1>Quizzer</h1>
                </Col>
                <Col>
                    <Button style={{ padding: "15px" }}>Create Quiz</Button>
                </Col>
            </Row>
            <hr></hr>
            <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                {userQuizes.map(
                    (quiz: Quiz): JSX.Element => (
                        <li key={quiz.title}>
                            <QuizView quiz={quiz}></QuizView>
                            <hr></hr>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}
