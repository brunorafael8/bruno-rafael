import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      className="relative flex w-full flex-col gap-[16px] lg:w-1/2 lg:gap-[32px]"
      id="skills"
    >
      <div className="font-['Roboto'] text-xl font-black tracking-[3px] text-white lg:text-[36px]">
        SKILLS
      </div>
      <div className="flex w-full">
        <div className="flex w-1/2 flex-col items-start justify-start gap-5">
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image
                src="/skills/JavaScript.svg"
                layout="fill"
                alt="JavaScript"
              />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              jAVASCRIPT
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image
                src="/skills/TypeScript.svg"
                layout="fill"
                alt="TypeScript"
              />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              Typescript
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image src="/skills/React.svg" layout="fill" alt="React" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              REACT
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image src="/skills/Graphql.svg" layout="fill" alt="Graphql" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              GRAPHQL
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image src="/skills/Redux.svg" layout="fill" alt="Redux" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              REDUX
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image src="/skills/HTML.svg" layout="fill" alt="Html" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              HTML
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-start justify-start gap-5">
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image
                src="/skills/Styled_Components.svg"
                layout="fill"
                alt="Styled-Components"
              />
            </div>
            <div className="h-[9px] w-[139px] font-['Roboto'] text-[10px]  font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[219px] lg:text-[16px]">
              STYLED-Components
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image
                src="/skills/Mongo_Db.svg"
                layout="fill"
                alt="javascript"
              />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              MONGODB
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image src="/skills/Node_Js.svg" layout="fill" alt="MongoDB" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              NODEJS
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image src="/skills/Sass.svg" layout="fill" alt="Sass" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              SASS
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
              <Image src="/skills/CSS.svg" layout="fill" alt="Css" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              CSS
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <div className="relative h-[29.17px] w-[35px] lg:h-[50px] lg:w-[60px]">
              <Image
                src="/skills/Tailwind_CSS.svg"
                layout="fill"
                alt="Tailwind_CSS"
              />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white lg:h-[19px] lg:w-[118px] lg:text-[16px]">
              TAILWIND
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
