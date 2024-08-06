import { Switch } from "@/components/ui/switch";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Pricing() {
  return (
    <div className="py-[100px] flex flex-col space-y-4 bg-background items-center">
      <h1 className="text-4xl text-foreground font-semibold">
        Plans & Pricing
      </h1>
      <div className="flex space-x-4">
        <h1 className="text-muted-foreground">Monthly</h1>
        <Switch />
        <h1 className="text-muted-foreground">Yearly</h1>
        <div className="rounded-full bg-[#f7f0fe] text-[#874ef0] text-xs p-2 py-1 font-semibold">
          25% OFF
        </div>
      </div>
      <div className="flex space-y-8 lg:space-y-0  lg:flex-row flex-col lg:space-x-6 justify-center items-center">
        <div className="border justify-between w-[335px] h-[524px] p-6 rounded-lg bg-[#f8f1ff] flex items-start flex-col space-y-4">
          <div className="p-2 rounded-lg bg-background text-[#874ef0] font-semibold  text-sm">
            BASIC
          </div>
          <h1 className="text-5xl font-semibold">$28</h1>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
          </div>
          <div className="w-full flex justify-center items-center border-[#bd6efa] font-semibold text-[#bd6efa] rounded-xl border-2 p-4">
            <h1>Get started for Free</h1>
          </div>
        </div>
        <div className="border justify-between pricing w-[369px] h-[580px] p-6 rounded-xl bg-[#f8f1ff] flex items-start flex-col space-y-4">
          <div className="p-2 rounded-lg bg-background text-black font-semibold  text-sm">
            STANDARD
          </div>
          <h1 className="text-5xl font-semibold text-white">$28</h1>
          <div className="flex text-white flex-col space-y-4">
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <CheckIcon className="h-5 w-" />
              <h1>Create Edit Tasks</h1>
            </div>
          </div>
          <div className="w-full flex justify-center items-center bg-white font-semibold text-[#bd6efa] rounded-xl text-xl  p-4">
            <h1>Get started for Free</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
