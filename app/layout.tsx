import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Decoded | Complex tech. Simply explained.",
  description: "Explore technical concepts through everyday analogies, friendly visuals, and explanations that actually click.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
