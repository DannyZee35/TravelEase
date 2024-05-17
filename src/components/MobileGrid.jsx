import Image from "next/image";
import React from "react";

const MobileGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="col-span-1">
          <Image
            src={"/amsterdam.jpg"}
            height={400}
            width={400}
            alt=""
            className="h-[300px] w-full rounded-xl"
          />
          <h1 className="text-nm font-semibold mt-5 px-5">Amsterdam</h1>
          <p className="text-sm mt-5 px-5"> Experience the historic charm and vibrant culture of the Netherlands amidst its enchanting canals.</p>
        </div>
        <div>
          <Image
            src={"/singapore.jpg"}
            height={400}
            width={400}
            alt=""
            className="rounded-xl h-[300px] w-full "
          />
          <h1 className="text-nm font-semibold mt-5 px-5">Singapore</h1>
          <p className="text-sm mt-5 px-5">Discover the fusion of tradition and innovation in the modern marvels and diverse culinary scene of Singapore.</p>
        </div>
        <div>
          <Image
            src={"/switzerland.jpg"}
            height={400}
            width={400}
            alt=""
            className="rounded-xl h-[300px] w-full"
          />
          <h1 className="text-nm font-semibold mt-5 px-5">Switzerland</h1>
          <p className="text-sm mt-5 px-5">Journey through the stunning landscapes of Switzerland, where snow-capped peaks and serene lakes offer unforgettable experiences.</p>
        </div>
        <div>
          <Image
            src={"/norway.jpg"}
            height={400}
            width={400}
            alt=""
            className="rounded-xl h-[300px] w-full"
          />

          <h1 className="text-nm font-semibold mt-5 px-5">Norway</h1>
          <p className="text-sm mt-5 px-5">Delve into the majestic beauty of Norway&apos;s fjords, mountains, and northern lights, where nature&apos;s wonders await at every turn.</p>
        </div>
      </div>
    </div>
  );
};

export default MobileGrid;
