import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "We build tailored web and mobile applications that fit your processes, teams, and growth targets.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Business Process Automation",
    description:
      "Automate repetitive workflows, approvals, and reporting pipelines to save time and reduce manual errors.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "SaaS Product Engineering",
    description:
      "Launch secure, scalable, and user-friendly SaaS platforms from concept to production with ongoing support.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "Cloud Modernization",
    description:
      "Upgrade legacy systems with cloud-native architecture, API integrations, and resilient deployment pipelines.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-[#1a1d24] via-[#272b35] to-[#1a1d24] backdrop-blur-sm rounded-xl p-6 border-t-2 border-amber-500/60 hover:shadow-2xl hover:shadow-orange-950/40 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{card.description}</p>
                <Link
                  href="#contact"
                  className="text-amber-300 hover:text-orange-300 font-medium text-sm transition-colors inline-block"
                >
                  DISCUSS YOUR PROJECT →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
