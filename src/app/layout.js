import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marcos Haul Solutions",
  description:
    "Expertos en limpieza y recogida de escombros en Miami. Eficiencia, profesionalismo y sostenibilidad",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Marcos Haul Solutions</title>
        <meta
          name="description"
          content="Experts in cleaning and debris collection in Miami. Efficiency, professionalism and sustainability."
        />
        <link rel="icon" href="/logoicon.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="title" content="Marcos Haul Solutions" />
        <meta name="theme-color" content="#56bd56" />
        <meta
          name="description"
          content="Experts in cleaning and debris collection in Miami. Efficiency, professionalism and sustainability."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://morales-clean-solutions-web.vercel.app"
        />
        <meta property="og:title" content="Marcos Haul Solutions" />
        <meta
          property="og:description"
          content="Experts in cleaning and debris collection in Miami. Efficiency, professionalism and sustainability."
        />
        <meta
          property="og:image"
          content="https://morales-clean-solutions-web.vercel.app/MSC_SOCIAL_BANNER.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://morales-clean-solutions-web.vercel.app"
        />
        <meta property="twitter:title" content="Marcos Haul Solutions" />
        <meta
          property="twitter:description"
          content="Experts in cleaning and debris collection in Miami. Efficiency, professionalism and sustainability."
        />
        <meta
          property="twitter:image"
          content="https://morales-clean-solutions-web.vercel.app/MSC_SOCIAL_BANNER.webp"
        />
      </head>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
