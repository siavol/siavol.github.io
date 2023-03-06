import './EducationList.css';
import React from 'react';
import { EducationData } from '../../resume/resume-data.yaml';

type EducationListProps = { items: EducationData[] };
type EducationItemProps = { item: EducationData };

function EducationList({ items }: EducationListProps) {
  return (
    <dl className="education">
      {items.map((item) => (
        <EducationItem key={item.name} item={item} />
      ))}
    </dl>
  );
}

function EducationItem({ item }: EducationItemProps) {
  const period = item['valid-period'] ? (
    <>{item['valid-period'].from},</>
  ) : null;
  const source = item.source ? (
    <>
      &nbsp; - <span>{item.source}</span>
    </>
  ) : null;

  return (
    <>
      <dt>
        <span>{item.name}</span>
        {source}
      </dt>
      <dd>
        {period}
        <a href={item.href}>{item.href}</a>
      </dd>
    </>
  );
}

export default EducationList;
