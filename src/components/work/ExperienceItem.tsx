import './ExperienceItem.css';
import React from 'react';
import { Job } from '../resume/resume-data.yaml';
import { JobContext } from './JobContext';
import Position from './Position';
import JobTimePeriod from './JobTimePeriod';

type JobElementProps = { job: Job };

function ExperienceItem({ job }: JobElementProps) {
  return (
    <div>
      <JobContext.Provider value={job}>
        <h3>
          <Position />
        </h3>
        <JobTimePeriod></JobTimePeriod>
      </JobContext.Provider>
    </div>
  );
}

export default ExperienceItem;
