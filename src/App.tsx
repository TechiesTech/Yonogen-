import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { WhoWeAreSection } from './components/about/WhoWeAreSection';
import { VisaServicesSection } from './components/services/VisaServicesSection';
import { DestinationsAndReviewsSection } from './components/DestinationsAndReviewsSection';
import { NewsletterAndFooterSection } from './components/NewsletterAndFooterSection';
import { WhatsAppPopup } from './components/WhatsAppPopup';
import type { VisaService } from './data/mockData';

const JobShowcase = lazy(() =>
  import('./components/services/JobShowcase').then((module) => ({ default: module.JobShowcase })),
);
const UniversitiesGridSection = lazy(() =>
  import('./components/UniversitiesGridSection').then((module) => ({ default: module.UniversitiesGridSection })),
);
const CallbackModal = lazy(() =>
  import('./components/Modals').then((module) => ({ default: module.CallbackModal })),
);
const VisaModal = lazy(() =>
  import('./components/Modals').then((module) => ({ default: module.VisaModal })),
);

interface DeferredSectionProps {
  children: ReactNode;
  placeholderHeight: number;
}

function DeferredSection({ children, placeholderHeight }: DeferredSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (!('IntersectionObserver' in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {isNearViewport ? (
        <Suspense fallback={<div aria-hidden="true" style={{ minHeight: placeholderHeight }} />}>
          {children}
        </Suspense>
      ) : (
        <div aria-hidden="true" style={{ minHeight: placeholderHeight }} />
      )}
    </div>
  );
}

export default function App() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState<VisaService | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <Navbar
        onOpenCounselling={() => setCallbackModalOpen(true)}
      />

      <main>
        {/* Home and hero */}
        <HeroSection
          onOpenCallback={() => setCallbackModalOpen(true)}
          onOpenCounselling={() => setCallbackModalOpen(true)}
        />

        {/* About us */}
        <WhoWeAreSection />

        {/* Visa services */}
        <VisaServicesSection
          onSelectVisa={(visa) => setSelectedVisa(visa)}
        />

        {/* Job opportunities */}
        <DeferredSection placeholderHeight={650}>
          <JobShowcase />
        </DeferredSection>

        {/* Study destinations and client reviews */}
        <DestinationsAndReviewsSection />

        {/* Partner universities */}
        <DeferredSection placeholderHeight={600}>
          <UniversitiesGridSection />
        </DeferredSection>

        {/* Contact, newsletter, and footer */}
        <NewsletterAndFooterSection
          onOpenCallback={() => setCallbackModalOpen(true)}
        />
      </main>

      {/* Callback request modal */}
      {callbackModalOpen && (
        <Suspense fallback={null}>
          <CallbackModal
            isOpen={callbackModalOpen}
            onClose={() => setCallbackModalOpen(false)}
          />
        </Suspense>
      )}

      {/* Selected visa details modal */}
      {selectedVisa && (
        <Suspense fallback={null}>
          <VisaModal
            visa={selectedVisa}
            onClose={() => setSelectedVisa(null)}
            onOpenCallback={() => setCallbackModalOpen(true)}
          />
        </Suspense>
      )}

      {/* Floating WhatsApp contact popup */}
      <WhatsAppPopup />
    </div>
  );
}
