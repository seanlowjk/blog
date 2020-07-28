import { ModuleContent } from "../../ModuleTypes";

const CS2040: ModuleContent = {
  taken: "AY2018/19 Semester 2",
  components: [
    {
      type: "Sit-In Labs",
      weightage: 18,
    },
    {
      type: "Take-Home Labs",
      weightage: 4,
    },
    {
      type: "Visualgo Quiz",
      weightage: 6,
    },
    {
      type: "Tutorial Attendance and Participation",
      weightage: 5,
    },
    {
      type: "Practical Examination",
      weightage: 15,
    },
    {
      type: "Midterms",
      weightage: 12,
    },
    {
      type: "Finals",
      weightage: 40,
    },
  ],
  overview: [
    "It is important that you get your CS1231 fundamentals right before you take this module.",
    "This module has quite heavy emphasis on Data Structures and Algorithms, especially Graph Algorithms in the second half of the semester. If you are still unsure of Time Complexity Analysis, it would be good to brush this up before taking this module.",
    "The visualgo quizzes are really helpful in helping you to revise the data structures covered in CS2040 and visualgo is a pretty good platform for revision purposes. I suggest that students take a look at the Linked Lists and Sorting sections before the semester starts.",
    "Overall, the practical assessments are do-able if you have sufficient practice using problems provided in your Take-Home Labs. However, the written assessments might be quite challenging as you have to implement or modify certain existing algorithms that you have encountered in this module.",
    "I would recommend taking CS1231 before CS2040. Most importantly, I would recommend taking CS2040S under a good professor such as Prof Seth.",
  ],
  workload: ["7/10", "The Take-Home Labs might take up quite a bit of time."],
  difficulty: [
    "8/10",
    "The content is non-trivial despite it being pretty straightforwards. Be careful not to just merely memorize the algorithms covered but to understand and apply these algorithms.",
  ],
  grade: ["Expected: B+", "Actual: B"],
  link: "/blog/modules/CS2040",
};

export default CS2040;
