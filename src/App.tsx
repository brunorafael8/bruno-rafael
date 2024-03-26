import {
  About,
  Contact,
  Experiences,
  Footer,
  Header,
  Skills,
  WhoIs,
} from "./components";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-start gap-8 bg-black px-10 pb-10 pt-8 lg:px-20">
      <Header />
      <WhoIs />
      <div className="flex w-full max-w-[1397px] flex-col gap-[32px] self-center lg:mt-40 xl:flex-row">
        <About />
        <Skills />
      </div>
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}
