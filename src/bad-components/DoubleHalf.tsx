import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface numProps {
    dhValue: number;
    setDhValue: (newNum: number) => void;
}

function Doubler({ dhValue, setDhValue }: numProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: numProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <div>
                <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
                <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
            </div>
        </div>
    );
}
