export default function Info() {
  return (
    <div className="bg-[#12021f] relative">
      <div className="lg:py-[200px] py-[100px]  flex flex-col justify-center items-center px-8  lg:grid grid-cols-2">
        <div className="lg:flex hidden items-center justify-center">
          <img src="/recorder.svg" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="flex flex-col space-y-4 items-center lg:items-start">
            <h1 className="md:text-base text-sm text-[#a1a1a2]">
              What Maked Us Special
            </h1>
            <h1 className="md:text-xl lg:text-3xl text-center text-white">
              Voice input (microphone integration)
            </h1>
          </div>

          <div className="lg:hidden flex w-[70px] h-[70px]   items-center justify-center">
            <img src="/recorder.svg" alt="" />
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
      <div className="lg:py-[200px] py-[100px]   flex flex-col justify-center items-center space-y-16">
        <div className="text-center flex flex-col space-y-4">
          <h1 className=" text-3xl lg:text-5xl text-background">
            How it Works
          </h1>
          <div className="hidden lg:flex flex-col text-muted-foreground">
            <h2>
              to-do board app, designed to streamline your daily activities and
              help you stay on  
            </h2>
            <h2>top of your responsibilities.</h2>
          </div>
        </div>
        <div className="flex flex-col items-start  p-10 lg:flex-row  space-y-24 lg:items-start lg:space-y-0 ">
          <div className="flex lg:flex-col   items-center space-x-4 lg:space-y-12">
            <div className="relative">
              <img src="/icon1.svg" alt="" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img src="/2.svg" className=" h-6 w-6 " alt="" />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 lg:items-center">
              <h1 className="text-2xl lg:text-3xl text-background">Plan</h1>
              <div className=" lg:text-center text-muted-foreground">
                <h1>Plan your tasks with our versatile to-do board</h1>
                <h1>app, streamlining your activities</h1>
              </div>
            </div>
          </div>
          <div className=" lg:pt-10 lg:flex hidden  rotate-90  w-[200px] lg:w-auto lg:rotate-0  ">
            <img src="/line.svg" alt="" />
          </div>
          <div className="flex lg:flex-col items-center space-x-4 lg:space-y-12">
            <div className="relative">
              <img src="/icon1.svg" alt="" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img src="/3.svg" className=" h-6 w-6 " alt="" />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 lg:items-center">
              <h1 className="text-2xl lg:text-3xl text-background">Organise</h1>
              <div className=" lg:text-center text-muted-foreground">
                <h1>Plan your tasks with our versatile to-do board</h1>
                <h1>app, streamlining your activities</h1>
              </div>
            </div>
          </div>
          <div className=" lg:pt-10 lg:flex hidden  rotate-90  w-[200px] lg:w-auto lg:rotate-0  ">
            <img src="/line.svg" alt="" />
          </div>
          <div className="flex lg:flex-col items-center space-x-4 lg:space-y-12">
            <div className="relative">
              <img src="/icon1.svg" alt="" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img src="/4.svg" className=" h-6 w-6 " alt="" />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4 lg:items-center">
              <h1 className="text-2xl lg:text-3xl text-background">
                Customise
              </h1>
              <div className=" lg:text-center text-muted-foreground">
                <h1>Plan your tasks with our versatile to-do board</h1>
                <h1>app, streamlining your activities</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/bg-2.svg" className="absolute top-0 left-0   " alt="" />
      <img src="/bg3.svg" className="absolute -top-[600px] right-0   " alt="" />
      <img
        src="/bg4.svg"
        className="absolute -bottom-[500px] right-0   "
        alt=""
      />
    </div>
  );
}
