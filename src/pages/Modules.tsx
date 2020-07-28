import React from "react";
import Semester from "../components/modules/Semester";
import { ModuleContents } from "../utils/ModuleContsants";
import Introduction from "../components/Introduction";

function Modules() {
  return (
    <div>
      <Introduction
        title={"NUS Modules"}
        subtitle={"Scroll Down to view my module reviews! "}
      />
      {ModuleContents.map((semester) => (
        <Semester semesterInformation={semester} />
      ))}
    </div>
  );
}

export default Modules;
