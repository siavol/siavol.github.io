import './ProjectItem.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ProjectData } from '../resume/resume-data.yaml';
import Responsibilities from './Responsibilities';
import ProjectName from './ProjectName';

type ProjectItemProps = { project: ProjectData };

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <>
      <ProjectName project={project} />
      <div className="description">
        <ReactMarkdown>{project.description}</ReactMarkdown>
      </div>
      <Responsibilities items={project.responsibilities} />
    </>
  );
}

export default ProjectItem;
