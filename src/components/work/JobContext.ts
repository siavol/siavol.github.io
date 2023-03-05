import { createContext } from 'react';
import { Job } from '../resume/resume-data.yaml';

export const JobContext = createContext<Job>({
  company: 'fake',
  location: 'nowhere',
  role: 'nil',
  'time-period': {
    from: '1900',
    to: '2000',
  },
});
