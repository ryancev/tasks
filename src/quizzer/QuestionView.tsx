import React from "react";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { QuizerMC } from "./QuizzerMC";
import { QuizzerSA } from "./QuizzerSA";

export function QuestionView({ quiz }: { quiz: Quiz }): JSX.Element {
    return (
        <div>
            <hr></hr>
            <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                {quiz.questions.map((question: Question) => (
                    <li key={question.id}>
                        <div>
                            <div>
                                <h5>{question.name}:</h5>{" "}
                                <i> {question.points} points </i>
                            </div>
                            <br></br>
                            <span>Question: {question.body}</span>
                            {question.type === "multiple_choice_question" && (
                                <QuizerMC
                                    options={question.options}
                                    expectedAnswer={question.expected}
                                ></QuizerMC>
                            )}
                            {question.type === "short_answer_question" && (
                                <QuizzerSA
                                    expectedAnswer={question.expected}
                                ></QuizzerSA>
                            )}
                            <hr></hr>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
