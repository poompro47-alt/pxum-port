"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FileText, Loader2 } from "lucide-react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

/* ================= PDF WORKER ================= */

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

/* ================= TYPES ================= */

type CertificatePdfPreviewProps = {
  pdfUrl: string;
  title: string;
};

/* ================= COMPONENT ================= */

export default function CertificatePdfPreview({
  pdfUrl,
  title,
}: CertificatePdfPreviewProps) {
  const [error, setError] = useState(false);

  /*
    Reset error when certificate changes
  */

  useEffect(() => {
    setError(false);
  }, [pdfUrl]);

  if (error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F39306]/15 via-white to-neutral-100">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F39306]/10">
          <FileText className="h-7 w-7 text-[#F39306]" />
        </div>

        <p className="px-6 text-center text-sm font-medium text-neutral-500">
          {title}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-neutral-100">
      <Document
        file={pdfUrl}
        loading={
          <div className="flex h-full w-full items-center justify-center">
            <Loader2 className="h-7 w-7 animate-spin text-[#F39306]" />
          </div>
        }
        error={
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <FileText className="h-8 w-8 text-[#F39306]" />

            <span className="text-sm text-neutral-500">
              Unable to load preview
            </span>
          </div>
        }
        onLoadError={() => setError(true)}
      >
        <Page
          pageNumber={1}
          width={600}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
          "
        />
      </Document>
    </div>
  );
}