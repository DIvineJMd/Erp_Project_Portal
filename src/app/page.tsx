"use client";

import Navbar from "./components/Project/navbar";
import ProjectPage from "./components/Project/ProjectPage";
import Sent from "./components/Project/Sent";

export default function Home() {
  return (
    <div className="min-h-screen bg-backG">
      <Navbar />
      <ProjectPage></ProjectPage>
    </div>
  );
}
