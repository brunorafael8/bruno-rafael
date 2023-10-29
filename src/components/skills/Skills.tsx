import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="relative flex w-full flex-col lg:hidden">
      <div className="mb-[16px] font-['Roboto'] text-xl font-black tracking-[3px] text-white">
        SKILLS
      </div>
      <div className="flex w-full">
        <div className="flex w-1/2 flex-col items-start justify-start gap-5">
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image
                src="/skills/JavaScript.svg"
                layout="fill"
                alt="JavaScript"
              />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              jAVASCRIPT
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image
                src="/skills/TypeScript.svg"
                layout="fill"
                alt="TypeScript"
              />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              Typescript
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image src="/skills/React.svg" layout="fill" alt="React" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              REACT
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image src="/skills/Graphql.svg" layout="fill" alt="Graphql" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              GRAPHQL
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image src="/skills/Redux.svg" layout="fill" alt="Redux" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              REDUX
            </div>
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image src="/skills/HTML.svg" layout="fill" alt="Html" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              HTML
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-start justify-start gap-5">
          <div className="flex h-[30px] w-[175px] items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image
                src="/skills/Styled_Components.svg"
                layout="fill"
                alt="Styled-Components"
              />
            </div>
            <div className="h-[9px] w-[139px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              STYLED-Components
            </div>
          </div>
          <div className="flex h-[30px] w-[110px] items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image
                src="/skills/Mongo_Db.svg"
                layout="fill"
                alt="javascript"
              />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              MONGODB
            </div>
          </div>
          <div className="flex h-[30px] w-[110px] items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image src="/skills/Node_Js.svg" layout="fill" alt="MongoDB" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              NODEJS
            </div>
          </div>
          <div className="flex h-[30px] w-[110px] items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image src="/skills/Sass.svg" layout="fill" alt="Sass" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              SASS
            </div>
          </div>
          <div className="flex h-[30px] w-[110px] items-center justify-start gap-1.5">
            <div className="relative h-[30px] w-[30px]">
              <Image src="/skills/CSS.svg" layout="fill" alt="Css" />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              CSS
            </div>
          </div>
          <div className="flex h-[29.17px] w-[115px] items-center justify-center gap-1.5">
            <div className="relative h-[29.17px] w-[35px]">
              <Image
                src="/skills/Tailwind_CSS.svg"
                layout="fill"
                alt="Tailwind_CSS"
              />
            </div>
            <div className="h-[9px] w-[74px] font-['Roboto'] text-[10px] font-black uppercase tracking-wider text-white">
              TAILWIND
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
