import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import components
import Navbar from "./components/navbar/Navbar";

// import css
import "./globals.css";
import { MockProvider } from "./mockProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Hub",
  description: "Coding Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <div className="container">
          <div className="wrapper">
            <MockProvider>{children}</MockProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
