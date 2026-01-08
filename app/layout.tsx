import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import MenuBar from "@/src/components/Header/MenuBar";
import Links from "@/src/components/Links/Links";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

import ServiceWorkerRegister from "@/src/components/ServiceWorkerRegister";
import InstallButton from "@/src/components/InstallButton";

export const metadata: Metadata = {
  title: "webGhoul",
  description: "webGhoul Portfolio",
  keywords: ["webGhoul", "portfolio", "web developer", "web designer", "web developer", "web designer", "web developer", "web designer", "web developer", "web designer", "mahmoud salama", "salama"],
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'webGhoul',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ServiceWorkerRegister />
          <div className="fixed bottom-4 right-4 z-[9999]">
            <InstallButton />
          </div>
          <Header />
          <Links />
          {children}
          <Footer />
          <MenuBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
