import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Clock, Award, ShieldCheck, Loader2 } from 'lucide-react';
import { Country, VisaService } from '../data/mockData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbx7doXU8PSMTSpH_FDzHauWLbbBpvt2HCV-uYEvjSNJGHv_FNvvSfibjXOaO6iikYSx/exec';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  country: 'Australia',
  course: 'Undergraduate / Master Degree',
  preferredTime: 'Morning (10:00 AM - 1:00 PM)'
};

export const CallbackModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(INITIAL_FORM);

  if (!isOpen) return null;

  const handleClose = () => {
    if (submitted) {
      setSubmitted(false);
      setFormData(INITIAL_FORM);
    }
    setError('');
    onClose();
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div role="dialog" aria-modal="true" aria-labelledby="callback-modal-title" className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Callback Requested!</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-slate-800">{formData.name || 'Applicant'}</span>! A YOLOgen Consultant will call you at <span className="font-semibold text-slate-800">{formData.phone}</span> during your preferred slot: {formData.preferredTime}.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                <Phone className="w-3.5 h-3.5 text-amber-600" /> Direct Counselor Connect
              </span>
              <h2 id="callback-modal-title" className="text-2xl font-bold text-slate-900 mt-2">Request a Fast Callback</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Get free 15-minute 1-on-1 guidance on visas, scholarships, and course selection.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="callback-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                <input
                  id="callback-name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="callback-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
                  <input
                    id="callback-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="callback-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email</label>
                  <input
                    id="callback-email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="callback-country" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Target Country</label>
                  <select
                    id="callback-country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm bg-white"
                  >
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Russia">Russia (MBBS)</option>
                    <option value="Kazakhstan">Kazakhstan (MBBS)</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="UAE">UAE (Dubai)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="callback-time" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Preferred Time</label>
                  <select
                    id="callback-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm bg-white"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1 PM - 5 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              {error && (
                <div role="alert" className="px-4 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 mt-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-400/20 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <><Phone className="w-4 h-4" /> Schedule My Call</>
                )}
              </button>
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
