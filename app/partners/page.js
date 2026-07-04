import Navbar from "@/components/sections/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import {
  PartnersHero,
  WhoIsItFor,
  ParkingTypes,
  PartnersHowItWorks,
  PartnersFeatures,
} from "@/components/partners";

export const metadata = {
  title: "For Parking Owners — List Your Zone",
  description:
    "List your government authorized or private parking area on YPark. Manage walk-ins, monthly passes, staff and revenue from one app. Free to register.",
};

export default function PartnersPage() {
  return (
    <main>
      <Navbar />
      <PartnersHero />
      <WhoIsItFor />
      <ParkingTypes />
      <PartnersHowItWorks />
      <PartnersFeatures />
      <Contact />
      <Footer />
    </main>
  );
}

