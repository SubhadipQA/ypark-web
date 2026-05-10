import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import ForOwners from "@/components/sections/ForOwners";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import AppDownload from "@/components/sections/AppDownload";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <ForOwners />
      <HowItWorks />
      <Features />
      <AppDownload />
      <FAQ />
      <Footer />
      {/* sections added one by one */}
    </main>
  );
}