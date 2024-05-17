import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import Trips from "@/components/Trips";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" ">
        <Hero />

       
          <div className="mt-[100px] sm:mt-[200px]">
            <Destinations />
          </div>
          <div className="mt-[100px] sm:mt-[200px]">
            <Banner/> 
          </div>
          <div className="mt-[100px] sm:mt-[200px]">
            <Plan/> 
          </div>
          <div className="mt-[100px] sm:mt-[200px] max-w-[1200px] m-auto">
            <h1 className="text-md font-semibold mb-14 text-center sm:text-left">Organized Trips</h1>

            <div className="flex items-center sm:items-start justify-between gap-10 flex-col sm:flex-row">
            <Trips 
            text={"Amsterdam"}
            description={"Experience the charm of the city with our curated trip at an unbeatable price."
          }
            price={"$1295"}
            days={"10 days"}
            image={'/amsterdam.jpg'}
            /> 
             <Trips 
            text={"Singapore"}
            description={"Immerse yourself in the modern marvels with our exclusive trip offer."


          }
            price={"$1200"}
            days={"7 days"}
            image={'/singapore.jpg'}
            /> 
             <Trips 
            text={"Switzerland"}
            description={"Unwind amidst breathtaking landscapes with our tailored trip package."}
            price={"$1500"}
            days={"12 days"}
            image={'/switzerland.jpg'}
            /> 
            </div>
            
          </div>
          <div className="mt-[100px] sm:mt-[200px]">
            <Discover/> 
          </div>
      </div>
    </>
  );
}
