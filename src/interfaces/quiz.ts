import { Question } from "../interfaces/question";

export interface Quiz {
    title: string;
    description: string;
    numQuestions: number;
    questions: Question[];
}
