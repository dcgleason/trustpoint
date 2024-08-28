import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trustpoint Consulting | AI sherpas for your AI journey",
  description: "Cut through the noise and unlock unrealized ROI with Trustpoint Consulting and AI. We deliver AI-powered solutions for start-ups and SMB's...kinda like your own personal 'AI sherpas' for your AI journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
