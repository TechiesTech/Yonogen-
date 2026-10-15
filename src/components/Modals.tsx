import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Phone,
  Clock,
  Award,
  ShieldCheck,
  Loader2,
  ChevronDown,
  User,
  Mail,
  GraduationCap,
  Briefcase,
  Plane,
  Building2,
  Globe,
  Check,
  Shield
} from 'lucide-react';
import { Country, VisaService, HERO_LANDMARKS } from '../data/mockData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbx7doXU8PSMTSpH_FDzHauWLbbBpvt2HCV-uYEvjSNJGHv_FNvvSfibjXOaO6iikYSx/exec';

// The 10 countries matching the 10 landmark cards above
const DESTINATION_COUNTRIES = HERO_LANDMARKS.slice(0, 10).map((l) => ({
  id: l.id,
  name: l.country,
  imageUrl: l.imageUrl,
}));

const VISA_SERVICES_LIST = [
  { id: 'student-visa', title: 'Student Visa', sub: 'Study, Degrees & Scholarships', icon: GraduationCap },
  { id: 'worker-visa', title: 'Worker Visa', sub: 'Work Permits & Global Employment', icon: Briefcase },
  { id: 'visitor-visa', title: 'Visitor Visa', sub: 'Tourism, Holidays & Family Visits', icon: Plane },
  { id: 'business-visa', title: 'Business Visa', sub: 'Commercial, Investor & Conferences', icon: Building2 },
  { id: 'migration-visa', title: 'Migration Visa', sub: 'PR, Citizenship & Settlement', icon: Globe }
];

const TIME_SLOTS = [
  { value: 'Morning (10:00 AM - 1:00 PM)', label: 'Morning', sub: '10 AM - 1 PM' },
  { value: 'Afternoon (1:00 PM - 5:00 PM)', label: 'Afternoon', sub: '1 PM - 5 PM' },
  { value: 'Evening (5:00 PM - 8:00 PM)', label: 'Evening', sub: '5 PM - 8 PM' }
];

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  country: 'United Kingdom',
  visaService: 'Student Visa',
  preferredTime: 'Morning (10:00 AM - 1:00 PM)'
};

