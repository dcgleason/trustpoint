import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trustpoint Consulting | Custom-built marketing AI for your business",
  description: "Custom-built AI to market your business. We're a team of AI developers and business experts who help series B through D companies market more effectively with AI.",
  openGraph: {
    images: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
