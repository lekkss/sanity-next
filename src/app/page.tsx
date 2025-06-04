import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import NavBar from "@/components/layout/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
    </main>
  );
}
