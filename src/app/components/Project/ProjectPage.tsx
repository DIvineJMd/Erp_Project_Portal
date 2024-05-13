"use client";
import React, { useState } from "react";
import { FaBlogger } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Sent from "./Sent";
import OnGoingP from "./ongoing";
import CompletedP from "./Completed"
function
  ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(1);
  const menuItems = [
    { name: "Ongoing", icon: <FaBlogger />, count: 5 },
    { name: "Invitation", icon: <FaRegCircleDot />, count: 2 },
    { name: "Completed", icon: <FaArchive />, count: 8 },
    { name: "Group", icon: <FaUserGroup />, count: 6 },
  ];

  return (
    <div>
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[0.4fr,auto_1fr] place-content-stretchf gap-4 overflow-hidden px-4 md:px-20 py-10 relative">
        <div className="md:order-first hidden md:block">
          <button className="h-auto rounded bg-black">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-1 py-2 ${
                  activeIndex === index ? "bg" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center relative">
                  {activeIndex === index && (
                    <div className="absolute top-0 left-0 h-full bg-teal-500 w-2 z-10" />
                  )}
                  <div className="ml-6">{item.icon}</div>
                  <span
                    className={`ml-5 ${
                      activeIndex === index ? "text-gray-400" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                <span className="px-5">{item.count}</span>
              </div>
            ))}
          </button>
        </div>
        {activeIndex === 0 && <OnGoingP />}
        {activeIndex === 1 && <Sent />}
        {activeIndex == 2 && <CompletedP />}
      </div>
    </div>
  );
}

export default ProjectPage;
