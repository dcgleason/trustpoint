import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TrustPoint Consulting Group | Premier ServiceNow Solutions for Federal Agencies",
  description: "Specialized ServiceNow consulting and implementation services for government agencies. Expert ITSM, Security Operations, and IRM solutions that meet federal compliance standards.",
  openGraph: {
    title: "TrustPoint Consulting Group | Premier ServiceNow Solutions",
    description: "Specialized ServiceNow consulting and implementation services for government agencies.",
    url: "https://trustpointconsulting.co",
    type: "website",
    images: [
      {
        url: '/tpc-transparent.png',
        width: 60,
        height: 60,
        alt: 'TrustPoint Consulting Group Logo',
      }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
