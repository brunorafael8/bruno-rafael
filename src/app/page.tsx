import {
  About,
  Experiences,
  Footer,
  Header,
  Skills,
  WhoIs,
} from "~/components";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-8 bg-black px-10 pb-10 pt-8">
      <Header />
      <WhoIs />
      <About />
      <Experiences />
      <Skills />
      <Footer />
    </div>
  );
}
