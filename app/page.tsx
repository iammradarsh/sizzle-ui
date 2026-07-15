import BottomNavbar from "@/components/layout/BottomNavbar";
import Header from "@/components/layout/Header";
import BookingsSection from "@/components/sections/BookingsSection";
import BuyerReviewsSection from "@/components/sections/BuyerReviewsSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import CertifiedSection from "@/components/sections/CertifiedSection";
import CreatorHighlightsSection from "@/components/sections/CreatorHighlightsSection";
import CreatorsSection from "@/components/sections/CreatorsSection";
import ExploreCreatorsSection from "@/components/sections/ExploreCreatorsSection";
import FeaturedCreatorsSection from "@/components/sections/FeaturedCreatorsSection";
import FeaturedHeroSection from "@/components/sections/FeaturedHeroSection";
import HeroSection from "@/components/sections/HeroSection";
import LatestCreatorsSection from "@/components/sections/LatestCreatorsSection";
import LifestyleSection from "@/components/sections/LifestyleSection";
import PersonalSection from "@/components/sections/PersonalSection";
import ReelsSection from "@/components/sections/ReelsSection";
import SpotlightSection from "@/components/sections/SpotlightSection";
import SuggestedCreatorsSection from "@/components/sections/SuggestedCreatorsSection";
import TippedReelsSection from "@/components/sections/TippedReelsSection";
import TopCreatorsSection from "@/components/sections/TopCreatorsSection";
import TopEarningSection from "@/components/sections/TopEarningSection";
import TopTippedSection from "@/components/sections/TopTippedSection";
import TrendingGamingSection from "@/components/sections/TrendingGamingSection";
import { featuredHeroes } from "@/data/featuredHeroes";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-white pb-40 ">
      <HeroSection />
      <CreatorsSection />
      <CategoriesSection />
      <ReelsSection />
      <PersonalSection />
      <TopTippedSection />
      <FeaturedHeroSection hero={featuredHeroes[0]} />
      <TopEarningSection />
      <SuggestedCreatorsSection />
      <TrendingGamingSection />
      <ExploreCreatorsSection />
      <TopCreatorsSection />
      <CertifiedSection />
      <FeaturedCreatorsSection />
      <FeaturedHeroSection hero={featuredHeroes[1]} />
      <BookingsSection />
      <TippedReelsSection />
      <BuyerReviewsSection />
      <LatestCreatorsSection />
      <LifestyleSection />
      <SpotlightSection />
      <CreatorHighlightsSection />
    </main>
  );
}
