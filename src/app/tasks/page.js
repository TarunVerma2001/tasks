"use client";
import { Button } from "@/components/ui/button";
import TaskCard from "../_components/task-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HamburgerMenuIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "@/components/mode-toggle";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export default function Tasks() {
  const [tasks, setTasks] = useState([1, 2, 3, 4, 5, 6]);
  const [micActive, setMicActive] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        // Call the function here if clicked outside the button
        handleOutsideClick();
      }
    };

    // Attach the event listener to the whole document
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOutsideClick = () => {
    console.log("Clicked outside the button!");
    setMicActive(false);
    // Your function logic goes here
  };

  return (
    <div className="dark:bg-[#0b0114] bg-[#f2eef7] relative h-screen  flex  flex-col  w-full">
      <div className=" px-[24px] py-4    w-full lg:grid   hidden lg:grid-cols-3">
        <div className="flex space-x-2">
          <img src="/logotask.svg" alt="" />
          <img src="/logotasktext.svg" className="w-[56px] lg:w-auto" alt="" />
        </div>
        <div className="lg:flex w-full hidden text-muted-foreground items-center justify-center space-x-8">
          <h1 className="text-2xl cursor-pointer text-[#bd6efa] border-b border-[#bd6efa] ">
            Home
          </h1>
          <h1 className="text-2xl cursor-pointer">Settings</h1>
          <h1 className="text-2xl cursor-pointer">Contacy Us</h1>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <ModeToggle />
          <img src="/profile.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-col h-full flex-1 overflow-hidden  lg:px-8">
        <div className="flex flex-col  dark:bg-[#150b1d] bg-[#fcfaff] space-y-4 h-full  lg:rounded-t-xl">
          <div className="dark:bg-[#191022] bg-white p-6 rounded-t-xl flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <HamburgerMenuIcon className="h-6 w-6 lg:hidden" />
              <h1 className="">Task</h1>
              <h2 className="dark:bg-[#291a38] bg-[#f7eefe] rounded-lg text-[#bd6efa] px-2 py-1">
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
          <div className="p-4 flex-1 pb-32 md:pb-40 lg:pb-60 overflow-y-scroll flex flex-col space-y-4">
            {tasks.map((item) => (
              <TaskCard tasks={tasks} index={item} setTasks={setTasks} />
            ))}
          </div>
        </div>
      </div>

      <Drawer>
        <DrawerTrigger>
          <div className="fixed h-10 rounded-lg items-center flex text-white  px-4 bottom-8 right-8 z-50 bg-[#bd6efa] space-x-2">
            <PlusIcon className="h-6 w-6" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add task</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex flex-col gap-2">
              <Label>Task Name</Label>
              <Input placeholder="Enter Task Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Date</Label>
              <Input placeholder="Enter Date" type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Description</Label>
              <Textarea className="h-[164px] flex items-start " />
            </div>

            <DrawerClose className="flex justify-end space-x-2">
              <Button className="bg-[#bd6efa] w-full text-white  hover:bg-[#bd6efa]">
                Add Task
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="hidden lg:flex">
        <Dialog>
          <DialogTrigger>
            <div className="fixed h-10 rounded-lg hidden lg:flex text-white items-center px-4 bottom-8 right-8 z-50 bg-[#bd6efa] space-x-2">
              <PlusIcon className="h-4 w-4" />
              <h1> Add new task</h1>
            </div>
          </DialogTrigger>
          <DialogContent className="dark:bg-[#1f1a24]">
            <DialogHeader>
              <DialogTitle className="text-xl">Add new Task</DialogTitle>
              <DialogDescription className="pt-2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Task Name</Label>
                  <Input placeholder="Enter Task Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Date</Label>
                  <Input placeholder="Enter Date" type="date" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Description</Label>
                  <Textarea className="h-[164px] flex items-start " />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    className=" border-red-800 text-red-800 bg-transparent"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-[#bd6efa] text-white  hover:bg-[#bd6efa]">
                    Add Task
                  </Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="z-30  flex fixed  transition  transform duration-200 ease-out justify-center bottom-4 w-full">
        <div
          className={cn(
            "w-full flex justify-center  transition  transform duration-200 ease-out fixed bottom-0 translate-y-[80%] -lg:bottom-28",
            micActive && "translate-y-0 ",
          )}
        >
          <img
            src="/bgArcDark.svg"
            className="w-full hidden dark:flex"
            alt=""
          />
          <img
            src="/bgArcLight.svg"
            className="w-full dark:hidden flex"
            alt=""
          />

          {micActive && (
            <h1 className="absolute bottom-4 ">jo bhi main kehna chahu</h1>
          )}
          <img
            ref={buttonRef}
            onClick={() => setMicActive(!micActive)}
            src="/micDark.svg"
            className={cn(
              "absolute -top-12  transition  transform duration-200 ease-out z-50  cursor-pointer w-[84px] lg:w-[123px]",
              // micActive && "scale-110 translate",
            )}
            alt=""
          />
          {micActive && (
            <img
              src="/blobs.svg"
              className={cn(
                "absolute -top-14 z-30  w-[84px] lg:w-[123px]",
                micActive &&
                  " w-[100px] lg:w-[150px] bottom-2 lg:bottom-20  animate-spin-rec",
              )}
              alt=""
            />
          )}
        </div>
      </div>

      {/* <div className="z-30  flex fixed dark:hidden transition   justify-center bottom-4 w-full">
        <div
          className={cn(
            "w-full flex justify-center fixed bottom-0 translate-y-[80%] -lg:bottom-28",
            micActive && "translate-y-0 ",
          )}
        >
          <img src="/bgArcLight.svg" className="w-full" alt="" />
          {micActive && (
            <h1 className="absolute bottom-4 ">jo bhi main kehna chahu</h1>
          )}
          <img
            // ref={buttonRef}
            onClick={() => setMicActive(!micActive)}
            src="/micDark.svg"
            className={cn(
              "absolute -top-12 z-50 dark:hidden  w-[84px] lg:w-[123px]",
              // micActive && "scale-110 translate",
            )}
            alt=""
          />
          {micActive && (
            <img
              src="/blobs.svg"
              className={cn(
                "absolute -top-14 z-30  w-[84px] lg:w-[123px]",
                micActive &&
                  " w-[100px] lg:w-[150px] bottom-2 lg:bottom-20  animate-spin-rec",
              )}
              alt=""
            />
          )}
        </div>
      </div> */}
      <div className={cn(" fixed bottom-0 left-0 z-50  w-full")}>
        <Progress value={(100 / 6) * (6 - tasks.length)} className="w-full " />
      </div>

      {/* <div className="z-30 dark:hidden transition fixed w-full flex justify-center bottom-8">
        <img
          onClick={() => setMicActive(!micActive)}
          src="/micLight.svg"
          className={cn(
            "fixed -bottom-4  lg:bottom-20 z-50   w-[84px] lg:w-[123px]",
            micActive && "scale-110 bottom-4 lg:bottom-24",
          )}
          alt=""
        />
        {micActive && (
          <img
            src="/blobs.svg"
            className={cn(
              "fixed -bottom-5 lg:bottom-10 z-30  w-[84px] lg:w-[123px]",
              micActive &&
                " w-[100px] lg:w-[150px] bottom-2 lg:bottom-20  animate-spin-rec",
            )}
            alt=""
          />
        )}
        <img
          src="/bottomArcLight.svg "
          className={cn(
            "w-full fixed -bottom-4 -lg:bottom-28",
            micActive && " bottom-0 ",
          )}
          alt=""
        />
      </div> */}
    </div>
  );
}
