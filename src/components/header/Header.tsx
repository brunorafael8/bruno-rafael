import Image from "next/image";
import React from "react";

const header = () => {
  return (
    <div className="flex w-full max-w-[1397px] flex-col items-center justify-between lg:flex-row">
      <div className="h-9 w-[350px] font-['Roboto'] text-[32px] font-black leading-[50px] tracking-[4.80px] text-rose-700 lg:h-[100px] lg:w-[200px] lg:text-[40px] lg:tracking-[6px]">
        BRUNO RAFAEL
      </div>
      <div className="flex-col lg:hidden">
        <div className="mb-[4px] w-[347.57px] font-['Roboto'] text-base font-black uppercase tracking-widest text-white">
          Software Developer
        </div>
        <p className="mb-[16px] w-[279.51px] font-['Lato'] text-[13px] font-black uppercase tracking-[2.73px] text-zinc-300">
          Front-end
          <br />
          React-Native Developer
          <br />
          React DEveloper
          <br />
          Node developer
          <br />
        </p>
        <div className="flex items-center gap-[30px]">
          <div className="relative h-[30px] w-[30px]">
            <Image src="/Email.svg" layout="fill" alt="social-media-email" />
          </div>
          <div className="relative h-[30px] w-[30px]">
            <Image src="/Instagram.svg" layout="fill" alt="social-media" />
          </div>
          <div className="relative h-[30px] w-[30px]">
            <Image src="./TwitterX.svg" layout="fill" alt="social-media" />
          </div>
          <div className="relative h-[30px] w-[36px]">
            <Image src="./GitHub.svg" layout="fill" alt="social-media" />
          </div>
        </div>
      </div>
      <nav className="hidden gap-[72px] lg:flex">
        <div className="flex items-center">
          <div className="relative h-[31px] w-[31px]">
            <Image src="/chevron-right.svg" layout="fill" alt="chevron" />
          </div>
          <div className="w-[59.30px] font-['Roboto'] text-lg font-medium uppercase text-white">
            About
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative h-[31px] w-[31px]">
            <Image src="/chevron-right.svg" layout="fill" alt="chevron" />
          </div>
          <div className="w-[116px] font-['Roboto'] text-lg font-medium uppercase text-white">
            Experiences
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative h-[31px] w-[31px]">
            <Image src="/chevron-right.svg" layout="fill" alt="chevron" />
          </div>
          <div className="w-[63px] font-['Roboto'] text-lg font-medium uppercase text-white">
            Skills
          </div>
        </div>

        <button className="flex h-16 w-56 items-center justify-center gap-2.5 rounded-[5px] bg-rose-700 px-[39px] py-[18px]">
          <div className="font-['Roboto'] text-2xl font-black tracking-[3.60px] text-white">
            Let’s talk
          </div>
        </button>
      </nav>
    </div>
  );
};

header.propTypes = {};

export default header;
