import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuestionView } from "./QuestionView";
import { ViewQuizButton } from "./ViewQuizButton";

export function QuizView({ quiz }: { quiz: Quiz }): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <span>
                            <h4>{quiz.title}</h4>
                        </span>
                        <span>Total questions: {quiz.numQuestions}</span>
                    </Col>
                    <Col>
                        <span>
                            <h4>Description:</h4>
                            {quiz.description}
                        </span>
                    </Col>
                    <Col>
                        <ViewQuizButton
                            visible={visible}
                            setVisible={setVisible}
                        ></ViewQuizButton>
                    </Col>
                    <Col>
                        <Button style={{ padding: "12px" }}>Edit Quiz</Button>
                    </Col>
                </Row>
                {visible && <QuestionView quiz={quiz}></QuestionView>}
            </Container>
        </div>
    );
}
