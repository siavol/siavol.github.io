declare module '*.yaml' {
  export type ResumeData = {
    name: string;
    description: {
      short: string;
    };
    skills: ResumeSkill[];
  };

  export type ResumeSkill = {
    name: string;
    kind: string;
  };

  const content: ResumeData;

  export default content;
}
