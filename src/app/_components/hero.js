"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./header";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Transform the icon's position based on the scroll progress
  const getIconYValue = () => {
    if (typeof window !== "undefined") {
      return window.innerHeight > 1200
        ? window.innerHeight - 250
        : window.innerHeight - 100;
    }
    return 0; // Default value for server-side rendering
  };

  const iconY = useTransform(scrollYProgress, [0, 0.15], [0, getIconYValue()], {
    clamp: true,
  });

  const getIconXValue = () => {
    if (typeof window !== "undefined") {
      return -window.innerWidth / 6;
    }
    return 0; // Default value for server-side rendering
  };

  const iconX = useTransform(scrollYProgress, [0, 0.15], [0, getIconXValue()], {
    clamp: true,
  });

  const getHeadYValue = () => {
    if (typeof window !== "undefined") {
      return window.innerHeight > 1200
        ? 2.5 * window.innerHeight
        : 3 * window.innerHeight;
    }
    return 0; // Default value for server-side rendering
  };

  const headY = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    [0, getHeadYValue()],
    {
      clamp: true,
    }
  );
  const icon1Y = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    [
      typeof window !== "undefined" ? -window.innerHeight / 2 : 0,
      typeof window !== "undefined" ? 3 * window.innerHeight : 0,
    ],
    {
      clamp: true,
    }
  );

  const icon1X = useTransform(scrollYProgress, [0.35, 0.45], [300, 0], {
    clamp: true,
  });

  const icon1Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1], {
    clamp: true,
  });

  const icon2X = useTransform(scrollYProgress, [0.45, 0.55], [-300, 0], {
    clamp: true,
  });

  const icon2Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1], {
    clamp: true,
  });

  const iconWidth = useTransform(scrollYProgress, [0, 0.2], ["100px", "500px"]);

  return (
    <div>
      <div className="absolute w-full h-full hidden 3xl:pb-[250px] pb-[100px] lg:flex items-end justify-center">
        <motion.div
          style={{ x: iconX, y: iconY, width: iconWidth }}
          className=" w-[100px] z-[100] rounded-full"
        >
          <img src="/recorder.svg" className="z-[100]" alt="" />
        </motion.div>
      </div>
      <div className="px-[44px] h-screen overflow-hidden  py-[24px] pt-[100px]  pb-[100px]   bg-[#1c1740]   relative  flex flex-col space-y-4 lg:space-y-4 items-center">
        <div className="absolute lg:flex w-full lg:px-8 top-0 lg:top-8">
          <Header />
        </div>
        <div className="absolute animate-spin-slow  ">
          <img
            src="/bg1.svg"
            alt=""
            className="opacity-20 scale-[300%]  lg:scale-150"
          />
        </div>
        <div className="flex flex-col space-y-4 pt-8 items-center">
          <div className="text-center flex flex-col space-y-4">
            <h1 className="lg:text-3xl text-2xl lg:text-[46px] text-white">
              Effortlessly Planning with{" "}
              <span className=" text-[#bd6efa]">AI.</span>{" "}
            </h1>
            <h1 className="lg:text-2xl text-2xl lg:text-[46px] text-white">
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
        <div className="w-full z-50 absolute bottom-24 lg:bottom-0    flex justify-center items-baseline ">
          <img
            src="/laptopBig2.svg"
            className="lg:w-[1024px] 2xl:w-auto overflow-hidden z-20"
            alt=""
          />
          <div className="absolute lg:hidden w-full h-full  pb-8  flex items-end justify-center">
            <div className=" w-[50px] z-[100] rounded-full">
              <img src="/recorder.svg" className="z-[100]" alt="" />
            </div>
          </div>
          {/* <div className="absolute w-full h-full hidden 3xl:pb-[250px] pb-[100px] lg:flex items-end justify-center">
            <motion.div
              style={{ x: iconX, y: iconY, width: iconWidth }}
              className=" w-[100px] z-[100] rounded-full"
            >
              <img src="/recorder.svg" className="z-[100]" alt="" />
            </motion.div>
          </div> */}
        </div>
        <div className="absolute h-32 w-full bg-white bottom-0"> </div>
        <div className="  w-full text-[#5b5b5b] overflow-hidden absolute scale-105 bottom-32  lg:bottom-0 py-16 flex flex-col items-center text-2xl">
          <div className="w-full absolute b -bottom-10">
            <img src="/curve.svg" className="w-full" alt="" />
          </div>

          <div className="w-full absolute  -left-2 -bottom-10">
            <img src="/curve3.svg" className="w-full" alt="" />
          </div>
        </div>
      </div>
      <div className="z-0  w-full text-[#5b5b5b] bg-white relative   p-8  flex flex-col items-center bg-background  lg:text-2xl">
        <h1 className="text-center">
          This versatile to-do board app supports Mac, iOS, Windows, and more,
          ensuring seamless task
        </h1>
        <h1 className="">management across all your devices.</h1>
      </div>
      <div className="bg-[#12021f] relative">
        <div className="h-screen flex flex-col justify-center items-center px-8  lg:grid grid-cols-2">
          <div className="lg:flex hidden items-center justify-center">
            {/* <img src="/recorder.svg" alt="" /> */}
          </div>
          <div className="flex flex-col justify-center items-center space-y-8">
            <div className="flex flex-col space-y-4 items-center lg:items-start">
              <h1 className=" text-xl text-[#a1a1a2]">What Maked Us Special</h1>
              <h1 className="md:text-xl lg:text-3xl text-center text-white">
                Voice input (microphone integration)
              </h1>
            </div>

            <div className="lg:hidden flex w-[70px] h-[70px]   items-center justify-center">
              <img src="/recorder.svg" className="z-[100]" alt="" />
            </div>
            <div className="flex flex-col space-y-6">
              <div className="space-x-2 flex items-center ">
                <img src="/dot.svg" alt="" />
                <h1 className="text-white">
                  Users can use their device's microphone to dictate tasks
                </h1>
              </div>
              <div className="space-x-2 flex items-center ">
                <img src="/dot.svg" alt="" />
                <h1 className="text-white">Hands-free Operation</h1>
              </div>
              <div className="space-x-2 flex items-center ">
                <img src="/dot.svg" alt="" />
                <h1 className="text-white">
                  Voice input enhances efficiency by speeding
                </h1>
              </div>
              <div className="space-x-2 flex items-center ">
                <img src="/dot.svg" alt="" />
                <h1 className="text-white">
                  It improves accessibility for users 
                </h1>
              </div>
              <div className="space-x-2 flex items-center ">
                <img src="/dot.svg" alt="" />
                <h1 className="text-white">
                  Modern to-do list apps integrate voice input seamlessly
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen lg:h-[400vh] lg:py-[300px] relative flex flex-col justify-start items-center space-y-16">
          <motion.div
            style={{ y: headY }}
            className="text-center hidden   lg:flex flex-col space-y-4"
          >
            <h1 className=" text-3xl lg:text-5xl text-background text-white">
              How it Works
            </h1>
            <div className="hidden lg:flex flex-col text-muted-foreground">
              <h2>
                to-do board app, designed to streamline your daily activities
                and help you stay on  
              </h2>
              <h2>top of your responsibilities.</h2>
            </div>
          </motion.div>
          <div className="text-center lg:hidden  flex flex-col space-y-4">
            <h1 className=" text-3xl lg:text-5xl text-background text-white">
              How it Works
            </h1>
            <div className="hidden lg:flex flex-col text-muted-foreground">
              <h2>
                to-do board app, designed to streamline your daily activities
                and help you stay on  
              </h2>
              <h2>top of your responsibilities.</h2>
            </div>
          </div>

          <div className="flex lg:hidden flex-col items-start  p-10 pt-[100px] lg:flex-row  space-y-24 lg:items-start lg:space-y-0 ">
            <div
              style={{ y: icon1Y, x: icon1X, opacity: icon1Opacity }}
              className="flex lg:flex-col   items-center space-x-4 lg:space-y-12"
            >
              <div className="relative">
                <img src="/icon1.svg" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <img src="/2.svg" className=" h-6 w-6 " alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 lg:items-center">
                <h1 className="text-2xl lg:text-3xl text-white">Plan</h1>
                <div className=" lg:text-center text-muted-foreground">
                  <h1>Plan your tasks with our versatile to-do board</h1>
                  <h1>app, streamlining your activities</h1>
                </div>
              </div>
            </div>
            {/* <div className=" lg:pt-10 lg:flex hidden  rotate-90  w-[200px] lg:w-auto lg:rotate-0  ">
              <img src="/line.svg" alt="" />
            </div> */}
            <div
              style={{ y: icon1Y }}
              className="flex lg:flex-col  items-center space-x-4 lg:space-y-12"
            >
              <div className="relative">
                <img src="/icon1.svg" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <img src="/3.svg" className=" h-6 w-6 " alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 lg:items-center">
                <h1 className="text-2xl lg:text-3xl text-white">Organise</h1>
                <div className=" lg:text-center text-muted-foreground">
                  <h1>Plan your tasks with our versatile to-do board</h1>
                  <h1>app, streamlining your activities</h1>
                </div>
              </div>
            </div>
            {/* <div className=" lg:pt-10 lg:flex hidden  rotate-90  w-[200px] lg:w-auto lg:rotate-0  ">
              <img src="/line.svg" alt="" />
            </div> */}
            <div
              style={{ y: icon1Y, x: icon2X, opacity: icon2Opacity }}
              className="flex lg:flex-col items-center space-x-4 lg:space-y-12"
            >
              <div className="relative">
                <img src="/icon1.svg" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <img src="/4.svg" className=" h-6 w-6 " alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 lg:items-center">
                <h1 className="text-2xl lg:text-3xl text-white">Customise</h1>
                <div className=" lg:text-center text-muted-foreground">
                  <h1>Plan your tasks with our versatile to-do board</h1>
                  <h1>app, streamlining your activities</h1>
                </div>
              </div>
            </div>
          </div>
          <motion.div className="lg:flex hidden flex-col items-start  p-10 pt-[100px] lg:flex-row  space-y-24 lg:items-start lg:space-y-0 ">
            <motion.div
              style={{ y: headY, x: icon1X, opacity: icon1Opacity }}
              className="flex lg:flex-col   items-center space-x-4 lg:space-y-12"
            >
              <div className="relative">
                <img src="/icon1.svg" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <img src="/2.svg" className=" h-6 w-6 " alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 lg:items-center">
                <h1 className="text-2xl lg:text-3xl text-white">Plan</h1>
                <div className=" lg:text-center text-muted-foreground">
                  <h1>Plan your tasks with our versatile to-do board</h1>
                  <h1>app, streamlining your activities</h1>
                </div>
              </div>
            </motion.div>
            {/* <div className=" lg:pt-10 lg:flex hidden  rotate-90  w-[200px] lg:w-auto lg:rotate-0  ">
              <img src="/line.svg" alt="" />
            </div> */}
            <motion.div
              style={{ y: headY }}
              className="flex lg:flex-col  items-center space-x-4 lg:space-y-12"
            >
              <div className="relative">
                <img src="/icon1.svg" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <img src="/3.svg" className=" h-6 w-6 " alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 lg:items-center">
                <h1 className="text-2xl lg:text-3xl text-white">Organise</h1>
                <div className=" lg:text-center text-muted-foreground">
                  <h1>Plan your tasks with our versatile to-do board</h1>
                  <h1>app, streamlining your activities</h1>
                </div>
              </div>
            </motion.div>
            {/* <div className=" lg:pt-10 lg:flex hidden  rotate-90  w-[200px] lg:w-auto lg:rotate-0  ">
              <img src="/line.svg" alt="" />
            </div> */}
            <motion.div
              style={{ y: headY, x: icon2X, opacity: icon2Opacity }}
              className="flex lg:flex-col items-center space-x-4 lg:space-y-12"
            >
              <div className="relative">
                <img src="/icon1.svg" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <img src="/4.svg" className=" h-6 w-6 " alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 lg:items-center">
                <h1 className="text-2xl lg:text-3xl text-white">Customise</h1>
                <div className=" lg:text-center text-muted-foreground">
                  <h1>Plan your tasks with our versatile to-do board</h1>
                  <h1>app, streamlining your activities</h1>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <img src="/bg-2.svg" className="absolute top-0 left-0   " alt="" />
        <img
          src="/bg3.svg"
          className="absolute -top-[600px] right-0   "
          alt=""
        />
        <img
          src="/bg4.svg"
          className="absolute -bottom-[500px] right-0   "
          alt=""
        />
      </div>
    </div>
  );
}

