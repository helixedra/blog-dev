import React from "react";
import Spinner from "@/components/shared/Spinner";

export default function loading() {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center">
      <Spinner />
    </div>
  );
}
