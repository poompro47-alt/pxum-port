"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  issued_at: string;
  pdf_url: string | null;
  storage_path: string | null;
  created_at: string;
};

export default function TestSupabase() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCertificates = async () => {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .order("issued_at", { ascending: false });

      console.log("CERTIFICATES:", data);
      console.log("ERROR:", error);

      if (error) {
        console.error("Supabase error:", error);
        setLoading(false);
        return;
      }

      setCertificates(data ?? []);
      setLoading(false);
    };

    getCertificates();
  }, []);

  if (loading) {
    return <p>Loading certificates...</p>;
  }

  return (
    <div>
      <h1>Certificates</h1>

      {certificates.length === 0 ? (
        <p>No certificates found</p>
      ) : (
        certificates.map((certificate) => (
          <div key={certificate.id}>
            <h2>{certificate.title}</h2>

            <p>Issuer: {certificate.issuer}</p>

            <p>Category: {certificate.category}</p>

            <p>
              Issued:{" "}
              {new Date(certificate.issued_at).toLocaleDateString()}
            </p>

            {certificate.pdf_url && (
              <a
                href={certificate.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
}