import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [rightDie, setRight] = useState<number>(1);
    const [leftDie, setLeft] = useState<number>(2);

    function rollRight(): void {
        const rollVal = d6();
        setRight(rollVal);
    }

    function rollLeft(): void {
        const rollVal = d6();
        setLeft(rollVal);
    }
    function checkGame(): string {
        if (leftDie === 1 && rightDie === 1) {
            return "Lose";
        } else if (leftDie === rightDie) {
            return "Win";
        } else {
            return "";
        }
    }
    return (
        <div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <span data-testid="left-die">{leftDie}</span>
            </div>
            <div>
                <Button onClick={rollRight}>Roll Right</Button>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>{checkGame()}</div>
        </div>
    );
}
