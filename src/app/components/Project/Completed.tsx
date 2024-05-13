import React from "react";
import { ProjectDetailCard } from "./Cards/projectcard";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

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
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const getProjects = async () => {
    try {
      if (!user) {
        console.log("empty_user");
        return;
      }
      const response = await axios.post("/api/completed_proj", {
        email: user.email,
      });

      setProjects(response.data.projects);
    } catch (error) {
      console.error("Error getting cart:", error);
    }
  };

  useEffect(() => {
    const handleProjects = async () => {
      try {
        // Call the getUser API to check if the user is logged in
        const response = await axios.get(`/api/users/me`);
        if (response) {
          setUser(response.data.data);
        } else {
          // If user is not logged in, redirect to the login page
          router.push("/sigin"); // Replace "/login" with your actual login page URL
        }
      } catch (error) {
        console.log(error);
      } // Fetch cart items when component mounts
    };
    handleProjects();
  }, []);

  useEffect(() => {
    console.log("user : ", user);
    if (user) {
      getProjects();
    }
  }, [user]);

  return (
    <div className="rounded w-full max-w-[70rem] bg-white px-4 relative max-h-screen overflow-y-auto">
      {/* Other content */}
      {projects.length === 0 ? (
        <div className=" w-full">
          <CircularProgress />
        </div>
      ) : (
        // Material-UI circular progress component as loader
        projects.map((project) => {
          const peopleEmails = project.team.map((member) => member.email);
          return (
            <ProjectDetailCard
              key={project._id} // Remember to add a unique key when mapping over elements in React
              projectName={project.project_name}
              startDate={project.start_date}
              peopleInProject={peopleEmails}
              progress={project.progress}
              projectLink={projectLink}
            />
          );
        })
      )}
    </div>
  );
}

export default CompletedP;
