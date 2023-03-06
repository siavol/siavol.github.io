import './common.css';
import './Certificates.css';
import React from 'react';
import data from '../resume/resume-data.yaml';

function Certificates() {
  const items = data.certificates;

  return (
    <>
      <h2>Certificates</h2>
      <dl className="education">
        {items.map((item) => (
          <>
            <dt>
              <span>{item.name}</span>
            </dt>
            <dd>
              {item['valid-period'].from},
              <a href="https://www.scrum.org/certificates/907600">
                {item.href}
              </a>
            </dd>
          </>
        ))}
      </dl>
    </>
  );
}

export default Certificates;
