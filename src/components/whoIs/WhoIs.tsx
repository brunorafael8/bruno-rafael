import LeftImg from '../../assets/images/left.svg';
import RightImg from '../../assets/images/right.svg';
import InstagramImg from '../../assets/images/Instagram.svg';
import TwitterImg from '../../assets/images/TwitterX.svg';
import GithubImg from '../../assets/images/GitHub.svg';
import EmailImg from '../../assets/images/Email.svg';
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
            <img
              src={JavaScriptImg}
              alt="JavaScript"
             className="w-full h-full"
            />
          </div>
          <div className="relative h-[61px] w-[37.67px]">
            <img
              src={TypeScriptImg}
              alt="TypeScript"
             className="w-full h-full"
            />
          </div>
          <div className="relative h-[40.12px] w-[37.67px]">
            <img src={ReactImg} alt="React" className="w-full h-full" />
          </div>
          <div className="relative h-[40.12px] w-[37.67px]">
            <img
              src={TailwindCSSImg}
              alt="Tailwind_CSS"
             className="w-full h-full"
            />
          </div>
          <div className="relative h-[38px] w-[37.67px]">
            <img src={NodeJsImg} alt="Node_Js" className="w-full h-full" />
          </div>
          <div className="relative h-[38px] w-[37.67px]">
            <img src={GraphqlImg} alt="Graphql" className="w-full h-full" />
          </div>
          <div className="relative h-[38px] w-[37.67px]">
            <img src={HTMLImg} alt="HTML" className="w-full h-full" />
          </div>
          <div className="relative h-[67.80px] w-[37.67px]">
            <img src={CSSImg} alt="CSS" className="w-full h-full" />
          </div>
          <div className="relative h-[67.80px] w-[37.67px]">
            <img src={MongoDbImg} alt="Mongo_Db" className="w-full h-full" />
          </div>
          <div className="relative h-[40.12px] w-[37.67px]">
            <img
              src={StyledComponentsImg}
              alt="Styled_Components"
             className="w-full h-full"
            />
          </div>
          <div className="relative h-[40.12px] w-[37.67px]">
            <img src={ReduxImg} alt="Redux" className="w-full h-full" />
          </div>
          <div className="relative h-[61.02px] w-[37.67px]">
            <img src={SassImg} alt="Sass" className="w-full h-full" />
          </div>
        </div>
        <div className="relative mt-[80px] flex w-[514px] flex-col">
          <div className="w-[514px] font-['Lato'] text-2xl font-black uppercase leading-10 tracking-[5.04px] text-white">
            Hi, My name is bruno Rafael.
            <br />
            5+ years of experience{" "}
          </div>
          <div className="mt-[8px] flex h-[30px] w-[180px] items-start justify-start gap-5">
            <a
              href="mailto:br.brunotk@gmail.com"
              className="relative h-[30px] w-[30px]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={EmailImg} className="w-full h-full" alt="social-media-email" />
            </a>
            <a
              href="https://www.instagram.com/bruno.rafael18/"
              className="relative h-[30px] w-[30px]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={InstagramImg} className="w-full h-full" alt="social-media" />
            </a>
            <a
              href="https://twitter.com/brunorafaell8"
              className="relative h-[30px] w-[30px]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={TwitterImg} className="w-full h-full" alt="social-media" />
            </a>
            <a
              href="https://github.com/brunorafael8"
              className="relative h-[30px] w-[36px]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={GithubImg} className="w-full h-full" alt="social-media" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute left-[0] top-[15%] hidden h-[89px] w-[270px] items-center justify-start gap-1 xl:flex">
        <img src={LeftImg} className="w-full h-full" alt="left-media" />
      </div>
      <div className="absolute right-[0] top-[5%] hidden h-[89px] w-[270px] items-center justify-start xl:flex">
        <img src={RightImg} className="w-full h-full" alt="right-media" />
      </div>
    </div>
  );
};

export default WhoIs;
