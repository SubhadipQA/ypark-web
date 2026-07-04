import Navbar from "@/components/sections/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import {
  YAdminHero,
  YAdminWhoIsItFor,
  YAdminWhatItDoes,
  YAdminHowItWorks,
} from "@/components/yadmin";

export const metadata = {
  title: "YAdmin — Multi-Zone Parking Management",
  description:
    "YAdmin by YPark is built for parking companies, government bodies and multi-zone operators. One dashboard to manage every zone, every city, every rupee.",
};

export default function YAdminPage() {
  return (
    <main>
      <Navbar />
      <YAdminHero />
      <YAdminWhoIsItFor />
      <YAdminWhatItDoes />
      <YAdminHowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
