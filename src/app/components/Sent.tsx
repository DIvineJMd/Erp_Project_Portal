import type { NextPage } from "next";
import { useState } from "react";
import { TestimonialCard } from "./Card";

interface SentProps {
  numberOfProposals: number;
}

const Sent: NextPage<SentProps> = ({ numberOfProposals }) => {
  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <hr className="w-1/4 border-gray-300 mr-2" />
        {"YOU HAVE\u00A0"}
        <span className="text-teal-500">
          {numberOfProposals} new Project Proposals
        </span>
        <hr className="w-1/4 border-gray-300 ml-2" />
      </div>
      <TestimonialCard></TestimonialCard>
    </>
  );
};

export default Sent;
