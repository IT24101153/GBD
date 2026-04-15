import Image from "next/image";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              About Genius Build Developers
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Engineering software that solves real business problems
            </h2>
            <p className="text-white/80 text-lg">
              Genius Build Developers is a software development company focused
              on business outcomes. We collaborate with stakeholders, map
              operational challenges, and build software products that improve
              productivity, visibility, and decision-making.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-bold text-amber-200">20+</p>
                <p className="text-sm text-white/70">Projects Delivered</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-bold text-amber-200">8+</p>
                <p className="text-sm text-white/70">Industry Domains</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-2xl font-bold text-amber-200">99.9%</p>
                <p className="text-sm text-white/70">Service Reliability</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
            <Image
              src="/assets/illustration.png"
              alt="Genius Build Developers workflow and architecture"
              width={800}
              height={800}
              className="object-cover mx-auto"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
