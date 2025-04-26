import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "A place for developers to share their knowledge",
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex w-full md:w-3xl p-4 flex-1">{children}</main>
      <Footer />
    </>
  );
}
