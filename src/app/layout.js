import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trustpoint Consulting | AI solutions for start-ups and small businesses",
  description: "Unlock your data's full potential with Trustpoint Consulting. We deliver AI-powered solutions for start-ups and SMB's.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
