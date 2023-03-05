import './common.css';
import React from 'react';
import data from '../resume/resume-data.yaml';

function Skills() {
  const skillGroups = data.skills.reduce((acc, skill) => {
    if (!acc[skill.kind]) {
      acc[skill.kind] = [];
    }
    acc[skill.kind].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);
  const skillItems = Object.entries(skillGroups).map(([kind, skills]) => (
    <li key={kind}>{skills.join(', ')}</li>
  ));

  return (
    <div>
      <h2>Skills</h2>
      <ul className="list-unstyled">{skillItems}</ul>
    </div>
  );
}

export default Skills;
