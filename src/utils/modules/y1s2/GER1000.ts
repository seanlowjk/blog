import { ModuleContent } from "../../ModuleTypes";

const GER1000: ModuleContent = {
  taken: "AY2018/19 Semester 2",
  components: [
    {
      type: "Quizzes",
      weightage: 20,
    },
    {
      type: "Tutorial Attendance and Participation",
      weightage: 10,
    },
    {
      type: "Presentation",
      weightage: 35,
    },
    {
      type: "Finals",
      weightage: 35,
    },
  ],
  overview: [
    "As a Computer Science Student, I had an easier time with this module.",
    "For SoC students, this is a watered-down version of ST2334. You would be do a lot of work with regards to statistics and data collection. So if you have taken O-level Mathematics before, the content here should look familiar to you.",
    "Most students should get full marks for the quizzes as they are take-home and can be discussed online. However, the presentation is not trivial as you would need to prepare on a topic which looks at Confidence Intervals, data collection etc.",
    "Finals is Closed-Book and all MCQs. So do your best to attempt tutorials and practice papers to have a rough gauge on how well you understand the topics taught through the online lectures. Did I say online lectures? Yes i sure did!",
  ],

  workload: [
    "6/10",
    "Most of the time you in GER1000 you'll be spending on the presentation.",
  ],
  difficulty: [
    "4/10",
    "Steep Bell Curve is present due to everyone getting almost full marks for online quizzes and tutorial attendance.",
  ],
  grade: ["Expected: A-", "Actual: A"],
  link: "/modules/GER1000",
};

export default GER1000;
