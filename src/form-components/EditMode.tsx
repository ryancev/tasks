import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

interface Student {
    name: string;
    isStudent: boolean;
}

export function EditMode(): JSX.Element {
    const [isEditable, setEditable] = useState<boolean>(false);
    const [studentInfo, setStudentInfo] = useState<Student>({
        name: "Your Name",
        isStudent: true
    });

    function updateEditStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setEditable(event.target.checked);
    }

    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentInfo({ ...studentInfo, isStudent: event.target.checked });
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editable-check"
                label="Edit"
                checked={isEditable}
                onChange={updateEditStatus}
            ></Form.Check>
            <div>
                {isEditable && (
                    <div>
                        <Form.Group controlId="formUpdateStudnet">
                            <Form.Label>Student Name:</Form.Label>
                            <Form.Control
                                value={studentInfo.name}
                                onChange={(event: ChangeEvent) =>
                                    setStudentInfo({
                                        ...studentInfo,
                                        name: event.target.value
                                    })
                                }
                            ></Form.Control>{" "}
                        </Form.Group>
                        <Form.Check
                            type="switch"
                            id="is-student-check"
                            label="Student Status:"
                            checked={studentInfo.isStudent}
                            onChange={updateStudentStatus}
                        ></Form.Check>
                    </div>
                )}
            </div>
            <span>
                {studentInfo.name} is{" "}
                {studentInfo.isStudent ? "a student" : "not a student"}
            </span>
        </div>
    );
}
