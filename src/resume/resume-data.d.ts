declare module '*.yaml' {
  export type ResumeData = {
    name: string;
    description: {
      short: string;
    };
    skills: ResumeSkill[];
    languages: string[];
    experience: Job[];
  };

  export type ResumeSkill = {
    name: string;
    kind: string;
  };

  export type Job = {
    company: string;
    location: string;
    role: string;
    'time-period': {
      from: string;
      to: string;
    };
  };

  const content: ResumeData;

  export default content;
}
