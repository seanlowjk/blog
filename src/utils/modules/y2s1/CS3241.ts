import { ModuleContent } from "../../ModuleTypes";

const CS3241: ModuleContent = {
  taken: "AY2019/20 Semester 1",
  components: [
    {
      type: "Tutorial Attendance",
      weightage: 5,
    },
    {
      type: "Take-Home Labs",
      weightage: 25,
    },
    {
      type: "Midterms",
      weightage: 30,
    },
    {
      type: "Finals",
      weightage: 40,
    },
  ],
  overview: [
    "The fundamental module for Computer Graphics and Games",
    "Knowledge of C++ is assumed for this module. This module brings you into the world of Computer Graphics where a lot of Linear Algebra is needed. If you have taken MA1101R before or while taking this module, this module would not be too difficult.",
    "You will require a lot of vectors and geometry to understand how does cameras, projections, texture mapping and ray tracing work before you can go into the Lab Assignments. Not much Data Structures and Algorithms are needed, despite it being a prerequisite for this module.",
    "Overall, this module have a steep bell curve as everyone gets almost full marks for their Lab Assignments and do well for their midterms.",
  ],
  workload: [
    "6/10",
    "Lab Assignments are not trivial as they can range from simple drawing of objects to ray tracing.",
  ],
  difficulty: [
    "6/10",
    "MA1101R knowledge is good to help you along this module.",
  ],
  grade: ["Expected: B+", "Actual: B"],
  link: "/modules/CS3241",
};

export default CS3241;
