"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="header  sticky top-0 w-full px-6 py-4 lg:rounded-xl flex items-center justify-between lg:grid grid-cols-3">
      <div className="flex space-x-2">
        <img src="/logotask.svg" alt="" />
        <img src="/logotasktext.svg" className="w-[56px] lg:w-auto" alt="" />
      </div>

      <div className="text-2xl text-[#d4d4d5] flex-1 items-center w-full hidden lg:flex justify-between">
        <h1 className="text-[#bd6efa]">Home</h1>
        <h1>Contact Us</h1>
        <h1>Feature</h1>
      </div>
      <div className="flex justify-end space-x-4 items-center">
        <div
          className="signup h-[29px] rounded-lg lg:rounded-xl lg:w-auto text-xs lg:text-base w-[72px]  lg:h-[43px] px-4 cursor-pointer signuptext "
          onClick={() => router.push("/signup")}
        >
          Signup
        </div>
        <div
          onClick={() => router.push("/login")}
          className="login h-[29px] rounded-lg lg:rounded-xl lg:w-auto text-xs lg:text-base w-[72px]  lg:h-[43px] px-4 cursor-pointer text-center flex items-center justify-center text-white"
        >
          <h1>Login</h1>
        </div>
      </div>
    </div>
  );
}
