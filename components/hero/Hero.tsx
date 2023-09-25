import React from "react";
import SocialLinks from "./SocialLinks";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="h-[calc(100vh_-_84px)] mt-[84px] pt-4 w-fit mx-auto flex flex-col justify-center">
      <p
        className="
        text-[28px]
        tracking-normal
        text-center
        text-custom-grey
        font-light
        pb-4
        "
      >
        👋, my name is Imran and I am a remote
      </p>

      <div
        className="
          flex
          flex-col-reverse
          items-center
          justify-center
          font-heading
          pb-4"
      >
        <p className="peer text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[180px] text-center text-transparent text-outline hover:text-black cursor-pointer transition duration-500 linear w-fit h-fit leading-none">
          & Designer
        </p>
        <p className="text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[180px] text-center leading-none w-fit h-fit peer-hover:text-transparent peer-hover:text-outline transition duration-1000 linear">
          Web Developer
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 justify-between pb-8 md:pb-4 ">
        <p className="font-content font-light text-custom-grey text-[28px]">based in Chennai, India.</p>
        <SocialLinks />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto w-full md:w-fit">
        <Button title="See my creations" />
        <Button title="Let's collaborate" secondaryBtn />
      </div>
    </section>
  );
};

export default Hero;
