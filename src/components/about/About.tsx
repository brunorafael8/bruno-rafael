import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[17px]">
      <div className="h-[22.45px] w-20 font-['Roboto'] text-xl font-black tracking-[3px] text-white">
        ABOUT
      </div>
      <div className="w-[350px] font-['Lato'] text-[15px] font-normal tracking-wider text-zinc-300">
        I am self-taught, I try to learn as much as possible about programming
        and design and to keep up with technological innovations, especially in
        the area of user experience and web/mobile development areas. <br />I
        like working in a team and being a protagonist, and I am currently
        looking to acquire experiences and professional qualification.
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
