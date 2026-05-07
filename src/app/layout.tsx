import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const outfitHeading = Outfit({subsets:['latin'],variable:'--font-heading'});

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "St. Clair Coin Laundry | Modern Laundromat in Toronto",
    template: "%s | St. Clair Coin Laundry",
  },

  description:
    "St. Clair Coin Laundry offers clean, reliable, and modern laundry services in Toronto. Enjoy self-service laundry, wash & fold, fast machines, and a welcoming environment.",

  keywords: [
    "laundromat Toronto",
    "coin laundry Toronto",
    "wash and fold Toronto",
    "laundry service Toronto",
    "self service laundry",
    "St. Clair Coin Laundry",
    "Toronto laundromat",
    "fabric care guide",
    "modern laundromat",
    "laundry near me",
  ],

  authors: [
    {
      name: "Haruna Amadu",
      url: "https://www.facebook.com/harunaamadu95",
    },
  ],

  creator: "Haruna Amadu",
  publisher: "St. Clair Coin Laundry",

  metadataBase: new URL("https://stclaircoinlaundry.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "St. Clair Coin Laundry | Modern Laundromat in Toronto",
    description:
      "Clean, fast, and reliable laundry services in Toronto with modern machines and wash & fold solutions.",
    url: "https://stclaircoinlaundry.com",
    siteName: "St. Clair Coin Laundry",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "St. Clair Coin Laundry",
    description:
      "Modern laundry services in Toronto with clean facilities and fast machines.",
    creator: "@harunaamadu95",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Laundry Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth", "antialiased", geistSans.variable, geistMono.variable, "font-sans", roboto.variable, outfitHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
