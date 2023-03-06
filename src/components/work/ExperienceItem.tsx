import './ExperienceItem.css';
import React from 'react';
import { JobData } from '../resume/resume-data.yaml';
import { JobContext } from './JobContext';
import Position from './Position';
import JobTimePeriod from './JobTimePeriod';
import ProjectItem from './ProjectItem';

type JobElementProps = { job: JobData };

function ExperienceItem({ job }: JobElementProps) {
  return (
    <div>
      <JobContext.Provider value={job}>
        <h3>
          <Position />
        </h3>
        <JobTimePeriod></JobTimePeriod>
        {job.projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </JobContext.Provider>
    </div>
  );
}

export default ExperienceItem;