//  <motion.div className="flex absolute top-[450px] flex-col items-start  p-10 pt-[300px] lg:flex-row  space-y-24 lg:items-start lg:space-y-0 ">
//   <div className="flex lg:flex-col   items-center space-x-4 lg:space-y-12">
//     <div className="relative">
//       <img src="/icon1.svg" alt="" />
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//         <img src="/2.svg" className=" h-6 w-6 " alt="" />
//       </div>
//     </div>
//     <div className="flex flex-col items-start space-y-4 lg:items-center">
//       <h1 className="text-2xl lg:text-3xl text-background">Plan</h1>
//       <div className=" lg:text-center text-muted-foreground">
//         <h1>Plan your tasks with our versatile to-do board</h1>
//         <h1>app, streamlining your activities</h1>
//       </div>
//     </div>
//   </div>
//   {/* <div className=" lg:pt-10 lg:flex hidden  rotate-90  w-[200px] lg:w-auto lg:rotate-0  ">
//     <img src="/line.svg" alt="" />
//   </div> */}
//   <motion.div
//     style={{ y: icon1Y }}
//     className="flex lg:flex-col  items-center space-x-4 lg:space-y-12"
//   >
//     <div className="relative">
//       <img src="/icon1.svg" alt="" />
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//         <img src="/3.svg" className=" h-6 w-6 " alt="" />
//       </div>
//     </div>
//     <div className="flex flex-col items-start space-y-4 lg:items-center">
//       <h1 className="text-2xl lg:text-3xl text-background">
//         Organise
//       </h1>
//       <div className=" lg:text-center text-muted-foreground">
//         <h1>Plan your tasks with our versatile to-do board</h1>
//         <h1>app, streamlining your activities</h1>
//       </div>
//     </div>
//   </motion.div>
//   {/* <div className=" lg:pt-10 lg:flex hidden  rotate-90  w-[200px] lg:w-auto lg:rotate-0  ">
//     <img src="/line.svg" alt="" />
//   </div> */}
//   <div className="flex lg:flex-col items-center space-x-4 lg:space-y-12">
//     <div className="relative">
//       <img src="/icon1.svg" alt="" />
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//         <img src="/4.svg" className=" h-6 w-6 " alt="" />
//       </div>
//     </div>
//     <div className="flex flex-col items-start space-y-4 lg:items-center">
//       <h1 className="text-2xl lg:text-3xl text-background">
//         Customise
//       </h1>
//       <div className=" lg:text-center text-muted-foreground">
//         <h1>Plan your tasks with our versatile to-do board</h1>
//         <h1>app, streamlining your activities</h1>
//       </div>
//     </div>
//   </div>
// </motion.div>
