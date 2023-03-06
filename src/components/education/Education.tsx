import '../common.css';
import React from 'react';
import data from '../../resume/resume-data.yaml';
import EducationList from './EducationList';

function Education() {
  return (
    <>
      <h2>Education</h2>
      <EducationList items={data.education} />
    </>
  );
}

export default Education;
