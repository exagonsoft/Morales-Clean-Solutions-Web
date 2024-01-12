import HeroSection from "@/components/Hero/HeroSection";
import ServicesSection from "@/components/Services/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-hidden flex-col items-center">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
