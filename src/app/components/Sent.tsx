import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import ReceivedRequest from "./recivedRequest";


const Sent: NextPage = () => {
  const [clicked, setClicked] = useState(1);

  return (
    <div className="">
      <div className="rounded w-full md:w-full bg-white px-4 relative max-h-screen overflow-y-auto">
        <div className="flex gap-2">
          <Button
            placeholder=""
            variant="gradient"
            color={clicked === 1 ? "teal" : "white"}
            className={clicked === 1 ? "w-full md:w-48 h-12" : "w-full md:w-40 h-10"}
            onClick={() => setClicked(1)}
          >
            Sent
          </Button>
          <Button
            placeholder=""
            variant="gradient"
            color={clicked === 2 ? "teal" : "white"}
            className={clicked === 2 ? "w-full md:w-48 h-12" : "w-full md:w-40 h-10"}
            onClick={() => setClicked(2)}
          >
            Received
          </Button>
        </div>
        <div className="px-2">
          {clicked === 2 && (
            <div className="py-5">
              <ReceivedRequest numberOfProposals={5} /> {/* Remove prop */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sent;
