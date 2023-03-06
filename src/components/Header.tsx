import './Header.css';
import data from '../resume/resume-data.yaml';
import React from 'react';

function Header() {
  return (
    <div className="title row justify-content-center gy-5">
      <div className="col-sm-8">
        <h1 className="display-3">{data.name}</h1>
        <small className="text-muted">{data.description.short}</small>
      </div>
      {/* <div className="col-sm-1 align-self-end">
            <a className="btn btn-sm btn-outline-primary" href="./Ilya-Shestakov-Resume.pdf" target="_blank" rel="noopener noreferrer">.pdf</a>
        </div> */}
    </div>
  );
}

export default Header;
