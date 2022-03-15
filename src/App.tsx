import React from "react";
import "./App.css";
import { PreviousTasks } from "./PreviousTasks";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Ryan Evans
            </header>
            <hr></hr>
            <Quizzer></Quizzer>
            <hr></hr>
            <PreviousTasks></PreviousTasks>
        </div>
    );
}

export default App;
