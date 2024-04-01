"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import SideChatBox from "./chat/chatbox";

interface NavItemProps {
  icon: string;
  text: string;
  link?: string;
  handleClick?: () => void;
}

const Navbar: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-white fixed z-50 relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center mr-20">
            <span className="text-2xl font-semibold text-teal-500">Kyoso</span>
            <div className="border-l h-11 mx-3"></div>
            <div className="hidden lg:flex lg:items-center lg:w-auto ml-10 space-x-10">
              <NavItem icon="/feed.png" text="FEED" link="/" />
              <NavItem
                icon="/case.svg"
                text="PROJECT"
                link="./components/Project"
              />
              <NavItem
                icon="/chat.svg"
                text="CHAT"
                handleClick={handleChatClick}
              />
              <NavItem icon="/bell.svg" text="NOTIFICATIONS" link="/" />
            </div>
            <div className="flex lg:hidden lg:items-center space-x-3">
              <NavItem icon="/feed.png" text="" link="/" />
              <NavItem icon="/case.svg" text="" link="/" />
              <NavItem icon="/chat.svg" text="" link="/" />
              <NavItem icon="/bell.svg" text="" link="/" />
            </div>
          </div>

          <div className="flex items-center relative ">
            <div className="flex relative hidden md:block   mr-3 ml-5">
              <input
                type="text"
                className="pl-10 pr-4 py-1 rounded-lg border-2 border-gray-300"
                placeholder="Search"
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
            </div>
            <button className="md:hidden ml-0 mr-3 px-2 py-1.5  border rounded text-gray-600 border-teal-400 hover:text-teal-500 hover:border-black focus:outline-none focus:ring-2 focus:ring-teal-500">
              <AiOutlineSearch />
            </button>
            <div className="flex flex-col items-center">
              <a
                href="#"
                className="hidden lg:flex relative w-7 h-7 hover:text-gray-500 text-sm"
              >
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-full bg-gainsboro-200 box-border border-[1px] border-solid border-gray-300" />
                <img
                  className="absolute h-[100%] w-[100%] rounded-full max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image2.JPEG"
                />
                <span className="py-6 px-1">Me</span>{" "}
              </a>
            </div>

            <button className="ml-2 w-50 h-50 px-1 py-1 border rounded text-gray-600 border-teal-400 hover:text-teal-500 hover:border-black focus:outline-none focus:ring-2 focus:ring-teal-500">
              <BsFillGridFill className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {isChatOpen && (
        <SideChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      )}
    </>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon, text, link, handleClick }) => {
  if (!link) {
    return (
      <div
        onClick={handleClick}
        className="text-black text-sm hover:text-gray-600 cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <img className="h-5 w-5" src={icon} alt={`${text} Logo`} />
          {text}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link}
      className="text-black text-sm hover:text-gray-600 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center">
        <img className="h-5 w-5" src={icon} alt={`${text} Logo`} />
        {text}
      </div>
    </Link>
  );
};

export default Navbar;
