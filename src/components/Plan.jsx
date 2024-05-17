import Image from "next/image";
import React from "react";

const Plan = () => {
  return (
    <div className="relative flex items-center justify-center flex-col sm:flex-row p-3 gap-20" id="plan">
      <h1 className="text-center font-semibold text-md sm:text-lg  relative sm:absolute top-24 w-full sm:max-w-[500px] m-auto">
        Plan Your Next Adventure With Us
      </h1>

      <Image src={"/trip.png"} height={1000} width={1200} />
    </div>
  );
};

export default Plan;
