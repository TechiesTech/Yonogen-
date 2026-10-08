import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { VisaServicesSection } from './components/VisaServicesSection';
import { DestinationsAndReviewsSection } from './components/DestinationsAndReviewsSection';
import { TestPrepAndCareerSection } from './components/TestPrepAndCareerSection';
import { UniversitiesGridSection } from './components/UniversitiesGridSection';
import { NewsletterAndFooterSection } from './components/NewsletterAndFooterSection';
import { CallbackModal, CountryModal, VisaModal, VideoModal } from './components/Modals';
import { Country, VisaService, TestimonialReview } from './data/mockData';

export default function App() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<VisaService | null>(null);
  const [selectedReview, setSelectedReview] = useState<TestimonialReview | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Navbar */}
      <Navbar
        onOpenCounselling={() => setCallbackModalOpen(true)}
      />

      {/* Main Content Sections faithfully matching all 8 screenshots */}
      <main>
        {/* Screenshot 1: Hero Section with 3D Landmarks & Country Pills */}
        <HeroSection
          onOpenCallback={() => setCallbackModalOpen(true)}
          onOpenCounselling={() => setCallbackModalOpen(true)}
          onSelectCountry={(country) => setSelectedCountry(country)}
        />

        {/* Screenshot 2: Who We Are & 4 Stats with Vertical Accent & Fan Collage */}
        <WhoWeAreSection />

        {/* Screenshot 8: Our Services / 5 Visa Types with 3D Character Art */}
        <VisaServicesSection
          onSelectVisa={(visa) => setSelectedVisa(visa)}
        />

        {/* Screenshot 3: Study Destinations (Melbourne, Sydney, etc.) & Client Reviews with Google/Clutch */}
        <DestinationsAndReviewsSection
          onSelectReview={(review) => setSelectedReview(review)}
          onOpenCounselling={() => setCallbackModalOpen(true)}
        />

        {/* Screenshot 4: Test Prep Bento Grid (IELTS, PTE, German, Job Opportunities) */}
        <TestPrepAndCareerSection
          onOpenCounselling={() => setCallbackModalOpen(true)}
        />

        {/* Screenshot 5: Our Top Universities Abroad with Architectural Crosshairs Grid */}
        <UniversitiesGridSection />

        {/* Screenshot 6 & 7: Newsletter Banner, Social Links Row, and 5-Column Detailed Footer */}
        <NewsletterAndFooterSection
          onOpenCallback={() => setCallbackModalOpen(true)}
        />
      </main>

      {/* Interactive Modals */}
      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />

      <CountryModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />

      <VisaModal
        visa={selectedVisa}
        onClose={() => setSelectedVisa(null)}
      />

      <VideoModal
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
      />
    </div>
  );
}
