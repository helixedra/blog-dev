import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body
          className={`${inter.variable} ${inconsolata.variable} flex flex-col w-full h-screen max-w-4xl justify-start mx-auto`}
        >
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
