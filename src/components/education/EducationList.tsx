import './EducationList.css';
import React from 'react';
import { EducationData } from '../../resume/resume-data.yaml';

type EducationListProps = { items: EducationData[] };

function EducationList({ items }: EducationListProps) {
  return (
    <dl className="education">
      {items.map((item) => (
        <>
          <dt>
            <span>{item.name}</span>
          </dt>
          <dd>
            {item['valid-period'].from},
            <a href="https://www.scrum.org/certificates/907600">{item.href}</a>
          </dd>
        </>
      ))}
    </dl>
  );
}

export default EducationList;
