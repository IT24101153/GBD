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
    title: "WebHR - HR Management App",
    description:
      "WebHR automates all of your company's HR processes such as Recruitment, Onboarding, Payroll, Time & Attendance, Leaves & PTO, Performance, and much more.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "WebHR Kiosk - Time Clock Kiosk",
    description:
      "WebHR Kiosk is a time clock kiosk that allows you to clock in and out of your work. It is a simple and easy to use app that allows you to clock in and out of your work.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Somezing - AI-Powered Agents",
    description:
      "Somezing is a AI-Powered Agents to Automate Your Workflows. It is a simple and easy to use app that allows you to automate your workflows.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "FileIT - File Sharing App",
    description:
      "FileIT is a file sharing app that allows you to share files with your friends and family. It is a simple and easy to use app that allows you to share files with your friends and family.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
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
                  href="https://ibiimemon.com/lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-orange-300 font-medium text-sm transition-colors inline-block"
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
