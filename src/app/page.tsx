import { About, Experiences, Header, Skills, WhoIs } from "~/components";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start gap-8 bg-black px-10 pb-10 pt-8">
      <Header />
      <WhoIs />
      <About />
      <Experiences />
      <Skills />
        </div>
      </div>
    </div>
  );
}
