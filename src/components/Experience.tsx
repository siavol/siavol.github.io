import './common.css';
import React from 'react';
import data from '../resume/resume-data.yaml';
import ExperienceItem from './work/ExperienceItem';

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      {data.experience.map((job, i) => (
        <ExperienceItem key={`job-${i}`} job={job} />
      ))}
    </div>
  );
}

export default Experience;
