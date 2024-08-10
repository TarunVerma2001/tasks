import ShineBorder from "@/components/ui/shine-border";

export default function Testimonials() {
  return (
    <div className="bg-[#12021f] relative  overflow-hidden ">
      <div className="lg:py-[250px]  px-20 overflow-hidden p-8 z-30   flex flex-col justify-center items-center space-y-4 lg:space-y-16">
        <div className="text-center flex flex-col space-y-4">
          <h1 className="text-xl md:text-3xl z-50 lg:text-5xl text-background">
            Testimonials
          </h1>
        </div>
        <img src="/testimonial.svg" className="z-50" alt="" />
      </div>

      <img
        src="/ellipseBg.svg"
        className="absolute  z-0 top-0 left-0   w-full "
        alt=""
      />
    </div>
  );
}
