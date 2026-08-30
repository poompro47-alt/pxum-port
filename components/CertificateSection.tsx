"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CalendarDays,
  Building2,
  ExternalLink,
  FileText,
  X,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { supabase } from "@/lib/supabase";

/* ================= PDF PREVIEW ================= */

const CertificatePdfPreview = dynamic(
  () => import("@/components/CertificatePdfPreview"),
  {
    ssr: false,

    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-neutral-100">
        <Loader2 className="h-7 w-7 animate-spin text-[#F39306]" />
      </div>
    ),
  }
);

/* ================= TYPES ================= */

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  issued_at: string;
  pdf_url: string;
  storage_path: string | null;
  created_at: string;
};

/* ================= DATE FORMAT ================= */

const formatDate = (date: string) => {
  if (!date) return "Unknown date";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsedDate);
};

/* ================= COMPONENT ================= */

export default function CertificateSection() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  /* ================= FETCH CERTIFICATES ================= */

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("certificates")
          .select("*")
          .order("issued_at", {
            ascending: false,
          });

        if (error) {
          console.error("Certificate error:", error);
          return;
        }

        setCertificates(data || []);
      } catch (error) {
        console.error("Unexpected certificate error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-28 text-[#111111]">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#F39306]/[0.05] blur-[160px]" />

        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#F39306]/[0.04] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ================= HEADER ================= */}

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
          className="mb-16 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F39306]/10 text-[#F39306]">
            <Award className="h-8 w-8" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#F39306]">
            Achievements
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Certificates
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            ใบประกาศนียบัตรและความสำเร็จจากการเรียนรู้
            การพัฒนาโปรเจกต์ และประสบการณ์ด้านเทคโนโลยี
          </p>
        </motion.div>

        {/* ================= LOADING ================= */}

        {loading && (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-[#F39306]" />

              <p className="text-sm text-neutral-500">
                Loading certificates...
              </p>
            </div>
          </div>
        )}

        {/* ================= EMPTY ================= */}

        {!loading && certificates.length === 0 && (
          <div className="py-20 text-center">
            <FileText className="mx-auto h-10 w-10 text-neutral-300" />

            <p className="mt-4 text-neutral-500">
              No certificates found.
            </p>
          </div>
        )}

        {/* ================= CERTIFICATE GRID ================= */}

        {!loading && certificates.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.button
                key={certificate.id}
                type="button"
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setSelectedCertificate(certificate)}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-black/[0.08]
                  bg-white
                  text-left
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:shadow-2xl
                "
              >
                {/* ================= PDF PREVIEW ================= */}

                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#F39306]/20 via-[#F39306]/5 to-neutral-100">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
                    <CertificatePdfPreview
                      pdfUrl={certificate.pdf_url}
                      title={certificate.title}
                    />
                  </div>

                  {/* Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* PDF Badge */}

                  <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#F39306] shadow-sm backdrop-blur">
                    <FileText className="h-3.5 w-3.5" />

                    PDF Certificate
                  </div>

                  {/* Category */}

                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="rounded-full bg-[#F39306] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                      {certificate.category}
                    </span>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#111111]">
                    {certificate.title}
                  </h3>

                  <div className="mt-4 space-y-2.5">
                    {/* ISSUER */}

                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Building2 className="h-4 w-4 shrink-0 text-[#F39306]" />

                      <span className="truncate">
                        {certificate.issuer}
                      </span>
                    </div>

                    {/* DATE */}

                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <CalendarDays className="h-4 w-4 shrink-0 text-[#F39306]" />

                      <span>
                        {formatDate(certificate.issued_at)}
                      </span>
                    </div>
                  </div>

                  {/* VIEW */}

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#111111] transition-colors group-hover:text-[#F39306]">
                    View Certificate

                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* ================= PDF MODAL ================= */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]

              flex
              items-center
              justify-center

              bg-black/70
              p-4
              backdrop-blur-md
            "
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                flex
                h-[85vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-2xl
              "
              onClick={(event) => event.stopPropagation()}
            >
              {/* ================= HEADER ================= */}

              <div className="flex items-center justify-between gap-4 border-b border-black/[0.08] px-4 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F39306]">
                    Certificate
                  </p>

                  <h3 className="mt-1 truncate text-lg font-bold">
                    {selectedCertificate.title}
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={selectedCertificate.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      hidden
                      h-10
                      items-center
                      gap-2
                      rounded-xl
                      bg-[#F39306]
                      px-4
                      text-sm
                      font-semibold
                      text-white
                      transition-transform
                      hover:scale-105
                      sm:flex
                    "
                  >
                    <ExternalLink className="h-4 w-4" />

                    Open
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(null)}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-neutral-100
                      transition-colors
                      hover:bg-[#F39306]
                      hover:text-white
                    "
                    aria-label="Close certificate"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* ================= PDF VIEWER ================= */}

              <div className="relative flex-1 bg-neutral-100">
                <iframe
                  src={selectedCertificate.pdf_url}
                  title={selectedCertificate.title}
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}