import React from "react";
import { Button } from "react-bootstrap";
import { Visible } from "../interfaces/visible";

export function ViewQuizButton({ visible, setVisible }: Visible): JSX.Element {
    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button style={{ padding: "12px" }} onClick={flipVisibility}>
                Open Quiz
            </Button>
        </div>
    );
}
