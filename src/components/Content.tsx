import React from 'react';
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
      </div>
    </div>
  );
}

export default Content;
