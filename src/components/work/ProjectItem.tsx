import './ProjectItem.css';
import React from 'react';
import { Project } from '../resume/resume-data.yaml';

type ProjectItemProps = { project: Project };

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <>
      <div className="project">
        <span className="sub-title">Project:</span>
        <span>{project.name}</span>
      </div>
      <div className="description">{project.description}</div>
    </>
  );
}

export default ProjectItem;
