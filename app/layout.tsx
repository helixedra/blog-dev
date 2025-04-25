import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider dynamic={true}>
      <html lang="en">
        <QueryProvider>
          <body className={`${inter.variable} ${inconsolata.variable}`}>
            {children}
          </body>
        </QueryProvider>
      </html>
    </ClerkProvider>
  );
}
