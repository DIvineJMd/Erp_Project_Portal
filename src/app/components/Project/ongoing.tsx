import React from "react";
import { ProjectDetailCard } from "./Cards/projectcard";

interface ProjectDetailCardProps {
  startDate: string;
  peopleInProject: string[];
  progress: number;
  projectLink: string;
}

function OnGoingP() {
  const startDate = "2024-04-01";
  const peopleInProject = ["John Doe", "Jane Smith", "Alex Johnson"];
  const progress = 70;
  const projectLink = "github.com";

  return (
    <div className="">
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

export default OnGoingP;
