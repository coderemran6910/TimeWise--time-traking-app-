import { Button } from "flowbite-react";

const Hero = () => {
    return (
        <div className="h-[95vh] flex items-center justify-center  bg-[#6FD943]">
            <div className="flex items-center justify-between w-[90%]">

                {/* Left Side  */}
               <div className=" flex flex-col justify-center space-y-4">
               <h1 className="text-4xl font-bold text-black">
                   <span className="text-white font-black uppercase">TimeWise</span> - Time Tracking Tool
                </h1>
                <p>Use these awesome forms to login or create new account in your project for free.</p>
                <div className="flex gap-4">
                <Button color="black" className="mt-4 bg-transparent border-2 ">Get Started</Button>
                <Button color="gray" className="mt-4">Learn More</Button>
                </div>
               </div>

               {/* Right Side */}
               <div className=" flex-nowrap rounded-2x ">
               <video src="./hero.mp4" autoPlay loop muted className="w-full h-[80vh] rounded-2xl   "></video>
               </div>
            </div>
        </div>
    );
};

export default Hero;