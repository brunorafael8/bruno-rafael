import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhoIs = () => {
  return (
    <div className="hidden lg:flex">
      <div className="relative w-[804px] flex-col">
        <div className="relative flex">
          <div className="w-[804px] font-['Roboto'] text-[120px] font-black uppercase tracking-[18px] text-white">
            I'm a Software Developer
          </div>
          <div className="ml-[-420px] mt-[41px] h-[94px] w-[396px] font-['Lato'] text-xl font-black uppercase leading-[23.5px] tracking-[4.20px] text-white">
            Front-end
            <br />
            React-Native Developer
            <br />
            React DEveloper
            <br />
            Node developer
            <br />
          </div>
        </div>
        <div className="flex h-[67.80px] w-full items-center justify-between">
          <div className="relative h-[40.12px] w-[37.67px]">
            <Image
              src="/skills/JavaScript.svg"
              alt="JavaScript"
              layout="fill"
            />
          </div>
          <div className="relative h-[61px] w-[37.67px]">
            <Image
              src="/skills/TypeScript.svg"
              alt="TypeScript"
              layout="fill"
            />
          </div>
          <div className="relative h-[40.12px] w-[37.67px]">
            <Image src="/skills/React.svg" alt="React" layout="fill" />
          </div>
          <div className="relative h-[40.12px] w-[37.67px]">
            <Image
              src="/skills/Tailwind_CSS.svg"
              alt="Tailwind_CSS"
              layout="fill"
            />
          </div>
          <div className="relative h-[38px] w-[37.67px]">
            <Image src="/skills/Node_Js.svg" alt="Node_Js" layout="fill" />
          </div>
          <div className="relative h-[38px] w-[37.67px]">
            <Image src="/skills/Graphql.svg" alt="Graphql" layout="fill" />
          </div>
          <div className="relative h-[38px] w-[37.67px]">
            <Image src="/skills/HTML.svg" alt="HTML" layout="fill" />
          </div>
          <div className="relative h-[67.80px] w-[37.67px]">
            <Image src="/skills/CSS.svg" alt="CSS" layout="fill" />
          </div>
          <div className="relative h-[67.80px] w-[37.67px]">
            <Image src="/skills/Mongo_Db.svg" alt="Mongo_Db" layout="fill" />
          </div>
          <div className="relative h-[40.12px] w-[37.67px]">
            <Image
              src="/skills/Styled_Components.svg"
              alt="Styled_Components"
              layout="fill"
            />
          </div>
          <div className="relative h-[40.12px] w-[37.67px]">
            <Image src="/skills/Redux.svg" alt="Redux" layout="fill" />
          </div>
          <div className="relative h-[61.02px] w-[37.67px]">
            <Image src="/skills/Sass.svg" alt="Sass" layout="fill" />
          </div>
        </div>
        <div className="relative mt-[80px] flex w-[514px] flex-col">
          <div className="w-[514px] font-['Lato'] text-2xl font-black uppercase leading-10 tracking-[5.04px] text-white">
            Hi, My name is bruno Rafael.
            <br />
            5+ years of experience{" "}
          </div>
          <div className="mt-[8px] flex h-[30px] w-[180px] items-start justify-start gap-5">
            <Link
              href="mailto:br.brunotk@gmail.com"
              className="relative h-[30px] w-[30px]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src="/Email.svg" layout="fill" alt="social-media-email" />
            </Link>
            <Link
              href="https://www.instagram.com/bruno.rafael18/"
              className="relative h-[30px] w-[30px]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src="/Instagram.svg" layout="fill" alt="social-media" />
            </Link>
            <Link
              href="https://twitter.com/brunorafaell8"
              className="relative h-[30px] w-[30px]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image src="/TwitterX.svg" layout="fill" alt="social-media" />
            </Link>
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
      <div className="absolute left-[0] top-[15%] hidden h-[89px] w-[270px] items-center justify-start gap-1 xl:flex">
        <Image src="/left.svg" layout="fill" alt="left-media" />
      </div>
      <div className="absolute right-[0] top-[5%] hidden h-[89px] w-[270px] items-center justify-start xl:flex">
        <Image src="/right.svg" layout="fill" alt="right-media" />
      </div>
    </div>
  );
};

export default WhoIs;
