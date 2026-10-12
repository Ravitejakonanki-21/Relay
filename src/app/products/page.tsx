import PortfolioPage from "@/app/portfolio/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Demonstration Gallery — Original Concept Work",
  description:
    "Inspect demonstration website concepts and digital solutions built by Relay across healthcare, legal, hospitality, and real estate niches.",
};

export default function ProductsPage() {
  return <PortfolioPage />;
}
