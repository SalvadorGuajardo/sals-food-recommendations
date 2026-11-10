import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full max-w-3xl border-b border-zinc-200 px-6 py-4 text-center text-lg font-semibold text-black dark:border-zinc-800 dark:text-zinc-50">
        <Image
          className="h-[100px] w-[100px] dark:invert"
          src="/sals-food-recommendations/burger-sal.svg"
          alt="Sal with a burger."
          width={100}
          height={100}
          priority
        />
      </header>

      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Howdy, welcome to Sal&apos;s food recommendations built with{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              Next.js
            </code>{" "}
            🤠
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            For my list of good eats in San Antonio, Texas, check out my{" "}
            <a
              href="https://maps.app.goo.gl/VhSQJfPYPu1U9cyRA"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              San Antonio Food list
            </a>{" "}
            📍🌮 on Google Maps.{" "}
          </p>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            See a few of my favorites below.{" "}
          </p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-3">
          <a
            href="https://share.google/us4vziv1xKzaKsE70"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border text-center hover:underline"
          >
            <Image
              src="/sals-food-recommendations/flying-saucer-draught-emporium.webp"
              alt=""
              width={300}
              height={200}
              className="aspect-[3/2] w-full object-cover"
            />
            <h2 className="p-2">Flying Saucer Draught Emporium</h2>
          </a>

          <a
            href="https://share.google/McE5yhLaq8v98h76J"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border text-center hover:underline"
          >
            <Image
              src="/sals-food-recommendations/el-mirasol.webp"
              alt=""
              width={300}
              height={200}
              className="aspect-[3/2] w-full object-cover"
            />
            <h2 className="p-2">El Mirasol</h2>
          </a>

          <a
            href="https://share.google/LTRr1FKJ7fsadfYBx"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border text-center hover:underline"
          >
            <Image
              src="/sals-food-recommendations/tycoon-flats.webp"
              alt=""
              width={300}
              height={200}
              className="aspect-[3/2] w-full object-cover"
            />
            <h2 className="p-2">Tycoon Flats</h2>
          </a>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/SalvadorGuajardo/react-nextjs-showcase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="h-[16px] w-4 dark:invert"
              src="/sals-food-recommendations/github.svg"
              alt="GitHub logomark"
              width={16}
              height={16}
            />
            View Source
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://github.com/SalvadorGuajardo/react-nextjs-showcase/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            README.md
          </a>
        </div>
      </main>

      <footer className="w-full max-w-3xl border-t border-zinc-200 px-6 py-4 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/salvadorguajardo/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-950 hover:underline dark:text-zinc-50"
        >
          Salvador Guajardo
        </a>
      </footer>
    </div>
  );
}
