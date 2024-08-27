import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trustpoint Consulting | AI Integration for Enterprise SaaS",
  description: "Unlock your data's full potential with Trustpoint Consulting. We deliver AI-powered solutions for enterprise SaaS platforms, boosting efficiency by 40% on average. Transform your business securely.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
