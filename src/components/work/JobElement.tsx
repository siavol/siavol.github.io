import './JobElement.css';
import React from 'react';
import { Job } from '../resume/resume-data.yaml';

type JobElementProps = { job: Job };

function JobElement({ job }: JobElementProps) {
  return (
    <div>
      <h3>
        <span className="company">{job.company}</span>,
        <span className="location">{job.location}</span> —
        <span className="role">{job.role}</span>
      </h3>
      <small>
        {job['time-period'].from} - {job['time-period'].to}
      </small>
    </div>
  );
}

export default JobElement;
