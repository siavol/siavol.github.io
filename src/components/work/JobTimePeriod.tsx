import React, { useContext } from 'react';
import { JobContext } from './JobContext';

function JobTimePeriod() {
  const job = useContext(JobContext);

  return (
    <small>
      {job['time-period'].from} - {job['time-period'].to}
    </small>
  );
}

export default JobTimePeriod;
