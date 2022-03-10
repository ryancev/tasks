import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface Color {
    colorName: string;
    colorCode: string;
}

const COLORS: Color[] = [
    { colorName: "Lavender", colorCode: "#D8A6FF" },
    { colorName: "Pink", colorCode: "#FFA6FA" },
    { colorName: "Peach", colorCode: "#fee4e4" },
    { colorName: "Yellow", colorCode: "#FAFFA6" },
    { colorName: "Blue", colorCode: "#A6B2FF" },
    { colorName: "Beige", colorCode: "#FFCBA6" },
    { colorName: "Shamrock", colorCode: "#A7FFA6" },
    { colorName: "Teal", colorCode: "#A6FFE2" }
];

const lookupColor: Record<string, Color> = Object.fromEntries(
    COLORS.map((color: Color): [string, Color] => [color.colorName, color])
);

export function ChangeColor(): JSX.Element {
    const [currColor, setColor] = useState<Color>(lookupColor["Lavender"]);

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
                        backgroundColor: currColor.colorCode,
                        padding: "5px"
                    }}
                >
                    {currColor.colorName}
                </span>
            </div>
        </div>
    );
}
