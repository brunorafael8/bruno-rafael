import Image from "next/image";
import React from "react";

const header = () => {
  return (
    <div className="relative hidden w-[804px] flex-col lg:flex">
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
          <Image src="/skills/JavaScript.svg" alt="JavaScript" layout="fill" />
        </div>
        <div className="relative h-[61px] w-[37.67px]">
          <Image src="/skills/TypeScript.svg" alt="TypeScript" layout="fill" />
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
    </div>
  );
};

header.propTypes = {};

export default header;
