"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="h-screen w-full p-2 flex relative">
      <img
        src="/bottomRightDots.svg"
        className="absolute bottom-0 right-0"
        alt=""
      />
      <div className="w-[55%] bg-[#38196d] hidden  overflow-hidden rounded-md h-full lg:flex flex-col space-y-8  justify-center items-center relative">
        <img
          src="/bgauth.svg"
          className="absolute left-0 top-0  h-full object-cover"
          alt=""
        />
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col z-20 space-y-4">
            <h1 className="text-white sm:text-3xl md:text-4xl xl:text-5xl">
              Get ready with your day
            </h1>
            <h1 className="text-white sm:text-3xl md:text-4xl xl:text-5xl">
              with your TO-DO LIST
            </h1>
          </div>
          <h1 className="text-white z-20">
            The key to efficient Task management with a single click
          </h1>
        </div>
        <img src="/vector.svg" className="z-20 " alt="" />
      </div>
      <div className="flex-1 h-full flex p-16 flex-col space-y-8 justify-center items-center">
        <div className="flex flex-col space-y-4 items-center">
          <h1 className="text-3xl text-[#ae3df3]">Welcome Back!</h1>
          <h2 className="text-2xl">Login to your ccount</h2>
        </div>
        <div className="flex flex-col w-full space-y-6">
          <div className="flex flex-col space-y-2">
            <Label className="text-muted-foreground">Email</Label>
            <Input
              className="w-full rounded-xl p-4 h-auto"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="text-muted-foreground">Password</Label>
            <Input
              className="w-full rounded-xl p-4 h-auto"
              placeholder="Enter your Password"
            />
          </div>
          <Button className="bgGradiant h-auto w-full p-4 flex cursor-pointer justify-center text-white items-center">
            <h1>Login</h1>
          </Button>

          <div className="px-8 flex items-center space-x-6 justify-center">
            <div className="w-32 h-[1px] bg-muted" />
            <h1 className="text-muted-foreground">or</h1>
            <div className="w-32 h-[1px] bg-muted" />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Button
              variant="outline"
              className="p-4 border h-auto rounded-xl flex justify-center space-x-4 items-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_293_14671)">
                  <path
                    d="M6.92237 14.3826L6.28746 16.7528L3.96689 16.8019C3.27338 15.5156 2.88 14.0439 2.88 12.48C2.88 10.9677 3.2478 9.54151 3.89973 8.28577H3.90023L5.9662 8.66453L6.87122 10.7181C6.6818 11.2703 6.57856 11.8631 6.57856 12.48C6.57863 13.1494 6.69989 13.7909 6.92237 14.3826Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M20.9607 10.7762C21.0654 11.3279 21.12 11.8977 21.12 12.48C21.12 13.1329 21.0514 13.7698 20.9206 14.3842C20.4767 16.4747 19.3166 18.3002 17.7096 19.5921L17.7091 19.5916L15.1069 19.4588L14.7386 17.1597C15.8049 16.5344 16.6383 15.5557 17.0772 14.3842H12.2005V10.7762H17.1484H20.9607Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M17.709 19.5916L17.7095 19.5921C16.1466 20.8483 14.1612 21.6 12 21.6C8.52689 21.6 5.50728 19.6588 3.96689 16.802L6.92238 14.3827C7.69255 16.4382 9.67541 17.9014 12 17.9014C12.9992 17.9014 13.9353 17.6313 14.7385 17.1598L17.709 19.5916Z"
                    fill="#28B446"
                  />
                  <path
                    d="M17.8213 5.45958L14.8669 7.87838C14.0355 7.35875 13.0529 7.05857 12.0001 7.05857C9.62286 7.05857 7.60292 8.58892 6.87133 10.7181L3.90031 8.28578H3.89981C5.41765 5.35937 8.47534 3.35999 12.0001 3.35999C14.2129 3.35999 16.2419 4.14822 17.8213 5.45958Z"
                    fill="#F14336"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_293_14671">
                    <rect
                      width="18.24"
                      height="18.24"
                      fill="white"
                      transform="translate(2.88 3.35999)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h1>Continue with Google</h1>
            </Button>
            <Button
              variant="outline"
              className="p-4 h-auto border rounded-xl flex justify-center space-x-4 items-center"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_293_14685)">
                  <path
                    d="M16.999 0C15.7195 0.0884994 14.224 0.907494 13.3525 1.97399C12.5575 2.94148 11.9035 4.37847 12.1585 5.77496C13.5565 5.81846 15.001 4.97997 15.838 3.89548C16.621 2.88598 17.2135 1.45799 16.999 0Z"
                    fill="#444B59"
                  />
                  <path
                    d="M22.0554 8.05192C20.827 6.51143 19.1005 5.61743 17.47 5.61743C15.3175 5.61743 14.407 6.64793 12.9115 6.64793C11.3695 6.64793 10.198 5.62043 8.33652 5.62043C6.50803 5.62043 4.56104 6.73793 3.32655 8.64891C1.59106 11.3399 1.88805 16.3994 4.70054 20.7088C5.70703 22.2508 7.05103 23.9848 8.80902 23.9998C10.3735 24.0148 10.8145 22.9963 12.934 22.9858C15.0535 22.9738 15.4555 24.0133 17.017 23.9968C18.7765 23.9833 20.194 22.0618 21.2004 20.5198C21.9219 19.4144 22.1904 18.8579 22.7499 17.6099C18.6805 16.0604 18.028 10.2734 22.0554 8.05192Z"
                    fill="#444B59"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_293_14685">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h1>Continue with Apple</h1>
            </Button>
          </div>

          <h1 className="text-center">
            Don't have an account?{" "}
            <span
              onClick={() => router.push("/signup")}
              className="text-lg cursor-pointer text-[#9015F1] "
            >
              Sign Up
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
