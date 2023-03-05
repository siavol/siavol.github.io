import React, { useContext } from 'react';
import { JobContext } from './JobContext';

function Position() {
  const job = useContext(JobContext);

  return (
    <>
      <span className="company">{job.company}</span>,
      <span className="location">{job.location}</span> —
      <span className="role">{job.role}</span>
    </>
  );
}

export default Position;
