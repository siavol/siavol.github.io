import React from 'react';
import { ProjectData } from '../resume/resume-data.yaml';

type ProjectNameProps = { project: ProjectData };

function ProjectName({ project }: ProjectNameProps) {
  const projectName = project.href ? (
    <a href="https://www.sanoma.fi/">{project.name}</a>
  ) : (
    project.name
  );

  return (
    <div className="project">
      <span className="sub-title">Project:</span>
      <span>{projectName}</span>
    </div>
  );
}

export default ProjectName;
