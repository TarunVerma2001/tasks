import Header from "./header";

export default function Hero() {
  return (
    <div className="px-[44px]  py-[24px] pt-[100px]  pb-[100px]   bg-[#1c1740] overflow-hidden  relative  flex flex-col space-y-4 lg:space-y-16 items-center">
      <div className="absolute lg:flex w-full lg:px-8 top-0 lg:top-8">
        <Header />
      </div>
      <div className="absolute animate-spin-slow ">
        <img src="/bg1.svg" alt="" className="opacity-20 scale-150" />
      </div>
      <div className="flex flex-col space-y-6 items-center">
        <div className="text-center flex flex-col space-y-4">
          <h1 className="lg:text-4xl text-2xl lg:text-[46px] text-white">
            Effortlessly Planning with{" "}
            <span className=" text-[#bd6efa]">AI.</span>{" "}
          </h1>
          <h1 className="lg:text-4xl text-2xl lg:text-[46px] text-white">
            <span className="text-[#bd6efa]">Speak </span>
            your Task into Existence
          </h1>
        </div>
        <div className="flex flex-col text-center text-[#d4d4d6] lg:text-[19px] text-sm items-center">
          <h1>
            Whether you're at home, in the office, or on the go, our
            voice-activated system ensures that your to-do
          </h1>
          <h2>list is always up to date and easily accessible.</h2>
        </div>
        <div className="cta lg:px-8 lg:py-4 px-4 py-2 cursor-pointer">
          <h1 className="text-lg lg:text-2xl text-white">Get Started</h1>
        </div>
      </div>
      <div className="w-full z-30  flex justify-center items-baseline ">
        <img src="/laptopsBig.svg" className=" z-20" alt="" />
      </div>
      <div className="h-[150px] w-full bg-background absolute bottom-0"></div>
      <div className="  w-full text-[#5b5b5b] absolute scale-105  bottom-32 py-16 flex flex-col items-center text-2xl">
        <div className="w-full absolute  -bottom-10">
          <img src="/curve.svg" className="w-full" alt="" />
        </div>

        <div className="w-full absolute  -left-2 -bottom-10">
          <img src="/curve3.svg" className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}
