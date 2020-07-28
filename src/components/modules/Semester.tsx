import React from "react";
import { Card } from "react-bootstrap";
import SemesterCard from "./SemesterCard";
import { SemesterItem } from "../../utils/ModuleTypes";

type SemesterProps = {
  semesterInformation: SemesterItem;
};

function Semester(props: SemesterProps) {
  const { semesterInformation } = props;

  return (
    <div className="Semester">
      <Card className="semester-container">
        <Card.Header className="text-center">
          {`${semesterInformation.academicYear} : Year ${semesterInformation.year} Semester ${semesterInformation.semester}`}
        </Card.Header>
        <Card.Body className="semester-cards">
          {semesterInformation.modules.map((module) => (
            <SemesterCard module={module} />
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Semester;
