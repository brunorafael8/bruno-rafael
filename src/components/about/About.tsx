import React from "react";

const About = () => {
  return (
    <div
      className="flex w-full flex-col items-start justify-start gap-[16px] lg:w-1/2 lg:gap-[32px]"
      id="about"
    >
      <div className="font-['Roboto'] text-xl font-black tracking-[3px] text-white lg:text-[36px]">
        ABOUT
      </div>
      <div className="w-[350px] font-['Lato'] text-[15px] font-normal tracking-wider text-zinc-300 lg:w-[602px] lg:text-[20px]">
        I am self-taught, I try to learn as much as possible about programming
        and design and to keep up with technological innovations, especially in
        the area of user experience and web/mobile development areas. <br />I
        like working in a team and being a protagonist, and I am currently
        looking to acquire experiences and professional qualification.
      </div>
    </div>
  );
};


export default About;
