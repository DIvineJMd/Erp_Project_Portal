import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

interface ProjectDetailCardProps {
  startDate: string;
  peopleInProject: string[];
  progress: number;
  projectLink: string;
}

export function ProjectDetailCard({
  startDate,
  peopleInProject,
  progress,
  projectLink,
}: ProjectDetailCardProps) {
  return (
    <Card
      placeholder=""
      color="transparent"
      shadow={true}
      className="w-full max-w-[70rem]"
    >
      <CardHeader
        placeholder=""
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8 p-5"
      >
        <Avatar
          placeholder=""
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="Project Avatar"
        />

        <CardBody
          placeholder=""
          className="p-5 flex flex-col lg:flex-row lg:flex-nowrap"
        >
          <div className="flex flex-col flex-grow gap-0.5">
            <div className="flex items-center justify-between">
              <Typography placeholder="" variant="h5" color="blue-gray">
                Project Name
              </Typography>
              <div className="flex items-center gap-0"></div>
            </div>
            <Typography placeholder="" color="blue-gray">
              Start Date: {startDate}
            </Typography>
            <Typography placeholder="" color="blue-gray">
              People in Project: {peopleInProject.join(", ")}
            </Typography>
            <Typography placeholder="" color="blue-gray">
              GitHub/Project Link:{" "}
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {projectLink}
              </a>
            </Typography>
          </div>
          <div className="flex justify-end p-10">
            <div
              className={`border p-5 border-teal-500  ${
                progress === 100 ? "bg-teal-500 text-white" : ""
              } rounded-md p-2 mx-5`}
            >
              Progress: {progress}%
            </div>
          </div>
        </CardBody>
      </CardHeader>
    </Card>
  );
}
