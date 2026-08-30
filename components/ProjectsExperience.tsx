"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Code2,
  Sparkles,
  Trophy,
} from "lucide-react";

import { FiGithub } from "react-icons/fi";

type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Micromouse Robot",
    category: "Robotics & Embedded Systems",
    year: "2026",
    description:
      "Autonomous maze-solving robot developed using embedded systems, sensors, motor control, PID and pathfinding algorithms.",
    image: "/projects/micromouse.png",
    technologies: [
      "ESP32-S3",
      "C++",
      "PID",
      "Flood Fill",
      "IR Sensor",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    title: "Verdant",
    category: "Smart Agriculture",
    year: "2026",
    description:
      "IoT monitoring system for collecting and displaying soil moisture, temperature and humidity data in real time.",
    image: "/projects/verdant.png",
    technologies: [
      "Arduino",
      "ESP32",
      "MQTT",
      "Flutter",
    ],
    github: "#",
  },

  {
    title: "Color Detection",
    category: "Computer Vision",
    year: "2026",
    description:
      "Real-time color detection system using OpenCV and HSV color ranges for detecting objects through a camera.",
    image: "/projects/color-detection.png",
    technologies: [
      "Python",
      "OpenCV",
      "HSV",
      "Computer Vision",
    ],
    github: "#",
  },

  {
    title: "Smart Vehicle Pathfinding",
    category: "Game Development",
    year: "2025",
    description:
      "An intelligent vehicle navigation system using pathfinding, vehicle control and path visualization.",
    image: "/projects/pathfinding.png",
    technologies: [
      "Luau",
      "Roblox",
      "Pathfinding",
      "Vehicle AI",
    ],
    github: "#",
  },
];

const experiences = [
  {
    year: "2024",
    title: "Started Programming",
    description:
      "เริ่มต้นเรียนรู้พื้นฐานการเขียนโปรแกรมและพัฒนาโปรเจกต์ด้วยตนเอง",
  },
  {
    year: "2025",
    title: "Explored Hardware & IoT",
    description:
      "เริ่มศึกษา Arduino, Sensor และการเชื่อมต่อระหว่าง Hardware กับ Software",
  },
  {
    year: "2025",
    title: "Developed Smart Systems",
    description:
      "พัฒนาโปรเจกต์ด้าน Automation, IoT และระบบที่สามารถทำงานร่วมกับข้อมูลแบบ Real-time",
  },
  {
    year: "2026",
    title: "Robotics & Embedded Systems",
    description:
      "พัฒนาความรู้ด้าน ESP32, Motor Control, Sensor Processing และ Algorithm",
  },
];

const ProjectsExperience = () => {
  const featuredProject = projects.find(
    (project) => project.featured,
  );

  const otherProjects = projects.filter(
    (project) => !project.featured,
  );

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-40 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#F39306]/5 blur-[120px]" />

        <div className="absolute right-[-300px] top-[30%] h-[500px] w-[500px] rounded-full bg-[#F39306]/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F39306]/10 text-[#F39306]">
              <Code2 className="h-5 w-5" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F39306]">
              Projects & Experience
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            โปรเจกต์และประสบการณ์
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            ผลงาน โปรเจกต์ และประสบการณ์ที่ผมได้เรียนรู้
            จากการทดลอง พัฒนา และแก้ไขปัญหาจริง
          </p>
        </motion.div>

        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}

        {featuredProject && (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-black/[0.08] bg-neutral-950"
          >
            {/* Featured badge */}

            <div className="absolute left-6 top-6 z-20">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-[#F39306]" />

                FEATURED PROJECT
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              {/* IMAGE */}

              <div className="relative min-h-[320px] overflow-hidden lg:min-h-[520px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Year */}

                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm text-white/70">
                  <CalendarDays className="h-4 w-4 text-[#F39306]" />

                  {featuredProject.year}
                </div>
              </div>

              {/* CONTENT */}

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F39306]">
                  {featuredProject.category}
                </p>

                <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-5 leading-relaxed text-neutral-400">
                  {featuredProject.description}
                </p>

                {/* TECHNOLOGIES */}

                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-neutral-300"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                {/* BUTTONS */}

                <div className="mt-10 flex flex-wrap gap-4">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#F39306] hover:text-white"
                    >
                      <FiGithub className="h-4 w-4" />

                      GitHub
                    </a>
                  )}

                  {featuredProject.demo && (
                    <a
                      href={featuredProject.demo}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F39306] hover:text-[#F39306]"
                    >
                      View Project

                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* IMAGE */}

              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* YEAR */}

                <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  {project.year}
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F39306]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-neutral-900">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500">
                  {project.description}
                </p>

                {/* TECH */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-[#F39306]/10 px-3 py-1.5 text-xs font-medium text-[#c96f00]"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                {/* ACTION */}

                <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-5">
                  <a
                    href={project.github ?? "#"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 transition hover:text-[#F39306]"
                  >
                    <FiGithub className="h-4 w-4" />

                    GitHub
                  </a>

                  <a
                    href={project.demo ?? "#"}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] transition hover:border-[#F39306] hover:bg-[#F39306] hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <div className="mt-32">
          {/* Header */}

          <div className="mb-14 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F39306]/10 text-[#F39306]">
              <Trophy className="h-6 w-6" />
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#F39306]">
              Experience
            </p>

            <h3 className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl">
              ประสบการณ์และการเรียนรู้
            </h3>
          </div>

          {/* Timeline */}

          <div className="relative mx-auto max-w-3xl">
            {/* Line */}

            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-[#F39306] via-[#F39306]/30 to-transparent sm:left-1/2" />

            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={`${experience.year}-${experience.title}`}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className={`
                      relative
                      pl-12
                      sm:grid
                      sm:grid-cols-2
                      sm:pl-0
                      ${
                        isLeft
                          ? "sm:text-right"
                          : "sm:text-left"
                      }
                    `}
                  >
                    {/* DOT */}

                    <div className="absolute left-[12px] top-2 h-4 w-4 rounded-full border-4 border-white bg-[#F39306] shadow-[0_0_0_4px_rgba(243,147,6,0.12)] sm:left-1/2 sm:-translate-x-1/2" />

                    {/* CONTENT */}

                    <div
                      className={
                        isLeft
                          ? "sm:col-start-1 sm:pr-12"
                          : "sm:col-start-2 sm:pl-12"
                      }
                    >
                      <span className="text-sm font-bold text-[#F39306]">
                        {experience.year}
                      </span>

                      <h4 className="mt-2 text-xl font-bold text-neutral-900">
                        {experience.title}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                        {experience.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsExperience;