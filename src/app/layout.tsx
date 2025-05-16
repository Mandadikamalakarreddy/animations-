import type { Metadata } from "next";
import "./globals.css";

const metadata: Metadata = {
  title: "Animations",
  description: "A collection of animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-general bg-[#dfdff0]">
        {children}
      </body>
    </html>
  );
}
