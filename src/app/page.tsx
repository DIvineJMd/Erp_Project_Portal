"use client";

import ProjectPage from "./components/Project/ProjectPage";
import SideChatBox from "./components/Project/chat/chatbox";
import Navbar from "./components/Project/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-backG">
      
      <Navbar></Navbar>

      <ProjectPage></ProjectPage>
    </div>
  );
}
