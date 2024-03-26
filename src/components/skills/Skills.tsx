import JavaScriptImg from "../../assets/images/skills/JavaScript.svg";
import TypeScriptImg from "../../assets/images/skills/TypeScript.svg";
import ReactImg from "../../assets/images/skills/React.svg";
import GraphqlImg from "../../assets/images/skills/Graphql.svg";
import HTMLImg from "../../assets/images/skills/HTML.svg";
import ReduxImg from "../../assets/images/skills/Redux.svg";
import StyledComponentsImg from "../../assets/images/skills/Styled_Components.svg";
import MongoDbImg from "../../assets/images/skills/Mongo_Db.svg";
import NodeJsImg from "../../assets/images/skills/Node_Js.svg";
import SassImg from "../../assets/images/skills/Sass.svg";
import CSSImg from "../../assets/images/skills/CSS.svg";
import TailwindCSSImg from "../../assets/images/skills/Tailwind_CSS.svg";
import NestJsImg from "../../assets/images/skills/nestjs.svg";
import PrismaImg from "../../assets/images/skills/prisma.svg";

const SKILLS_DATA = [
  {
    id: 1,
    name: "JavaScript",
    img: JavaScriptImg,
  },
  {
    id: 2,
    name: "TypeScript",
    img: TypeScriptImg,
  },
  {
    id: 3,
    name: "React",
    img: ReactImg,
  },
  {
    id: 4,
    name: "Graphql",
    img: GraphqlImg,
  },
  {
    id: 5,
    name: "HTML",
    img: HTMLImg,
  },
  {
    id: 6,
    name: "Redux",
    img: ReduxImg,
  },
  {
    id: 7,
    name: "Styled-Components",
    img: StyledComponentsImg,
  },
  {
    id: 8,
    name: "MongoDB",
    img: MongoDbImg,
  },
  {
    id: 9,
    name: "NodeJs",
    img: NodeJsImg,
  },
  {
    id: 10,
    name: "Sass",
    img: SassImg,
  },
  {
    id: 11,
    name: "CSS",
    img: CSSImg,
  },
  {
    id: 12,
    name: "TailwindCSS",
    img: TailwindCSSImg,
  },
  {
    id: 13,
    name: 'NestJS',
    img: NestJsImg
  },
  {
    id: 14,
    name: 'Prisma',
    img: PrismaImg
  }
]

const Skills = () => {
  return (
    <div
      className="relative flex w-full flex-col gap-[16px] lg:w-1/2 lg:gap-[32px]"
      id="skills"
    >
      <div className="font-['Roboto'] text-xl font-black tracking-[3px] text-white lg:text-[36px]">
        SKILLS
      </div>
      <div className="flex flex-wrap w-full">
        {
          SKILLS_DATA.map((i) => (
            <div key={i.id} className="flex flex-row w-1/2 items-center gap-[8px] mb-[16px]">
              <div className="relative h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]">
                <img src={i.img} className="w-full h-full" alt="skills" />
              </div>
              <span className="font-['Roboto'] text-lg font-normal text-white">
                {i.name}
              </span>
            </div>
          ))
        }
       </div>
    </div>
  );
};

export default Skills;