export const CallbackModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(INITIAL_FORM);

  // Custom Dropdown Open States
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isVisaOpen, setIsVisaOpen] = useState(false);

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const visaDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
        setIsCountryOpen(false);
      }
      if (visaDropdownRef.current && !visaDropdownRef.current.contains(e.target as Node)) {
        setIsVisaOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCountryOpen(false);
        setIsVisaOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    if (submitted) {
      setSubmitted(false);
      setFormData(INITIAL_FORM);
    }
    setIsCountryOpen(false);
    setIsVisaOpen(false);
    setError('');
    onClose();
  };

  const handleSelectCountry = (countryName: string) => {
    setFormData((prev) => ({ ...prev, country: countryName }));
    setIsCountryOpen(false);
  };

  const handleSelectVisa = (visaTitle: string) => {
    setFormData((prev) => ({ ...prev, visaService: visaTitle }));
    setIsVisaOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      const result = await res.json();
      if (!result.success) throw new Error(result.error || 'Submission failed');

      setSubmitted(true);
    } catch (err) {
      console.error('Callback form error:', err);
      setError("Sorry, we couldn't submit your request. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentCountry = DESTINATION_COUNTRIES.find((c) => c.name === formData.country) || DESTINATION_COUNTRIES[0];
  const currentVisa = VISA_SERVICES_LIST.find((v) => v.title === formData.visaService) || VISA_SERVICES_LIST[0];
  const CurrentVisaIcon = currentVisa.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-md p-3 sm:p-4 flex min-h-full items-center justify-center animate-fade-in">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-modal-title"
        className="relative w-full max-w-lg bg-white rounded-3xl sm:rounded-[32px] shadow-2xl p-5 sm:p-7 border border-slate-100 overflow-visible my-auto transition-all"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Callback Scheduled!</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.name || 'Applicant'}</span>! Our senior visa consultant will contact you at <span className="font-semibold text-slate-900">{formData.phone}</span> for <span className="font-semibold text-amber-700">{formData.country} ({formData.visaService})</span> during your selected slot: <span className="font-semibold text-slate-900">{formData.preferredTime}</span>.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-7 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-all text-sm shadow-md active:scale-95"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header Title */}
            <div className="mb-5 sm:mb-6 pr-8">
              <h2 id="callback-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Request a Fast Callback
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Get 15 minutes of tailored guidance on admissions, work permits, and visas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="callback-name" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="callback-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label htmlFor="callback-phone" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="callback-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm text-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="callback-email" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="callback-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm text-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Country & Visa Dropdowns Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {/* 1. Visa Destination Country (Custom Dropdown) */}
                <div ref={countryDropdownRef} className="relative">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Visa Destination Country
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCountryOpen((prev) => !prev);
                      setIsVisaOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border bg-white text-sm transition-all text-left shadow-xs ${isCountryOpen
                      ? 'border-amber-500 ring-2 ring-amber-500/20'
                      : 'border-slate-200 hover:border-slate-300'
                      }`}
                    aria-expanded={isCountryOpen}
                    aria-haspopup="listbox"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={currentCountry.imageUrl}
                        alt=""
                        className="w-5 h-5 rounded-full object-cover shrink-0 shadow-2xs border border-white"
                        loading="lazy"
                        decoding="async"
                        width="20"
                        height="20"
                      />
                      <span className="font-semibold text-slate-900 truncate">
                        {currentCountry.name}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isCountryOpen ? 'rotate-180 text-amber-600' : ''
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isCountryOpen && (
                    <div
                      role="listbox"
                      className="absolute z-50 mt-1.5 left-0 w-full sm:min-w-[240px] bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-1.5 max-h-56 overflow-y-auto overscroll-contain animate-fade-in"
                    >
                      {DESTINATION_COUNTRIES.map((c) => {
                        const isSelected = c.name === formData.country;
                        return (
                          <button
                            key={c.id}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => handleSelectCountry(c.name)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs sm:text-sm transition-colors ${isSelected
                              ? 'bg-amber-50 text-amber-950 font-bold'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                              }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <img
                                src={c.imageUrl}
                                alt=""
                                className="w-5 h-5 rounded-full object-cover shrink-0 border border-slate-200"
                                loading="lazy"
                                decoding="async"
                                width="20"
                                height="20"
                              />
                              <span className="truncate">{c.name}</span>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-amber-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 2. Visa Service (Custom Dropdown) */}
                <div ref={visaDropdownRef} className="relative">
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Visa Service
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsVisaOpen((prev) => !prev);
                      setIsCountryOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border bg-white text-sm transition-all text-left shadow-xs ${isVisaOpen
                      ? 'border-amber-500 ring-2 ring-amber-500/20'
                      : 'border-slate-200 hover:border-slate-300'
                      }`}
                    aria-expanded={isVisaOpen}
                    aria-haspopup="listbox"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-800">
                        <CurrentVisaIcon className="w-3 h-3" />
                      </div>
                      <span className="font-semibold text-slate-900 truncate">
                        {currentVisa.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isVisaOpen ? 'rotate-180 text-amber-600' : ''
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isVisaOpen && (
                    <div
                      role="listbox"
                      className="absolute z-50 mt-1.5 right-0 w-full sm:min-w-[240px] bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-1.5 max-h-56 overflow-y-auto overscroll-contain animate-fade-in"
                    >
                      {VISA_SERVICES_LIST.map((v) => {
                        const Icon = v.icon;
                        const isSelected = v.title === formData.visaService;
                        return (
                          <button
                            key={v.id}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => handleSelectVisa(v.title)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs sm:text-sm transition-colors ${isSelected
                              ? 'bg-amber-50 text-amber-950 font-bold'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                              }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isSelected ? 'bg-amber-200 text-amber-900' : 'bg-slate-100 text-slate-600'
                                  }`}
                              >
                                <Icon className="w-3 h-3" />
                              </div>
                              <div className="min-w-0">
                                <div className="truncate font-semibold">{v.title}</div>
                                <div className="text-[10px] text-slate-400 truncate hidden sm:block">{v.sub}</div>
                              </div>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-amber-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive Preferred Consultation Time Chips */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Consultation Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = formData.preferredTime === slot.value;
                    return (
                      <button
                        key={slot.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredTime: slot.value })}
                        className={`px-2.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border text-center transition-all ${isSelected
                          ? 'bg-amber-100/90 border-amber-400 text-amber-950 font-bold shadow-xs ring-2 ring-amber-400/20'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-medium'
                          }`}
                      >
                        <div className="text-xs sm:text-sm leading-tight">{slot.label}</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-none">
                          {slot.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div role="alert" className="px-4 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                  {error}
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 mt-3 rounded-xl sm:rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-400/25 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Scheduling Call...
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4 text-slate-950" /> Schedule Free Consultation
                  </>
                )}
              </button>

              {/* Trust & Privacy Guarantee */}
              <div className="pt-1 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Confidential
                </span>
                <span>•</span>
                <span>Zero Obligation</span>
                <span>•</span>
                <span>Certified Counselors</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface DestinationModalProps {
  onClose: () => void;
  onOpenCallback: () => void;
}

export const CountryModal: React.FC<DestinationModalProps & { country: Country | null }> = ({
  country,
  onClose,
  onOpenCallback
}) => {
  if (!country) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div role="dialog" aria-modal="true" aria-labelledby="country-modal-title" className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-5">
          <img
            src={country.flagUrl}
            alt={country.name}
            className="w-14 h-14 rounded-2xl object-cover shadow-md border-2 border-slate-100"
            decoding="async"
            width="56"
            height="56"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Destination Overview</span>
            <h2 id="country-modal-title" className="text-2xl font-bold text-slate-900">{country.name}</h2>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {country.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-medium text-slate-500 block mb-1">Average Tuition Fees</span>
            <span className="text-sm font-bold text-slate-800">{country.avgTuition}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-medium text-slate-500 block mb-1">Post-Study Work Permit</span>
            <span className="text-sm font-bold text-slate-800">{country.postStudyWork}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-medium text-slate-500 block mb-1">Institution Network</span>
            <span className="text-sm font-bold text-slate-800">{country.universitiesCount}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-medium text-slate-500 block mb-1">Popular Intakes</span>
            <span className="text-sm font-bold text-slate-800">{country.popularIntakes.join(', ')}</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1">Why Students Choose {country.name}</h4>
          <p className="text-xs text-indigo-800 leading-relaxed">{country.popularFor}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onOpenCallback();
            }}
            className="flex-1 py-3 px-5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors text-center"
          >
            Consult on {country.name} Admissions
          </button>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors text-center"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export const VisaModal: React.FC<DestinationModalProps & { visa: VisaService | null }> = ({
  visa,
  onClose,
  onOpenCallback
}) => {
  if (!visa) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div role="dialog" aria-modal="true" aria-labelledby="visa-modal-title" className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800">
            {visa.title}
          </span>
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> {visa.successRate} Approval Record
          </span>
        </div>

        <h2 id="visa-modal-title" className="text-2xl font-bold text-slate-900 mb-2">{visa.title} Application Guide</h2>
        <p className="text-sm text-slate-600 mb-6">{visa.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5 mb-1">
              <Clock className="w-3.5 h-3.5 text-indigo-600" /> Typical Processing Timeline
            </span>
            <span className="text-sm font-bold text-slate-800">{visa.processingTime}</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5 mb-1">
              <Award className="w-3.5 h-3.5 text-indigo-600" /> YOLOgen Success Rate
            </span>
            <span className="text-sm font-bold text-emerald-700">{visa.successRate}</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Key Eligibility Criteria</h4>
            <ul className="space-y-2">
              {visa.eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Required Documentation Checklist</h4>
            <ul className="space-y-2">
              {visa.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors text-center"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenCallback();
            }}
            className="py-3 px-5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors text-center"
          >
            Request guidance
          </button>
        </div>
      </div>
    </div>
  );
};
