import './common.css';
import React from 'react';
import data from '../resume/resume-data.yaml';
import JobElement from './work/JobElement';

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      {data.experience.map((job, i) => (
        <JobElement key={`job-${i}`} job={job} />
      ))}
    </div>
  );
}

export default Experience;
