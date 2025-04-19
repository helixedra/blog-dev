import React from "react";
import { RiLoader4Line } from "react-icons/ri";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen -mt-16">
      <div className="animate-spin">
        <RiLoader4Line size={48} />
      </div>
    </div>
  );
}
