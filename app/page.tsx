import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F0f0F0] h-screen text-[#000]">
      <Header />
      <Hero />
    </main>
  );
}
