"use client";
import { Button } from "@/components/ui/button";
import TaskCard from "../_components/task-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckIcon,
  ChevronLeftIcon,
  HamburgerMenuIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
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

export default function Profile() {
  const router = useRouter();

  const [isEditable, setIsEditable] = useState(false);
  return (
    <div className="dark:bg-[#0b0114] bg-[#f2eef7] relative h-screen  flex  flex-col gap-6 w-full">
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
        <div className="flex flex-col  dark:bg-[#150b1d] bg-[#fcfaff] space-y-4   lg:rounded-t-xl">
          <div className="dark:bg-[#191022] bg-white p-6 rounded-t-xl flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <ChevronLeftIcon
                onClick={() => router.back()}
                className="h-6 w-6 lg:hidden"
              />
              <h1 className="">Profile Details</h1>
            </div>
            <div
              variant="outline"
              className="lg:hidden border-[#bd6efa] px-4 py-1 rounded-lg cursor-pointer bg-transparent border text-[#bd6efa]"
              onClick={() => setIsEditable(!isEditable)}
            >
              {isEditable ? "Save" : "Edit Profile"}
            </div>
          </div>
        </div>

        <div className="flex lg:hidden p-4  flex-col gap-6">
          {!isEditable && (
            <div className="lg:hidden flex  flex-col items-center  gap-4">
              <div className="w-[76px] h-[76px] relative">
                <img src="/profile.svg" alt="" className="w-full h-full" />
                <img
                  src="/F_Icon.svg"
                  className="absolute bottom-0 right-0"
                  alt=""
                />
              </div>
              <div className="flex flex-col lg:items-start items-center">
                <h1 className="text-2xl">Lisa Mishra</h1>
                <h1 className="text-xl text-gray-400">lisaMishra@gmail.com</h1>
              </div>
            </div>
          )}

          {!isEditable && (
            <div className="w-full lg:hidden flex flex-col items-start gap-4 pt-4 ">
              <h1 className="">
                <span className="text-gray-400">Full Name: </span>
                Lisa Mishra
              </h1>
              <h1 className="">
                <span className="text-gray-400">Gender: </span>
                Female
              </h1>
              <h1 className="">
                <span className="text-gray-400">Country: </span>
                India
              </h1>
              <h1 className="">
                <span className="text-gray-400">Language: </span>
                English
              </h1>
              <h1 className="text-[#bd6efa]">Change Password</h1>
            </div>
          )}
          {!isEditable && (
            <div className="w-full lg:w-auto lg:hidden  flex flex-col lg:rounded-lg lg:dark:bg-[#1e1526] lg:bg-[#f9f4ff] lg:p-4 lg:px-8 items-start gap-4 pt-4  ">
              <h1>Pricing Plan</h1>
              <div className="flex lg:flex-col gap-4 w-full  items-center lg:justify-center justify-between">
                <div className="flex space-x-4 items-center">
                  <h1 className="text-gray-400">Your Plan</h1>
                  <h2 className="dark:bg-[#291a38] bg-[#f7eefe] rounded-lg text-[#bd6efa] px-2 py-1">
                    Basic
                  </h2>
                </div>

                <Drawer>
                  <DrawerTrigger>
                    <div
                      variant="outline"
                      className="  border-[#bd6efa] px-4 py-1 rounded-lg cursor-pointer bg-transparent border text-[#bd6efa]"
                    >
                      Upgrade Plan
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Pricing Plan</DrawerTitle>
                      <DrawerDescription className="flex flex-col gap-6 items-center">
                        <h1>Choose your Desired Plan</h1>
                        <div className="flex gap-4">
                          <div className="border justify-between lg:hidden w-[155px] h-[132px] p-6 rounded-lg bg-[#f8f1ff] flex items-start flex-col items-center space-y-4">
                            <h1 className="text-2xl font-semibold">$28</h1>
                            <div className="p-2 px-4 rounded-xl bg-white text-[#874ef0] font-semibold  text-sm">
                              BASIC
                            </div>
                          </div>
                          <div className="border pricing justify-between lg:hidden w-[155px] h-[132px] p-6 rounded-lg bg-[#f8f1ff] flex items-start flex-col items-center space-y-4">
                            <h1 className="text-2xl text-white font-semibold">
                              $28
                            </h1>
                            <div className="p-2 px-4 rounded-xl bg-white text-[#874ef0] font-semibold  text-sm">
                              STANDARD
                            </div>
                          </div>
                        </div>

                        <div className="flex lg:hidden flex-col w-full px-8 items-center  space-y-4">
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
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <DrawerClose className="w-full">
                        <Button
                          variant="outline"
                          className="border-[#bd6efa] h-auto text-lg w-full text-[#bd6efa]"
                        >
                          Get Started For Free
                        </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          )}
          {isEditable && (
            <div className="w-full lg:hidden flex flex-col items-start gap-4 pt-4 relative ">
              <div className="flex flex-col space-y-2 w-full">
                <Label className="text-muted-foreground">Full Name</Label>
                <Input
                  className="w-full  rounded-xl bg-[#191022] border-none p-4 h-auto"
                  placeholder="Enter your NAme"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <Label className="text-muted-foreground">Gender</Label>
                <Input
                  className="w-full  rounded-xl bg-[#191022] border-none p-4 h-auto"
                  placeholder="Enter your GEnder"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <Label className="text-muted-foreground">Country</Label>
                <Input
                  className="w-full  rounded-xl bg-[#191022] border-none p-4 h-auto"
                  placeholder="Enter your Country"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <Label className="text-muted-foreground">Language</Label>
                <Input
                  className="w-full  rounded-xl bg-[#191022] border-none p-4 h-auto"
                  placeholder="Enter Language"
                />
              </div>
              <div className="fixed bottom-0 left-0 p-4 px-8 bg-[#191022] w-full grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className=" border-red-800 text-red-800 bg-transparent"
                >
                  Cancel
                </Button>
                <Button className="bg-[#bd6efa] text-white  hover:bg-[#bd6efa]">
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:flex hidden flex-col flex-1 h-full ">
          <div className="flex-1 h-full w-full dark:bg-[#150b1d] bg-white  lg:bg-[#fcfaff] gap-8 lg:rounded-none rounded-lg p-6 flex flex-col lg:items-start items-center">
            <div className="w-full lg:flex hidden justify-between items-center">
              <h1>Basic Details</h1>
              <div className="flex space-x-4 items-center">
                <Dialog className="">
                  <DialogTrigger>
                    <h1 className="text-[#bd6efa]">Change Password</h1>
                  </DialogTrigger>
                  <DialogContent className="dark:bg-[#1f1a24]">
                    <DialogHeader>
                      <DialogTitle className="text-xl">
                        Change Password
                      </DialogTitle>
                      <DialogDescription className="pt-2 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <Label>Current Password</Label>
                          <Input placeholder="Enter Old PAssword" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label>New Password</Label>
                          <Input placeholder="Enter New Password" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label>Confirm New Password</Label>
                          <Input placeholder="Confirm New Password" />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            className=" border-red-800 text-red-800 bg-transparent"
                          >
                            Cancel
                          </Button>
                          <Button className="bg-[#bd6efa] text-white  hover:bg-[#bd6efa]">
                            Save Changes
                          </Button>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <div
                  onClick={() => setIsEditable(!isEditable)}
                  className=" bg-[#bd6efa] text-white px-4 py-1 rounded-lg cursor-pointer  "
                >
                  {isEditable ? "Save" : "Edit Profile"}
                </div>
              </div>
            </div>

            <div className="lg:flex hidden  items-center  gap-4">
              <div className="w-[76px] h-[76px] relative">
                <img src="/profile.svg" alt="" className="w-full h-full" />
                <img
                  src="/F_Icon.svg"
                  className="absolute bottom-0 right-0"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-2xl">Lisa Mishra</h1>
                <h1 className="text-xl text-gray-400">lisaMishra@gmail.com</h1>
              </div>
            </div>

            <div className="hidden lg:grid w-full grid-cols-3 gap-4">
              <div className="flex flex-col space-y-2">
                <Label className="text-muted-foreground">Full Name</Label>
                <Input
                  disabled={!isEditable}
                  className="w-full  rounded-xl p-4 h-auto"
                  placeholder="Enter your NAme"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label className="text-muted-foreground">Gender</Label>
                <Input
                  disabled={!isEditable}
                  className="w-full  rounded-xl p-4 h-auto"
                  placeholder="Enter your GEnder"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label className="text-muted-foreground">Country</Label>
                <Input
                  disabled={!isEditable}
                  className="w-full  rounded-xl p-4 h-auto"
                  placeholder="Enter your Country"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label className="text-muted-foreground">Language</Label>
                <Input
                  disabled={!isEditable}
                  className="w-full  rounded-xl p-4 h-auto"
                  placeholder="Enter Language"
                />
              </div>
            </div>

            <div className="w-full lg:w-auto hidden  lg:flex flex-col lg:rounded-lg lg:dark:bg-[#1e1526] lg:bg-[#f9f4ff] lg:p-4 lg:px-8 items-start gap-4 pt-4  ">
              <h1>Pricing Plan</h1>
              <div className="flex lg:flex-col gap-4 w-full  items-center lg:justify-center justify-between">
                <div className="flex space-x-4 items-center">
                  <h1 className="text-gray-400">Your Plan</h1>
                  <h2 className="dark:bg-[#291a38] bg-[#f7eefe] rounded-lg text-[#bd6efa] px-2 py-1">
                    Basic
                  </h2>
                </div>
                <div
                  variant="outline"
                  className=" lg:hidden border-[#bd6efa] px-4 py-1 rounded-lg cursor-pointer bg-transparent border text-[#bd6efa]"
                >
                  Upgrade Plan
                </div>
                <div className="hidden lg:flex">
                  <Dialog>
                    <DialogTrigger>
                      <div
                        variant="outline"
                        className="hidden border-[#bd6efa] lg:flex px-4 py-1 rounded-lg cursor-pointer bg-transparent border text-[#bd6efa]"
                      >
                        Upgrade Plan
                      </div>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-[#1f1a24] max-w-max">
                      <DialogHeader>
                        <DialogTitle className="text-xl">
                          Pricing Plan
                        </DialogTitle>
                        <DialogDescription className="pt-2 flex flex-col gap-4">
                          <div className="flex  gap-4 justify-center items-center">
                            <div className="hidden  border justify-between w-[233px] h-[370px] p-6 rounded-lg bg-[#f8f1ff] lg:flex items-start flex-col space-y-4">
                              <div className="p-2 rounded-lg bg-white text-[#874ef0] font-semibold  text-sm">
                                BASIC
                              </div>
                              <h1 className="text-2xl font-semibold">$28</h1>
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
                              </div>
                              <div className="w-full flex justify-center text-xs items-center border-[#bd6efa] font-semibold text-[#bd6efa] rounded-xl border-2 p-4">
                                <h1>Get started for Free</h1>
                              </div>
                            </div>
                            <div className="border justify-between pricing w-[257px] h-[403px] p-6 rounded-xl bg-[#f8f1ff] hidden lg:flex items-start flex-col space-y-4">
                              <div className="p-2 rounded-lg bg-white text-black font-semibold  text-sm">
                                STANDARD
                              </div>
                              <h1 className="text-2xl font-semibold text-white">
                                $28
                              </h1>
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
                              </div>
                              <div className="w-full  flex justify-center items-center bg-white font-semibold text-[#bd6efa] rounded-xl text-xs  p-4">
                                <h1>Get started for Free</h1>
                              </div>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
