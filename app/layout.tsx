import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solomon Aragaw | Universe Portfolio",
  description: "Interstellar 3D Portfolio Experience",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed inset-0 z-0 bg-[#00050a] overflow-hidden">
          <div className="absolute inset-[-50%] stardust opacity-30 animate-galaxy" />
          <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-blue-900/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-500/40 rounded-full blur-[120px] animate-flare" />
          <div className="absolute bottom-[-5%] left-[5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-flare" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/4 left-0 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent comet pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-blue-900/20 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}