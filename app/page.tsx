"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FiGithub } from "react-icons/fi";
import TestSupabase from "@/components/PublicTable";
import {
  SiNextdotjs,
  SiReact,
  SiC,
  SiCplusplus,
  SiPython,
  SiLua,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiSupabase,
  SiMysql,
  SiFirebase,
  SiArduino,
  SiEspressif,
} from "react-icons/si";
import {
  Code,
  GraduationCap,
  Target,
  BrainCircuit,
  User,
} from "lucide-react";

import BackgroundCurve from "@/components/Wave_Background";
import SocialConnector from "@/components/Social_Connector";
import WhiteWave from "@/components/White_Wave";
import RedWave from "@/components/Red_Wave";
import JourneyTimeline from "@/components/JourneyTimeline";
import CertificateSection from "@/components/CertificateSection";
import MinecraftParticles from "@/components/MinecraftParticles";
import MinecraftClickEffect from "@/components/MinecraftClickEffect";
import MusicPlayer from "@/components/MusicPlayer";

type SkillCardProps = {
  name: string;
  icon: ReactNode;
};

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="group flex h-[130px] w-[180px] shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border border-black/[0.08] bg-white px-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F39306]/50 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F39306]/10 text-3xl text-[#F39306] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F39306] group-hover:text-white">
        {icon}
      </div>
      <span className="text-sm font-semibold text-neutral-800">{name}</span>
    </div>
  );
};

const skills = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Lua", icon: <SiLua /> },
  {
    name: "Luau",
    icon: <span className="text-base font-black tracking-tight">Luau</span>,
  },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
];

const dataSkills = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Firebase", icon: <SiFirebase /> },
];

const hardwareSkills = [
  { name: "Arduino", icon: <SiArduino /> },
  { name: "ESP32", icon: <SiEspressif /> },
];

const socialLinks = [
  { icon: <FiGithub />, href: "https://github.com/poompro47-alt", label: "GitHub" },
  { icon: <Code />, href: "#", label: "Portfolio" },
  { icon: <GraduationCap />, href: "https://www.mrv.ac.th/", label: "Education" },
];

const Page = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <MinecraftClickEffect />
      <MusicPlayer />
      <div className="relative overflow-hidden bg-gradient-to-b from-[#050102] via-[#120305] via-[45%] to-[#5a0815] text-white">
        <MinecraftParticles />
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-[35%] h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-red-800/20 blur-[180px]" />
          <div className="absolute left-1/2 top-[65%] h-[900px] w-[1400px] -translate-x-1/2 rounded-full bg-red-900/20 blur-[220px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <section className="relative z-10 isolate h-screen">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <BackgroundCurve />
          </div>
          <div className="pointer-events-none absolute -bottom-32 left-1/2 z-[1] h-[260px] w-[500px] -translate-x-1/2 rounded-full bg-red-700/30 blur-[90px] sm:h-[350px] sm:w-[800px] sm:blur-[120px] lg:-bottom-60 lg:h-[500px] lg:w-[1200px] lg:blur-[160px]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-2 py-6 md:flex-row md:justify-center md:gap-2 md:py-10 lg:gap-6">
            <div className="flex shrink-0 flex-col items-center justify-end md:h-[80%] lg:h-[85%]">
              <div className="relative h-[48vh] w-auto sm:h-[52vh] md:h-[75%] lg:h-[78%]">
                <Image
                  src="/portrait.png"
                  alt="My portrait"
                  width={420}
                  height={700}
                  priority
                  className="h-full w-auto object-contain"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                  }}
                />
              </div>

