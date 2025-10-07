import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ViewTransitions } from "next-view-transitions";
import TabTitleChanger from "@/components/tab-title-changer";

gsap.registerPlugin(SplitText);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forzhenstudios.com"),

  title: {
    default: "Forzhen Studios — Web Design & Development | Game Development",
    template: "%s | Forzhen Studios",
  },
  description:
    "Forzhen Studios creates sleek platforms, tools, and interactive entertainment. Specializing in web design, development, and game technology.",

  keywords: [
    "web design",
    "web development",
    "game development",
    "interactive entertainment",
    "software studio",
    "Forzhen Studios",
  ],

  authors: [{ name: "Forzhen Studios" }],
  creator: "Forzhen Studios",
  publisher: "Forzhen Studios",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Forzhen Studios — Web Design & Development | Game Development",
    description:
      "Forzhen Studios creates sleek platforms, tools, and interactive entertainment. Specializing in web design, development, and game technology.",
    url: "https://forzhenstudios.com",
    siteName: "Forzhen Studios",
    images: [
      {
        url: "https://forzhenstudios.com/studio_logo_white.png",
        width: 1000,
        height: 1205,
        alt: "Forzhen Studios - Web & Game Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Forzhen Studios",
    description:
      "Web design & development | Game development Our temporary landing site while we build out our full studio site.",
    images: ["https://forzhenstudios.com/studio_logo_white.png"],
    creator: "@forzhenstudios",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <TabTitleChanger />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
