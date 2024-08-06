import { Button } from "@/components/ui/button";
import TaskCard from "../_components/task-card";

export default function Tasks() {
  return (
    <div className="bg-[#0b0114] relative h-screen flex flex-col space-y-6 w-full">
      <div className="h-[70px] px-[24px] py-[12px] w-full lg:grid flex justify-between lg:grid-cols-3">
        <div className="flex space-x-2">
          <img src="/logotask.svg" alt="" />
          <img src="/logotasktext.svg" alt="" />
        </div>
        <div className="lg:flex w-full hidden text-muted-foreground items-center justify-center space-x-8">
          <h1 className="text-2xl cursor-pointer text-[#bd6efa] border-b border-[#bd6efa] ">
            Home
          </h1>
          <h1 className="text-2xl cursor-pointer">Settings</h1>
          <h1 className="text-2xl cursor-pointer">Contacy Us</h1>
        </div>
        <div className="flex items-center justify-end">
          <img src="/profile.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col flex-1  px-8">
        <div className="flex flex-col flex-1 bg-[#150b1d] space-y-4  rounded-t-xl">
          <div className="bg-[#191022] p-6 rounded-t-xl flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <h1 className="text-white">Task</h1>
              <h2 className="bg-[#291a38] rounded-lg text-[#bd6efa] px-2 py-1">
                05
              </h2>
            </div>
            <div
              variant="outline"
              className=" border-[#bd6efa] px-4 py-1 rounded-lg cursor-pointer bg-transparent border text-[#bd6efa]"
            >
              Completed Tasks
            </div>
          </div>
          <div className="p-4 flex flex-col space-y-4">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
      </div>
      <img
        src="/bottomArc.svg"
        className="z-30 absolute bottom-0 w-full"
        alt=""
      />
    </div>
  );
}
