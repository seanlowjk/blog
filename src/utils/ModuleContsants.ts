import { SemesterItem } from "./ModuleTypes";

import CS1101S from "./modules/y1s1/CS1101S";
import CS1231 from "./modules/y1s1/CS1231";
import MA1521 from "./modules/y1s1/MA1521";
import GES1028 from "./modules/y1s1/GES1028";
import GEH1030 from "./modules/y1s1/GEH1030";
import CFG1002 from "./modules/y1s1/CFG1002";

import CS2030 from "./modules/y1s2/CS2030";
import CS2040 from "./modules/y1s2/CS2040";
import CS2100 from "./modules/y1s2/CS2100";
import GER1000 from "./modules/y1s2/GER1000";
import MA1101R from "./modules/y1s2/MA1101R";
import PC1221 from "./modules/y1s2/PC1221";

import CS2101 from "./modules/y2s1/CS2101";
import CS2103T from "./modules/y2s1/CS2103T";
import CS3241 from "./modules/y2s1/CS3241";
import ES2660 from "./modules/y2s1/ES2660";
import GEQ1000 from "./modules/y2s1/GEQ1000";
import ST2334 from "./modules/y2s1/ST2334";
import ALS1010 from "./modules/y2s2/ALS1010";
import CS2105 from "./modules/y2s2/CS2105";
import CS3243 from "./modules/y2s2/CS3243";
import CS3247 from "./modules/y2s2/CS3247";
import IS1103 from "./modules/y2s2/IS1103";

export const ModuleContents: SemesterItem[] = [
  // Y1S1

  {
    academicYear: "AY2018/19",
    year: 1,
    semester: 1,
    modules: [
      {
        title: "CS1101S Programming Methodology",
        type: "Core Module",
        isGradeFree: false,
        isSUable: true,
        content: CS1101S,
      },
      {
        title: "CS1231 Discrete Structures",
        type: "Core Module",
        isGradeFree: false,
        isSUable: true,
        content: CS1231,
      },
      {
        title: "MA1521 Calculus for Computing",
        type: "Mathematics and Sciences",
        isGradeFree: false,
        isSUable: true,
        content: MA1521,
      },
      {
        title: "GEH1030 Science of Music",
        type: "General Education",
        isGradeFree: false,
        isSUable: true,
        content: GEH1030,
      },
      {
        title: "GES1028 Singapore Society",
        type: "General Education",
        isGradeFree: false,
        isSUable: true,
        content: GES1028,
      },
      {
        title: "CFG1002 Career Catalyst",
        type: "Unrestricted Elective",
        isGradeFree: true,
        isSUable: false,
        content: CFG1002,
      },
    ],
  },

  // Y1S2

  {
    academicYear: "AY2018/19",
    year: 1,
    semester: 2,
    modules: [
      {
        title: "CS2030 Programming Methodology II",
        type: "Core Module",
        isGradeFree: false,
        isSUable: false,
        content: CS2030,
      },
      {
        title: "CS2040 Data Structures and Algorithms",
        type: "Core Module",
        isGradeFree: false,
        isSUable: false,
        content: CS2040,
      },
      {
        title: "CS2100 Computer Organization",
        type: "Core Module",
        isGradeFree: false,
        isSUable: false,
        content: CS2100,
      },
      {
        title: "GER1000 Quantitative Reasoning",
        type: "General Education",
        isGradeFree: false,
        isSUable: true,
        content: GER1000,
      },
      {
        title: "MA1101R Linear Algebra I",
        type: "Mathematics and Sciences",
        isGradeFree: false,
        isSUable: true,
        content: MA1101R,
      },
      {
        title: "PC1221 Fundamentals of Physics I",
        type: "Mathematics and Sciences",
        isGradeFree: false,
        isSUable: true,
        content: PC1221,
      },
    ],
  },

  // Y2S1

  {
    academicYear: "AY2019/20",
    year: 2,
    semester: 1,
    modules: [
      {
        title: "CS2101 Effective Communication for Computing Professionals",
        type: "IT Professionalism",
        isGradeFree: false,
        isSUable: false,
        content: CS2101,
      },
      {
        title: "CS2103T Software Engineering",
        type: "Core Module",
        isGradeFree: false,
        isSUable: false,
        content: CS2103T,
      },
      {
        title: "CS3241 Computer Graphics",
        type: "Computer Science Breadth and Depth",
        isGradeFree: false,
        isSUable: false,
        content: CS3241,
      },
      {
        title: "ES2660 Communicating in the Information Age",
        type: "IT Professionalism",
        isGradeFree: false,
        isSUable: true,
        content: ES2660,
      },
      {
        title: "GEQ1000 Asking Questions",
        type: "General Education",
        isGradeFree: true,
        isSUable: false,
        content: GEQ1000,
      },
      {
        title: "ST2334 Probability and Statistics",
        type: "Mathematics and Sciences",
        isGradeFree: false,
        isSUable: false,
        content: ST2334,
      },
    ],
  },

  // Y2S2

  {
    academicYear: "AY2019/20",
    year: 2,
    semester: 2,
    modules: [
      {
        title: "ALS1010 Learning to Learn Better",
        type: "Unrestricted Elective",
        isGradeFree: true,
        isSUable: false,
        content: ALS1010,
      },
      {
        title: "CS2105 Computer Networks",
        type: "Core Module",
        isGradeFree: false,
        isSUable: false,
        content: CS2105,
      },
      {
        title: "CS3243 Introduction to Artificial Intelligence",
        type: "Unrestricted Elective",
        isGradeFree: false,
        isSUable: false,
        content: CS3243,
      },
      {
        title: "CS3247 Game Development",
        type: "Computer Science Breadth and Depth",
        isGradeFree: false,
        isSUable: false,
        content: CS3247,
      },
      {
        title: "IS1103 Communicating in the Information Age",
        type: "IT Professionalism",
        isGradeFree: false,
        isSUable: true,
        content: IS1103,
      },
    ],
  },
];
