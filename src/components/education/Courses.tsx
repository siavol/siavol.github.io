import '../common.css';
import React from 'react';
import data from '../../resume/resume-data.yaml';
import EducationList from './EducationList';

function Courses() {
  return (
    <>
      <h2>Courses</h2>
      <EducationList items={data.courses} />
    </>
  );
}

export default Courses;
