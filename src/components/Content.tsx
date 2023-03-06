import React from 'react';
import Certificates from './education/Certificates';
import Courses from './education/Courses';
import Education from './education/Education';
import Experience from './Experience';
import Languages from './Languages';
import Skills from './Skills';

function Content() {
  return (
    <div className="row">
      <div className="col-sm-4 order-sm-last">
        <Skills />
        <Languages />
      </div>

      <div className="col-sm-8">
        <Experience />
        <Certificates />
        <Courses />
        <Education />
      </div>
    </div>
  );
}

export default Content;
