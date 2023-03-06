declare module '*.yaml' {
  export type ResumeData = {
    name: string;
    description: {
      short: string;
    };
    skills: ResumeSkillData[];
    languages: string[];
    experience: JobData[];
    certificates: EducationData[];
    courses: EducationData[];
    education: EducationData[];
  };

  export type ResumeSkillData = {
    name: string;
    kind: string;
  };

  export type JobData = {
    company: string;
    location: string;
    role: string;
    'time-period': TimePeriod;
    projects: ProjectData[];
  };

  export type TimePeriod = {
    from: string;
    to?: string;
  };

  export type ProjectData = {
    name: string;
    href?: string;
    description: string;
    responsibilities?: string[];
  };

  export type EducationData = {
    name: string;
    source?: string;
    href: string;
    'valid-period'?: TimePeriod;
  };

  const content: ResumeData;

  export default content;
}
