import './ProjectItem.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Project } from '../resume/resume-data.yaml';

type ProjectItemProps = { project: Project };

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <>
      <div className="project">
        <span className="sub-title">Project:</span>
        <span>{project.name}</span>
      </div>
      <div className="description">
        <ReactMarkdown>{project.description}</ReactMarkdown>
      </div>
    </>
  );
}

export default ProjectItem;
