import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Sidebar from "~/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ali Omrani",
  description: "I am a Data/Software Engineer based in CA. This is my personal website.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <div className="flex">
          <Sidebar />
          <main className="w-full">
            <div className="w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-neutral-50/[0.2]">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
