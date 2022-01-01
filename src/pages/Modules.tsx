import React from "react";
import Semester from "../components/modules/Semester";
import Introduction from "../components/Introduction";
import { SemesterItem } from "../utils/ModuleTypes";

type Props = {
  semesters: SemesterItem[];
}

function Modules(props: Props) {
  const { semesters } = props;

  console.log(semesters);

  return (
    <div>
      <Introduction
        title={"NUS Modules"}
        subtitle={"Scroll Down to view my module reviews! "}
      />
      {semesters.map((semester) => (
        <Semester semesterInformation={semester} />
      ))}
    </div>
  );
}

export default Modules;
