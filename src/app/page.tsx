import { Header } from "~/components";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start gap-8 bg-black px-10 pb-10 pt-8">
      <Header />
      <WhoIs />
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
