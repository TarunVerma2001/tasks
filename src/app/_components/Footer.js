import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShineBorder from "@/components/ui/shine-border";

export default function Footer() {
  return (
    <div className="bg-[#12021f] relative  overflow-hidden ">
      <div className="py-[100px] px-[52px] flex flex-col space-y-[62px] items-center">
        <h1 className="text-[#bd6efa] text-3xl font-bold">My Task Planner</h1>
        <div className="flex flex-col space-y-2">
          <Label className="text-sm text-muted">
            Subscribe to get latest updates
          </Label>
          <div className="flex w-full">
            <Input className="h-[50px] flex-1 lg:w-[500px] w-[250px] text-white   rounded-l-2xl rounded-r-none border-0 bg-[#2b213b]" />
            <div className="rounded-l-none cursor-pointer rounded-r-2xl bg-[#bd6efa] text-xs  w-[100px] h-[50px] flex items-center justify-center text-white">
              <h1>Subscribe</h1>
            </div>
          </div>
        </div>
        <div className="px-16 text-xs flex lg:flex-row flex-col gap-10 items-center">
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-white">Privacy Policy</h1>
            <h1 className="text-white">Terms and Conditions</h1>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-white">Follow us On</h1>
            <h1 className="text-white flex space-x-4">
              <img src="/fb.svg" alt="" />
              <img src="/insta.svg" alt="" />
              <img src="/x.svg" alt="" />
            </h1>
          </div>
        </div>
      </div>
      <img
        src="/bgFooterRight.svg"
        className="absolute  z-0 bottom-0 right-0"
        alt=""
      />
      <img src="/bgFLB.svg" className="absolute  z-0 bottom-0 left-0" alt="" />
    </div>
  );
}
