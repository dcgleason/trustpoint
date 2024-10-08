import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trustpoint Consulting | AI to market your business",
  description: "AI to market your business. We're a team of AI developers and business experts who help series B through D companies market more effectively with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
