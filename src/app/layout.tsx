import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'Zentry Animations',
    template: '%s | Zentry Animations',
  },
  description: 'Explore the latest updates from Zentry\'s Metagame ecosystem with stunning interactive animations, 3D effects and immersive visual experiences bridging human and AI interaction.',
  openGraph: {
    title: 'Zentry Animations - Interactive Metagame Updates',
    description: 'Dive into Zentry\'s Metagame ecosystem with immersive animations and interactive visual experiences showcasing the latest updates in our digital universe.',
    images: [{ url: '/og-image.png' }]
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
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