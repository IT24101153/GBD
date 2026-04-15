"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "services", "about", "solutions", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const onScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = "home";

      for (const section of sections) {
        if (scrollY >= section.offsetTop) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navLinkClass = (id: string) =>
    `transition-colors text-base font-medium ${
      activeSection === id
        ? "text-amber-300"
        : "text-white hover:text-amber-300"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/25 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-amber-300 transition-colors"
            aria-label="Genius Build Developers home"
          >
            <Image
              src="/logo/logo.svg"
              alt="Genius Build Developers"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link href="#home" className={navLinkClass("home")}>
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#services" className={navLinkClass("services")}>
                Services
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#about" className={navLinkClass("about")}>
                About
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link href="#solutions" className={navLinkClass("solutions")}>
                Solutions
              </Link>
            </li>
            <li className="m-0 p-0 hidden md:block">
              <Link
                href="#contact"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 text-black font-semibold hover:brightness-110 transition"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
