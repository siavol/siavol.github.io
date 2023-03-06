import '../common.css';
import React from 'react';
import data from '../../resume/resume-data.yaml';
import EducationList from './EducationList';

function Certificates() {
  return (
    <>
      <h2>Certificates</h2>
      <EducationList items={data.certificates} />
    </>
  );
}

export default Certificates;
