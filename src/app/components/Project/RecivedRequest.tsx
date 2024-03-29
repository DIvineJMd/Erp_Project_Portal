import React from "react";
import { TestimonialCard } from "./Cards/Card";

interface ReceivedRequestProps {
  numberOfProposals: number; // Define prop type
}

function ReceivedRequest({ numberOfProposals }: ReceivedRequestProps) {
  // Accept prop as an argument
  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <hr className="w-1/4 border-gray-300 mr-2" />
        {"YOU HAVE\u00A0"}
        <span className="text-teal-500">
          {numberOfProposals} new Project Proposals
        </span>
        <hr className="w-1/4 border-gray-300 ml-2" />{" "}
      </div>

      <div className="flex justify-center mt-4 flex-col">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </>
  );
}

export default ReceivedRequest;
