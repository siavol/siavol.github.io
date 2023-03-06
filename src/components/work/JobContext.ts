import { createContext } from 'react';
import { JobData } from '../resume/resume-data.yaml';

export const JobContext = createContext<JobData>({
  company: 'fake',
  location: 'nowhere',
  role: 'nil',
  'time-period': {
    from: '1900',
    to: '2000',
  },
  projects: [],
});