<div className="relative mt-10 shrink-0 text-center sm:mt-12 lg:mt-16">
  {/* Name Container */}
  <div className="relative inline-block">
    {/* Creeper sitting on letter P */}
    <motion.div
      className="
        pointer-events-none
        absolute
        bottom-[75%]
        left-[-8px]
        z-20

        h-[55px]
        w-[55px]

        sm:left-[-10px]
        sm:h-[70px]
        sm:w-[70px]

        lg:left-[-14px]
        lg:h-[90px]
        lg:w-[90px]
      "
      animate={{
        y: [0, -4, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/creeper.png"
        alt="Cartoon Creeper"
        fill
        sizes="(max-width: 640px) 55px, (max-width: 1024px) 70px, 90px"
        className="object-contain object-bottom"
      />
    </motion.div>

    {/* Name Glow */}
    <h1
      className="
        absolute
        inset-0
        text-2xl
        font-bold
        leading-tight
        text-red-500
        opacity-60
        blur-xl

        sm:text-4xl
        md:text-4xl
        lg:text-6xl
      "
    >
      Poomipat Suksampan
    </h1>

    {/* Name */}
    <h1
      className="
        relative
        text-2xl
        font-bold
        leading-tight

        sm:text-4xl
        md:text-4xl
        lg:text-6xl
      "
    >
      Poomipat Suksampan
    </h1>
  </div>
</div>
            </div>

            <div className="flex shrink-0 items-center md:-ml-6 md:h-[80%] lg:-ml-10 lg:h-[85%]">
              <SocialConnector
                direction="row"
                className="md:hidden"
                items={socialLinks}
              />
              <div className="hidden md:block lg:scale-125">
                <SocialConnector direction="column" items={socialLinks} />
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 min-h-screen px-6 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-red-700/10 blur-[150px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mb-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#F39306]">
                About Me
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                เกี่ยวกับผม
              </h2>
              <div className="mt-4 h-px w-full max-w-xl bg-white/10" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-4 border-b border-white/10 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#F39306]">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">ชื่อ</p>
                  <p className="mt-1 font-semibold text-white">
                    นายภูมิพัฒน์ สุขสัมพันธ์
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-white/10 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#F39306]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">ระดับการศึกษา</p>
                  <p className="mt-1 font-semibold text-white">
                    มัธยมศึกษาปีที่ 5
                    <span className="mx-2 text-neutral-600">•</span>
                    <span className="font-normal text-neutral-300">
                      หลักสูตรแผนการเรียน (AI)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b border-white/10 py-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#F39306]">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">ความสนใจ</p>
                  <p className="mt-1 max-w-2xl leading-relaxed text-neutral-300">
                    ด้าน Programming / การนำปัญญาประดิษฐ์ไปใช้ประโยชน์ /
                    การสร้างหุ่นยนต์และประยุกต์ใช้
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-12">
              <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-[#F39306]/20 bg-[#F39306]/[0.06] sm:min-h-[260px]">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F39306]/10 blur-3xl" />

                <div className="relative z-10 flex items-start gap-3 px-5 py-7 pr-[150px] sm:gap-4 sm:px-8 sm:py-9 sm:pr-[300px] lg:pr-[340px]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F39306]/15 text-[#F39306] sm:h-11 sm:w-11">
                    <Target className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 sm:text-sm">
                      เป้าหมาย
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl">
                      คณะวิศวกรรมศาสตร์
                      <br />
                      <span className="text-[#F39306]">คอมพิวเตอร์ (CE)</span>
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-neutral-400 sm:text-sm">
                      มุ่งมั่นพัฒนาความรู้ด้านการเขียนโปรแกรม ปัญญาประดิษฐ์
                      และเทคโนโลยี เพื่อนำไปประยุกต์ใช้ในการสร้างสิ่งที่เป็นประโยชน์
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 right-0 z-20 block h-[230px] w-[170px] sm:hidden">
                <Image
                  src="/peek-2.png"
                  alt="Poom holding the goal card"
                  fill
                  sizes="170px"
                  className="object-contain object-right-bottom"
                />
              </div>

              <div className="pointer-events-none absolute bottom-0 right-0 z-20 hidden sm:block sm:h-[280px] sm:w-[250px] md:h-[300px] md:w-[270px] lg:h-[330px] lg:w-[300px]">
                <Image
                  src="/peek-1.png"
                  alt="Poom holding the goal card"
                  fill
                  sizes="(max-width: 768px) 250px, (max-width: 1024px) 270px, 300px"
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 -mb-px">
          <WhiteWave />
        </div>
      </div>

      <section className="relative z-10 overflow-hidden bg-white text-[#111111]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F39306]">
              Skills
            </p>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
              ทักษะที่ผมมี
            </h2>
          </div>

          <div className="mt-20">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F39306]">
                Data & Database
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#111111] sm:text-4xl">
                Data Analysis & Database
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                เทคโนโลยีสำหรับจัดการข้อมูล ฐานข้อมูล และ Backend
                ที่ผมได้เรียนรู้และนำมาใช้งาน
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {dataSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>

          <div className="mt-24">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F39306]">
                Hardware
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#111111] sm:text-4xl">
                Hardware & Embedded Systems
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                การพัฒนาอุปกรณ์อัจฉริยะ ระบบ Embedded และการเชื่อมต่อ Hardware
                กับ Software
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              {hardwareSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>

          <div className="mt-24">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F39306]">
                Technologies
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#111111] sm:text-4xl">
                Technologies & Skills
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                เทคโนโลยีและภาษาโปรแกรมที่ผมได้ศึกษา
                และนำมาใช้ในการพัฒนาโปรเจกต์
              </p>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-32" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-32" />

              <motion.div
                className="flex w-max gap-4 py-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {skills.map((skill) => (
                  <SkillCard
                    key={`first-${skill.name}`}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
                {skills.map((skill) => (
                  <SkillCard
                    key={`second-${skill.name}`}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </motion.div>
            </div>

            <CertificateSection />
            <JourneyTimeline />
          </div>
        </div>

        <div className="relative -mb-px mt-10">
          <RedWave />
        </div>
      </section>

      <section className="relative bg-[#5a0815] px-6 pb-28 pt-10 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-red-700/20 blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            ทั้งหมดนี้ผมทําด้วยใจ กระผมขอขอบคุณครับ
          </h2>

          <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-neutral-400">
            <span className="font-semibold text-white">pxum.dev</span>
            <span className="text-[#F39306]">•</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;