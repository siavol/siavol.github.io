import React, { useContext } from 'react';
import { JobContext } from './JobContext';

function Position() {
  const job = useContext(JobContext);

  return (
    <>
      <span className="company">{job.company}</span>,&nbsp;
      <span className="location">{job.location}</span> —&nbsp;
      <span className="role">{job.role}</span>
    </>
  );
}

export default Position;
