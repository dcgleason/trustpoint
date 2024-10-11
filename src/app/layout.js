import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trustpoint Consulting | Custom Built Sales & Customer Service AI Tools",
  description: "Custom built sales and customer service AI tools for your business.",
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
