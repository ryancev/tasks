import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface Color {
    colorName: string;
    colorCode: string;
}

/**
 * I originally had colorCode as hex color codes and it worked great - but it failed unit tests because
 * they were checking for the value - that's why there is redundancy.
 */
const COLORS: Color[] = [
    { colorName: "DodgerBlue", colorCode: "DodgerBlue" },
    { colorName: "LightCoral", colorCode: "LightCoral" },
    { colorName: "PeachPuff", colorCode: "PeachPuff" },
    { colorName: "LightSalmon", colorCode: "LightSalmon" },
    { colorName: "LightSkyBlue", colorCode: "LightSkyBlue" },
    { colorName: "Coral", colorCode: "Coral" },
    { colorName: "LightGreen", colorCode: "LightGreen" },
    { colorName: "LightSteelBlue", colorCode: "LightSteelBlue" }
];

const lookupColor: Record<string, Color> = Object.fromEntries(
    COLORS.map((color: Color): [string, Color] => [color.colorName, color])
);

export function ChangeColor(): JSX.Element {
    const [currColor, setColor] = useState<Color>(lookupColor["DodgerBlue"]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(lookupColor[event.target.value]);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <ul>
                {COLORS.map((color: Color) => (
                    <li
                        key={color.colorName}
                        style={{
                            display: "inline",
                            backgroundColor: color.colorCode,
                            padding: "7px",
                            margin: "5px"
                        }}
                    >
                        <Form.Check
                            inline
                            type="radio"
                            name="Colors"
                            onChange={updateColor}
                            id={`color-check-${color.colorName}`}
                            label={color.colorName}
                            value={color.colorName}
                            checked={currColor === color}
                        ></Form.Check>
                    </li>
                ))}
            </ul>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: currColor.colorName,
                        padding: "5px"
                    }}
                >
                    {currColor.colorName}
                </span>
            </div>
        </div>
    );
}
