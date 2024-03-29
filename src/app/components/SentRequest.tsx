import React from "react";
import { SentTestimonialCard } from "./SentCard";

interface SentRequestProps {
  numberOfProposals: number; // Define prop type
}

function SentRequest({ numberOfProposals }: SentRequestProps) {
  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <hr className="w-1/4 border-gray-300 mr-2" />
        {"YOU HAVE Sent\u00A0"}
        <span className="text-teal-500">
          {numberOfProposals}  Project Proposals
        </span>
        <hr className="w-1/4 border-gray-300 ml-2" />{" "}
      </div>

      <div className="flex justify-center mt-4 flex-col">
              <SentTestimonialCard isPending={true}></SentTestimonialCard>
              <SentTestimonialCard isPending={false}></SentTestimonialCard>

      </div>
    </>
  );
}

export default SentRequest;
