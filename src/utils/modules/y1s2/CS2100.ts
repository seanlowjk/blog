import { ModuleContent } from "../../ModuleTypes";

const CS2100: ModuleContent = {
  taken: "AY2018/19 Semester 2",
  components: [
    {
      type: "Tutorial Attendance",
      weightage: 5,
    },
    {
      type: "Assignments",
      weightage: 12,
    },
    {
      type: "Labs",
      weightage: 13,
    },
    {
      type: "Midterms",
      weightage: 20,
    },
    {
      type: "Finals",
      weightage: 50,
    },
  ],
  overview: [
    "If there was a CS module which would have killed me, this was the module that would have done so.",
    "You would mainly learn about Assembly Language using C and MIPS, processing and pipelining. Quite a bit of boolean logic is needed here so do make sure you have learnt your boolean logic well in CS1231!",
    "It was a very interesting module, but it was a deadly module too as the written examinations were very challenging in my eyes. Content was manageable but Prof. Aaron would never fail to kill you during his written papers! All I can say is that you should at least attempt the assignments yourself and seek help early if possible. One regret I have was not understanding Assembly Language properly which snowballed into the later topics covered in CS2100.",
    "Overall, it is an interesting module but difficult module in terms of it being a hassle and topics being too rushed at certain points in the module.",
  ],

  workload: [
    "8/10",
    "Labs and Assignments are quite difficult. It will take a while before you learn how to apply the concepts learnt into these labs and assignments. Do attend lectures frequently!",
  ],
  difficulty: [
    "8/10",
    "There is a lot of content to cover! Do not leave CS2100 content to the last minute!",
  ],
  grade: ["Expected: B+", "Actual: B-"],
  link: "/blog/modules/CS2100",
};

export default CS2100;
