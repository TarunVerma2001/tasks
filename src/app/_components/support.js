import ShineBorder from "@/components/ui/shine-border";

export default function Support() {
  return (
    <div className="bg-[#12021f] relative">
      <div className="lg:py-[300px] py-[100px] p-8  flex flex-col justify-center items-center space-y-16">
        <div className="text-center flex flex-col space-y-4">
          <h1 className=" text-3xl lg:text-5xl text-white">
            Supported Platforms
          </h1>
          <div className="hidden lg:flex flex-col text-muted-foreground">
            <h2>Your Smart To-Do List, Available Everywhere</h2>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <ShineBorder
            borderWidth={0.7}
            borderRadius={12}
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="max-w-[378px] flex-col justify-between flex  p-4  dark:bg-[#c9c9c9]/[0.06] bg-[#c9c9c9]/[0.06]  h-[225px]"
          >
            {/* <div className="bg-white"> */}
            <img src="/playstore.svg" alt="" />
            <div className="flex flex-col text-center items-center space-y-2">
              <h1 className="text-white text-2xl">Android</h1>
              <h2 className="text-muted-foreground">
                Download our app from the Google Play Store for your smartphone
                or tablet.
              </h2>
            </div>
            {/* </div> */}
          </ShineBorder>
          <ShineBorder
            borderWidth={0.7}
            borderRadius={12}
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="max-w-[378px] flex-col justify-between flex  p-4  dark:bg-[#c9c9c9]/[0.06] bg-[#c9c9c9]/[0.06]  h-[225px]"
          >
            <img src="/alexa.svg" alt="" />
            <div className="flex flex-col text-center items-center space-y-2">
              <h1 className="text-white text-2xl">Android</h1>
              <h2 className="text-muted-foreground">
                Available on the Apple App Store for your iPhone and iPad.
              </h2>
            </div>
          </ShineBorder>
          <ShineBorder
            borderWidth={0.7}
            borderRadius={12}
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="max-w-[378px] flex-col justify-between flex  p-4  dark:bg-[#c9c9c9]/[0.06] bg-[#c9c9c9]/[0.06]  h-[225px]"
          >
            <img src="/applestore.svg" alt="" />
            <div className="flex flex-col text-center items-center space-y-2">
              <h1 className="text-white text-2xl">Alexa</h1>
              <h2 className="text-muted-foreground">
                Integrate with your Amazon Alexa for hands-free task management.
              </h2>
            </div>
          </ShineBorder>
        </div>
      </div>

      <img src="/bgSupport.svg" className="absolute top-0 left-0   " alt="" />
      <img
        src="/bgSupport1.svg"
        className="absolute bottom-0 right-0   "
        alt=""
      />
    </div>
  );
}
