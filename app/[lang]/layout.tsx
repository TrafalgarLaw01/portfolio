import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "../globals.css"; // Fixed path
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { cn } from "@/lib/utils";
import { Locale, i18n } from "@/i18n-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwriting" });

export const metadata: Metadata = {
  title: "Portlio | Cinematic Digital Experience",
  description: "A premium portfolio for high-end digital experiences.",
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<any>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className="dark">
      <body className={cn(
        "min-h-screen bg-background text-foreground font-sans antialiased",
        inter.variable,
        playfair.variable,
        caveat.variable
      )}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
