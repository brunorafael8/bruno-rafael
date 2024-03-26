import BestDayImg from "../../assets/images/bestDay.svg";

const Footer = () => {
  return (
    <div className="relative flex w-full max-w-[1397px] flex-col justify-center">
      <button className="mb-[32px] flex h-16 w-56 items-center justify-center gap-2.5 self-center rounded-[5px] bg-rose-700 px-[39px] py-[18px] lg:hidden">
        <div className="font-['Roboto'] text-2xl font-black tracking-[3.60px] text-white">
          Let’s talk
        </div>
      </button>
      <div className="font-['IBM Plex Mono'] absolute bottom-0 left-0 right-0 z-10 w-auto text-center text-xs font-normal text-white lg:hidden">
        BRUNO RAFAEL ©2022
      </div>
      <div className="fixed bottom-[32px] right-[32px] hidden h-[100px] w-[275px] bg-rose-700 px-[28px] py-[22px] lg:flex">
        <div className="flex w-[199px] items-start">
          <div className="relative h-[49px] w-[61px]">
            <img src={BestDayImg} className="w-full h-full" alt="social-media" />
          </div>
          <div className="flex h-[38px] flex-col">
            <span className="font-['Lato'] text-lg font-normal leading-4 text-white">
              Bruno Rafael
              <br />
              <span className="font-['Lato'] text-sm font-normal text-black">
                @brunorafael8
              </span>
            </span>
          </div>
        </div>
        <div className="absolute left-[201px] top-[64px] h-[21px] w-[69px] font-['Lato'] text-lg font-normal text-white">
          ©2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
