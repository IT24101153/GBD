"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "Custom Web Platforms",
    "Mobile Business Apps",
    "Cloud-Ready Software",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7 text-center lg:text-left">
            <p className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-sm font-semibold text-amber-200">
              Genius Build Developers
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Business Software
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
                {" "}Built to Scale
              </span>
            </h1>
            <p className="text-base lg:text-lg text-white/80 max-w-2xl">
              We design and develop reliable software products that improve
              operations, accelerate growth, and deliver measurable business
              value.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 text-black font-semibold hover:brightness-110 transition"
              >
                Book a Consultation
              </a>
              <a
                href="#solutions"
                className="px-5 py-2.5 rounded-lg border border-white/20 text-white hover:border-amber-300/70 hover:text-amber-200 transition"
              >
                View Solutions
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl">
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src="/logo/logo.svg"
                  alt="Genius Build Developers logo"
                  width={44}
                  height={44}
                />
                <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                  Engineering Dashboard
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl bg-black/20 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Delivery Velocity
                  </p>
                  <p className="text-2xl font-semibold text-amber-200">+43%</p>
                </div>
                <div className="rounded-xl bg-black/20 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Process Automation
                  </p>
                  <p className="text-2xl font-semibold text-orange-300">18 Workflows</p>
                </div>
                <div className="rounded-xl bg-black/20 p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Platform Uptime
                  </p>
                  <p className="text-2xl font-semibold text-white">99.95%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-3xl lg:text-4xl text-white font-bold">
            We build {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide">
            From product strategy to deployment, our team delivers end-to-end
            development for startups, SMEs, and enterprise clients.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mt-15 mx-auto lg:mx-0">
            We focus on practical architecture, secure implementations, and
            maintainable systems that support your business goals in the long
            term.
          </p>
        </div>
      </div>
    </section>
  );
}
