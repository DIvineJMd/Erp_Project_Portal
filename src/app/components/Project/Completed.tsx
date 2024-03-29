import React from "react";
import { ProjectDetailCard } from "./Cards/projectcard";

interface ProjectDetailCardProps {
  startDate: string;
  peopleInProject: string[];
  progress: number;
  projectLink: string;
}

function CompletedP() {
  const startDate = "2024-04-01";
  const peopleInProject = ["John Doe", "Jane Smith", "Alex Johnson"];
  const progress = 100;
  const projectLink = "github.com";

  return (
    <div className="rounded w-full max-w-[70rem] bg-white px-4 relative max-h-screen overflow-y-auto">
      {/* Other content */}
      <ProjectDetailCard
        startDate={startDate}
        peopleInProject={peopleInProject}
        progress={progress}
        projectLink={projectLink}
      />
      <ProjectDetailCard
        startDate={startDate}
        peopleInProject={peopleInProject}
        progress={progress}
        projectLink={projectLink}
      />
    </div>
  );
}

export default CompletedP;
