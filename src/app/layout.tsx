import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunder Kumar — Software Engineer Portfolio",
  description:
    "Interactive portfolio of Sunder Kumar — Software Engineer, BsCs student building practical AI applications with RAG, LangChain, PyTorch, and Generative AI.",
  keywords: [
    "Sunder Kumar",
    "Software Engineer",
    "Portfolio",
    "Software Development",
    "Python",
    "JavaScript",
    "TypeScript",
    "Python",
  ],
  verification: {
    google: "MXtNkiXCN3Nsmw-FQvYl11MacmjOmmAhSR_V3AZve1c",
  },
  openGraph: {
    title: "Sunder Kumar — Software Engineer Portfolio",
    description:
      "Explore Sunder Kumar's interactive Mac-style portfolio featuring software development projects, experience, and achievements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a1a] text-white antialiased">{children}</body>
    </html>
  );
}
