"use client";
import { useState } from "react";
import Content from "./components/Sent";
import { FaBlogger } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import Navbar from "./components/navbar";
import Sent from "./components/Sent";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clicked, setClicked] = useState(1);
  const menuItems = [
    { name: "ONGOING PROJECTS", icon: <FaBlogger />, count: 5 },
    { name: "INVITATIONS", icon: <FaRegCircleDot />, count: 2 },
    { name: "PAST PROJECTS", icon: <FaArchive />, count: 8 },
    { name: "GROUP", icon: <FaUserGroup />, count: 6 },
  ];

  return (
    <div className="min-h-screen bg-backG">
      <Navbar />

      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[0.4fr,auto_1fr] place-content-stretchf gap-4 overflow-hidden px-4 md:px-20 py-10">
        <div className="md:order-first hidden md:block">
          <button className="h-[26%] rounded bg-white">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-1 py-2 ${
                  activeIndex === index ? "bg" : ""
                }`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                <div className="flex items-center relative">
                  {activeIndex === index && (
                    <div className="absolute top-0 left-0 h-full bg-teal-500 w-2 z-10" />
                  )}
                  <div className="ml-5">{item.icon}</div>
                  <span
                    className={`ml-2 ${
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
        <Sent ></Sent>
      </div>
    </div>
  );
}
