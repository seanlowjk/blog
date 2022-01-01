export type SemesterItem = {
  academicYear: string;
  year: number;
  semester: number;
  modules: ModuleItem[];
};

export type ModuleItem = {
  title: string;
  type: string;
  isGradeFree: boolean;
  isSUable: boolean;
  content: string;
  link: string;
};

export type GradingComponent = {
  type: string;
  weightage?: number;
};

export type ModuleContent = {
  taken: string;
  components: GradingComponent[];
  overview: string[];
  workload: string[];
  difficulty: string[];
  grade: string[];
  link: string;
};
