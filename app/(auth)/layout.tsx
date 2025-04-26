import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Blog - Authentication",
  description: "A place for developers to share their knowledge",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
