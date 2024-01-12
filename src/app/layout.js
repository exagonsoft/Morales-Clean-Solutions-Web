import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marcos Clean Solutions",
  description: "Expertos en limpieza y recogida de escombros en Miami. Eficiencia, profesionalismo y sostenibilidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
