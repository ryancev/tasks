import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Halloween"
    | "Christmas"
    | "Thanksgiving"
    | "New-Years"
    | "Valentines Day";

const NEXT_ALPHA: Record<Holiday, Holiday> = {
    Christmas: "Halloween",
    Halloween: "New-Years",
    "New-Years": "Thanksgiving",
    Thanksgiving: "Valentines Day",
    "Valentines Day": "Christmas"
};

const NEXT_DATE: Record<Holiday, Holiday> = {
    "New-Years": "Valentines Day",
    "Valentines Day": "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New-Years"
};

const HOLIDAY_EMOJI: Record<Holiday, string> = {
    Christmas: "🎄",
    Halloween: "🎃",
    "New-Years": "🎉",
    Thanksgiving: "🦃",
    "Valentines Day": "💝"
};

export function CycleHoliday(): JSX.Element {
    const [currHoliday, setHoliday] = useState<Holiday>("Halloween");

    function alphaSort(): void {
        const newHoliday = NEXT_ALPHA[currHoliday];
        setHoliday(newHoliday);
    }

    function dateSort(): void {
        const newHoliday = NEXT_DATE[currHoliday];
        setHoliday(newHoliday);
    }

    function getEmoji(): string {
        return HOLIDAY_EMOJI[currHoliday];
    }

    return (
        <div>
            <div>
                <Button onClick={alphaSort}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={dateSort}>Advance by Year</Button>
            </div>
            <div>
                {
                    <span>
                        Holiday: {getEmoji()} <br />({currHoliday})
                    </span>
                }
            </div>
        </div>
    );
}
