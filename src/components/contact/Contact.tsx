import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InstagramImg from "../../assets/images/Instagram.svg";
import TwitterImg from "../../assets/images/TwitterX.svg";
import GithubImg from "../../assets/images/GitHub.svg";
import EmailImg from "../../assets/images/Email.svg";
import ContactPlaneImg from "../../assets/images/contact-plane.svg";
import supabase from "../../services/supabase";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().min(4).max(100).required(),
  })
  .required();

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { status, error } = await supabase.from("contact").insert([data]);

    if (error) {
      console.log(error);
    }

    if (status === 201) {
      toast("Thank you for your message!", {
        type: "success",
        autoClose: 5000,
      });
      reset();
    }
  };

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
              <a
                href="mailto:br.brunotk@gmail.com"
                className="relative h-[30px] w-[30px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={EmailImg}
                  className="w-full h-full"
                  alt="social-media-email"
                />
              </a>
            </div>
            <div className="flex h-[50px] w-[50px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-2">
              <a
                href="https://www.instagram.com/bruno.rafael18/"
                className="relative h-[30px] w-[30px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={InstagramImg}
                  className="w-full h-full"
                  alt="social-media"
                />
              </a>
            </div>
            <div className="flex h-[50px] w-[50px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-2">
              <a
                href="https://twitter.com/brunorafaell8"
                className="relative h-[30px] w-[30px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={TwitterImg}
                  className="w-full h-full"
                  alt="social-media"
                />
              </a>
            </div>
            <div className="flex h-[50px] w-[50px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-2">
              <a
                href="https://github.com/brunorafael8"
                className="relative h-[30px] w-[36px]"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={GithubImg}
                  className="w-full h-full"
                  alt="social-media"
                />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex h-[374px] w-[380px] flex-col gap-[22px]"
        >
          <div className="float-label-input relative">
            <input
              {...register("name")}
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
                {...register("email")}
                type="email"
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
              {...register("message")}
              id="message"
              placeholder="Your message"
              className="focus:shadow-outline block h-[175.60px] w-full appearance-none rounded-md border border-white bg-[#D10038] px-3 py-3 leading-normal placeholder-white focus:border-black focus:outline-none"
              minLength={4}
            />
          </div>
          <button
            type="submit"
            className="flex h-[42px] w-[376.75px] items-center justify-center gap-2.5 rounded-[5px] bg-black px-[10px] py-6"
            disabled={!isDirty || !isValid}
          >
            {isSubmitting ? (
              <div>Loading</div>
            ) : (
              <>
                {" "}
                <div className="relative h-[12px] w-[12px]">
                  <img
                    src={ContactPlaneImg}
                    className="w-full h-full"
                    alt="contact-plane"
                  />
                </div>
                <div className="font-['Roboto'] text-[15px] font-black tracking-widest text-rose-700">
                  Submit
                </div>
              </>
            )}
          </button>
        </form>
        <div className="font-['IBM Plex Mono'] flex text-xs font-normal text-white lg:hidden">
          BRUNO RAFAEL ©2024{" "}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
