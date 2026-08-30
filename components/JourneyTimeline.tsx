"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Code2,
  Cpu,
  Trophy,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

type TimelineEvent = {
  id: number;
  date: string;
  year: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  icon: "code" | "hardware" | "competition" | "project";
  image: string;
};

const events: TimelineEvent[] = [
  {
    id: 1,
    date: "January 2024",
    year: "2024",
    title: "Started My Programming Journey",
    description:
      "เริ่มต้นศึกษา Programming และพัฒนาทักษะด้านการเขียนโปรแกรมด้วยตนเอง",
    category: "Programming",
    technologies: ["Python", "C", "Problem Solving"],
    icon: "code",
    image: "/timeline/programming.jpg",
  },
  {
    id: 2,
    date: "August 2025",
    year: "2025",
    title: "Started Hardware Development",
    description:
      "เริ่มพัฒนาโปรเจกต์ที่เชื่อมต่อระหว่าง Software และ Hardware",
    category: "Hardware",
    technologies: ["Arduino", "ESP32", "Sensors"],
    icon: "hardware",
    image: "/timeline/hardware.jpg",
  },
  {
    id: 3,
    date: "February 2026",
    year: "2026",
    title: "Micromouse Development",
    description:
      "พัฒนาหุ่นยนต์ที่สามารถค้นหาและแก้เขาวงกตแบบอัตโนมัติ",
    category: "Robotics",
    technologies: ["ESP32", "C++", "PID", "IR Sensors"],
    icon: "project",
    image: "/timeline/micromouse.jpg",
  },
  {
    id: 4,
    date: "August 2026",
    year: "2026",
    title: "Building My Portfolio",
    description:
      "สร้างเว็บไซต์ Portfolio เพื่อรวบรวมผลงาน ทักษะ และเส้นทางการเรียนรู้",
    category: "Project",
    technologies: ["Next.js", "React", "Tailwind", "Motion"],
    icon: "project",
    image: "/timeline/portfolio.jpg",
  },
];

const iconMap = {
  code: Code2,
  hardware: Cpu,
  competition: Trophy,
  project: Rocket,
};

export default function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#F39306]/[0.04] blur-[140px]" />

        <div className="absolute bottom-0 right-[-200px] h-[500px] w-[500px] rounded-full bg-[#F39306]/[0.05] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F39306]">
            My Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            เส้นทางของผม
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            บันทึกเส้นทางการเรียนรู้ การพัฒนาโปรเจกต์
            และประสบการณ์ด้านเทคโนโลยีของผม
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-neutral-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-20">
            {events.map((event, index) => {
              const Icon = iconMap[event.icon];

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -50 : 50,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-[56px_1fr]
                    gap-6

                    md:grid-cols-2
                    md:gap-16
                  "
                >
                  {/* ================= TIMELINE DOT ================= */}

                  <div
                    className="
                      absolute
                      left-0
                      top-7
                      z-10

                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-full
                      border-4
                      border-white
                      bg-[#F39306]

                      text-white
                      shadow-lg

                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* ================= LEFT SIDE ================= */}

                  <div
                    className={`
                      hidden md:block
                      ${isLeft ? "" : "md:order-2"}
                    `}
                  >
                    {isLeft && (
                      <TimelineCard event={event} />
                    )}
                  </div>

                  {/* ================= RIGHT SIDE ================= */}

                  <div
                    className={`
                      ${isLeft ? "md:order-2" : ""}
                    `}
                  >
                    {/* Mobile */}
                    <div className="md:hidden">
                      <TimelineCard event={event} />
                    </div>

                    {/* Desktop */}
                    {!isLeft && (
                      <div className="hidden md:block">
                        <TimelineCard event={event} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TIMELINE CARD
========================================================= */

function TimelineCard({
  event,
}: {
  event: TimelineEvent;
}) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-black/[0.08]
        bg-white
        shadow-sm
        transition-shadow
        duration-300
        hover:shadow-2xl
      "
    >
      {/* ================= IMAGE ================= */}

      <div className="relative h-52 overflow-hidden bg-neutral-100">
        <motion.img
          src={event.image}
          alt={event.title}
          className="
            h-full
            w-full
            object-cover
          "
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#F39306] shadow-sm backdrop-blur">
            {event.category}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <CalendarDays className="h-4 w-4 text-[#F39306]" />

          {event.date}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-xl font-bold text-[#111111]">
          {event.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
          {event.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {event.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-[#F39306]/20
                bg-[#F39306]/[0.06]
                px-3
                py-1.5
                text-xs
                font-medium
                text-[#F39306]
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Explore */}
        <button
          className="
            mt-6
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#111111]
            transition-colors
            hover:text-[#F39306]
          "
        >
          Explore Event

          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}