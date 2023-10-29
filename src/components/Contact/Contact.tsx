import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div
      className="absolute bottom-0 z-50 flex h-[600px] w-full flex-col items-center justify-center gap-8 rounded-[5px] bg-[#D10038] px-10 lg:px-20"
      id="contact"
    >
      <div className="relative flex h-auto w-full max-w-[1397px] flex-col items-center justify-center gap-[32px] self-center lg:flex-row lg:items-start lg:justify-between lg:gap-0">
        <div className="flex flex-col">
          <div className="w-[222px] font-['Roboto'] text-4xl font-black tracking-[5.40px] text-white">
            Let's Talk
          </div>
          <div className="mt-[32px] hidden h-[50px] w-[260px] items-start justify-start gap-5 lg:flex">
            <div className="relative flex h-[50px] w-[50px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-2">
              <Link
                href="mailto:br.brunotk@gmail.com"
                className="relative h-[30px] w-[30px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/Email.svg"
                  layout="fill"
                  alt="social-media-email"
                />
              </Link>
            </div>
            <div className="flex h-[50px] w-[50px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-2">
              <Link
                href="https://www.instagram.com/bruno.rafael18/"
                className="relative h-[30px] w-[30px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src="/Instagram.svg" layout="fill" alt="social-media" />
              </Link>
            </div>
            <div className="flex h-[50px] w-[50px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-2">
              <Link
                href="https://twitter.com/brunorafaell8"
                className="relative h-[30px] w-[30px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src="/TwitterX.svg" layout="fill" alt="social-media" />
              </Link>
            </div>
            <div className="flex h-[50px] w-[50px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-2">
              <Link
                href="https://github.com/brunorafael8"
                className="relative h-[30px] w-[36px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src="/GitHub.svg" layout="fill" alt="social-media" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex h-[374px] w-[380px] flex-col gap-[22px]">
          <div className="float-label-input relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="focus:shadow-outline block w-full appearance-none rounded-md border border-white bg-[#D10038] px-3 py-3 leading-normal focus:border-black focus:outline-none"
            />
            <label
              htmlFor="name"
              className="ease-in-outbg-white text-grey-darker pointer-events-none absolute left-0 top-3 px-3 text-white transition duration-200"
            >
              Your name
            </label>
          </div>

          <div className="relative flex h-[374px] w-[376.75px] flex-col gap-[16px]">
            <div className="float-label-input relative">
              <input
                type="text"
                id="email"
                placeholder=" "
                className="focus:shadow-outline block w-full appearance-none rounded-md border border-white bg-[#D10038] px-3 py-3 leading-normal focus:border-black focus:outline-none"
              />
              <label
                htmlFor="email"
                className="ease-in-outbg-white text-grey-darker pointer-events-none absolute left-0 top-3 px-3 text-white transition duration-200"
              >
                Your email
              </label>
            </div>
          </div>

          <div className="float-label-input relative h-[175.60px] w-full flex-col items-center justify-start rounded-lg">
            <textarea
              id="message"
              placeholder="Your message"
              className="focus:shadow-outline block h-[175.60px] w-full appearance-none rounded-md border border-white bg-[#D10038] px-3 py-3 leading-normal placeholder-white focus:border-black focus:outline-none"
            />
          </div>
          <div className="flex h-[42px] w-[376.75px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-6">
            <div className="relative h-[12px] w-[12px]">
              <Image
                src="/contact-plane.svg"
                layout="fill"
                alt="contact-plane"
              />
            </div>
            <div className="font-['Roboto'] text-[15px] font-black tracking-widest text-rose-700">
              Submit
            </div>
          </div>
        </div>
        <div className="font-['IBM Plex Mono'] flex text-xs font-normal text-white lg:hidden">
          BRUNO RAFAEL ©2022{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
