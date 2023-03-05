import './common.css';
import React from 'react';
import data from '../resume/resume-data.yaml';

function Languages() {
  return (
    <div>
      <h2>Languages</h2>
      <ul className="list-inline">
        {data.languages.map((lang) => (
          <li key={lang} className="list-inline-item">
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Languages;
