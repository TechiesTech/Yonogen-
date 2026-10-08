import React, { useState } from 'react';
import { CheckCircle, ThumbsUp, MessageSquare, Play, Send, ShieldCheck, Plus } from 'lucide-react';
import { TestimonialReview } from '../data/mockData';
import { HoverEffect } from './ui/card-hover-effect';

export interface FeedbackItem {
  id: string;
  name: string;
  avatar: string;
  country: string;
  flag: string;
  program: string;
  university: string;
  rating: number;
  date: string;
  verifiedSource: 'Google' | 'Clutch';
  highlightBadge: string;
  counselor: string;
  reviewText: string;
  helpfulCount: number;
  hasVideo?: boolean;
}

const INITIAL_FEEDBACK_DATA: FeedbackItem[] = [
  {
    id: 'fb-1',
    name: 'Ananya Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80',
    country: 'Australia',
    flag: '🇦🇺',
    program: 'Master of International Business',
    university: 'University of Sydney',
    rating: 5,
    date: '3 days ago',
    verifiedSource: 'Google',
    highlightBadge: 'AUD $14,000 Merit Scholarship',
    counselor: 'Priya Mehta (Senior Lead)',
    reviewText: 'Jagvimal Overseas was hands down the best decision for my Australian admission. They streamlined my SOP, secured a tuition fee waiver, and processed my subclass 500 visa in just 12 working days. Extremely professional team without hidden fees!',
    helpfulCount: 42,
    hasVideo: true
  },
  {
    id: 'fb-2',
    name: 'Dr. Rohan Mehra',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=260&q=80',
    country: 'Russia',
    flag: '🇷🇺',
    program: 'Doctor of Medicine (MBBS)',
    university: 'Kazan Federal University',
    rating: 5,
    date: '1 week ago',
    verifiedSource: 'Google',
    highlightBadge: 'Direct WHO/NMC Seat',
    counselor: 'Rajesh Choudhary',
    reviewText: 'After NEET, I was worried about private college budgets in India. The Jagvimal team arranged my direct admission in Kazan with zero donation, organized Indian food hostel accommodation, and supported my parents throughout the journey.',
    helpfulCount: 38,
    hasVideo: true
  },
  {
    id: 'fb-3',
    name: 'Dr. Vivek Sharma',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=260&q=80',
    country: 'Germany',
    flag: '🇩🇪',
    program: 'German Approbation & Hospital Match',
    university: 'Frankfurt University Hospital',
    rating: 5,
    date: '2 weeks ago',
    verifiedSource: 'Clutch',
    highlightBadge: 'Defizitbescheid & Hospital Contract',
    counselor: 'Dr. Monika Weber',
    reviewText: 'Their German language faculty took me from zero German to B2 medical fluency in 6 months. They helped with legal document apostilles and matched me directly with a hospital in Hesse with a €3,200/month contract.',
    helpfulCount: 29,
    hasVideo: true
  },
  {
    id: 'fb-4',
    name: 'Harpreet Singh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=260&q=80',
    country: 'Canada',
    flag: '🇨🇦',
    program: 'Postgraduate Cloud Systems & AI',
    university: 'Seneca Polytechnic, Toronto',
    rating: 5,
    date: '3 weeks ago',
    verifiedSource: 'Google',
    highlightBadge: 'Approved After Prior Refusal',
    counselor: 'Amanpreet Kaur',
    reviewText: 'I had one Canadian visa refusal from another local agent. Jagvimal’s immigration lawyer reconstructed my Statement of Purpose with airtight financial justification. Visa granted within 22 days with full co-op work authorization.',
    helpfulCount: 51,
    hasVideo: true
  },
  {
    id: 'fb-5',
    name: 'Pooja Verma',
    avatar: 'https://images.unsplash.com/photo-1594824813511-9a99787ff27c?auto=format&fit=crop&w=260&q=80',
    country: 'Germany',
    flag: '🇩🇪',
    program: 'Anerkennung Nursing Program',
    university: 'Asklepios Kliniken Hamburg',
    rating: 5,
    date: '1 month ago',
    verifiedSource: 'Clutch',
    highlightBadge: '100% Free Tuition & Sponsored Relocation',
    counselor: 'Sunita Sharma',
    reviewText: 'I joined as a B.Sc nurse from Punjab. Jagvimal took care of embassy interview drills, translated all my clinical transcripts into German, and provided free accommodation for the first month in Hamburg. Incredible service!',
    helpfulCount: 35,
    hasVideo: false
  },
  {
    id: 'fb-6',
    name: 'Dr. Sneha Patel',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=260&q=80',
    country: 'New Zealand',
    flag: '🇳🇿',
    program: 'General Medicine (English Medium)',
    university: 'University of Auckland',
    rating: 5,
    date: '1 month ago',
    verifiedSource: 'Google',
    highlightBadge: 'English-Medium Medical Program',
    counselor: 'Vikas Shekhawat',
    reviewText: 'The hospital rotations here are top notch with English speaking faculty. Jagvimal team members even accompanied our student batch from Delhi airport right to our university hostel rooms.',
    helpfulCount: 22,
    hasVideo: false
  }
];

interface CustomerFeedbackProps {
  onSelectReview: (review: TestimonialReview) => void;
}

export const CustomerFeedback: React.FC<CustomerFeedbackProps> = ({ onSelectReview }) => {
  const [reviewsList, setReviewsList] = useState<FeedbackItem[]>(INITIAL_FEEDBACK_DATA);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // New review form state
  const [newReview, setNewReview] = useState({
    name: '',
    country: 'Australia',
    university: '',
    program: '',
    rating: 5,
    reviewText: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filters = ['All', 'Australia', 'Germany', 'Canada', 'Russia', 'New Zealand'];

  const filteredReviews = reviewsList.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.country.toLowerCase() === selectedFilter.toLowerCase();
  });

  const toggleHelpful = (id: string) => {
    setHelpfulLiked((prev) => {
      const isLiked = !prev[id];
      setReviewsList((currentList) =>
        currentList.map((item) =>
          item.id === id
            ? { ...item, helpfulCount: item.helpfulCount + (isLiked ? 1 : -1) }
            : item
        )
      );
      return { ...prev, [id]: isLiked };
    });
  };

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.reviewText) return;

    const flagMap: Record<string, string> = {
      Australia: '🇦🇺',
      Germany: '🇩🇪',
      Canada: '🇨🇦',
      Russia: '🇷🇺',
      'New Zealand': '🇳🇿'
    };

    const newItem: FeedbackItem = {
      id: `fb-user-${Date.now()}`,
      name: newReview.name,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=260&q=80',
      country: newReview.country,
      flag: flagMap[newReview.country] || '🌐',
      program: newReview.program || 'Overseas Study Program',
      university: newReview.university || 'Top Partner University',
      rating: newReview.rating,
      date: 'Just now',
      verifiedSource: 'Google',
      highlightBadge: 'Newly Verified Student Review',
      counselor: 'Jagvimal Admissions Desk',
      reviewText: newReview.reviewText,
      helpfulCount: 1,
      hasVideo: false
    };

    setReviewsList([newItem, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsWriteReviewOpen(false);
      setNewReview({
        name: '',
        country: 'Australia',
        university: '',
        program: '',
        rating: 5,
        reviewText: ''
      });
    }, 2000);
  };

  return (
    <div className="mt-8">
      {/* Destination Filter Tabs & Share Feedback Action */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/25 ring-2 ring-amber-300/40'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {filter === 'All' ? 'All Reviews' : filter}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="text-xs text-slate-400 font-medium hidden sm:block">
            Showing <span className="font-bold text-slate-700">{filteredReviews.length}</span> verified stories
          </div>
          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/60 font-bold text-xs transition-colors shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" /> Share Feedback
          </button>
        </div>
      </div>

      {/* Verified student stories */}
      <HoverEffect
        items={filteredReviews.map((review) => {
          const isLiked = !!helpfulLiked[review.id];

          return {
            key: review.id,
            title: review.name,
            description: review.reviewText,
            content: (
              <div className="flex h-full flex-col justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <div className="relative shrink-0">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="h-11 w-11 rounded-full object-cover ring-2 ring-violet-100"
                        />
                        <span className="absolute -bottom-1 -right-1 rounded-full bg-white px-1 text-sm leading-5 shadow-sm" title={review.country}>
                          {review.flag}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <h4 className="flex items-center gap-1 text-sm font-bold text-slate-900">
                          {review.name}
                          <span title="Verified admission" className="inline-flex shrink-0 items-center">
                            <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                          </span>
                        </h4>
                        <p className="mt-0.5 truncate text-[11px] font-medium text-slate-500">
                          {review.program}
                        </p>
                        <p className="mt-0.5 truncate text-[11px] font-semibold text-violet-700">
                          {review.university}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-col items-end gap-1 pt-0.5">
                      <div className="flex text-xs leading-none text-violet-600" aria-label={`${review.rating} out of 5 stars`}>
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} aria-hidden="true">★</span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-[9px] font-semibold text-slate-400">
                        {review.verifiedSource === 'Google' ? (
                          <span className="text-blue-600 font-bold">Google</span>
                        ) : (
                          <span className="text-red-600 font-bold">Clutch</span>
                        )}
                        <span>· {review.date}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-flex max-w-full items-center gap-1 rounded-lg border border-emerald-200/80 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-bold leading-snug text-emerald-800">
                      ✓ {review.highlightBadge}
                    </span>
                  </div>

                  <p className="line-clamp-4 text-xs italic leading-6 text-slate-600 sm:text-sm">
                    “{review.reviewText}”
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                  <div className="min-w-0 truncate text-[10px] text-slate-400">
                    Mentor: <span className="font-semibold text-slate-700">{review.counselor}</span>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5">
                    {review.hasVideo && (
                      <button
                        onClick={() =>
                          onSelectReview({
                            id: review.id,
                            name: review.name,
                            role: review.program,
                            university: review.university,
                            country: review.country,
                            rating: review.rating,
                            avatar: review.avatar,
                            hasVideo: true,
                            videoTitle: `${review.name} - Success Video Story`,
                            quote: review.reviewText,
                            size: 'medium',
                            tag: review.country
                          })
                        }
                        className="inline-flex items-center gap-1 rounded-lg bg-violet-50 px-2.5 py-1.5 text-[10px] font-bold text-violet-800 transition-colors hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
                        title="Watch Video Review"
                      >
                        <Play className="h-2.5 w-2.5 fill-current" /> Watch
                      </button>
                    )}

                    <button
                      onClick={() => toggleHelpful(review.id)}
                      aria-pressed={isLiked}
                      className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${
                        isLiked
                          ? 'bg-violet-100 text-violet-800'
                          : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                      }`}
                      title="Mark review as helpful"
                    >
                      <ThumbsUp className="h-3 w-3" />
                      <span>{review.helpfulCount}</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          };
        })}
      />

      {/* Share Feedback Modal */}
      {isWriteReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100">
            <button
              onClick={() => setIsWriteReviewOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>

            {submittedMessage ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Thank You For Your Feedback!</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Your review has been verified and published to help future study abroad aspirants.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                    <MessageSquare className="w-3 h-3" /> Student Review Submission
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">Share Your Jagvimal Experience</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Your candid feedback guides other students on their international admissions journey.
                  </p>
                </div>

                <form onSubmit={handleCreateReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Country
                      </label>
                      <select
                        value={newReview.country}
                        onChange={(e) => setNewReview({ ...newReview, country: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
                      >
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="Canada">Canada</option>
                        <option value="Russia">Russia</option>
                        <option value="New Zealand">New Zealand</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Rating
                      </label>
                      <select
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white text-amber-500 font-bold"
                      >
                        <option value={5}>★★★★★ (5/5 Excellent)</option>
                        <option value={4}>★★★★☆ (4/5 Very Good)</option>
                        <option value={3}>★★★☆☆ (3/5 Good)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        University Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. University of Melbourne"
                        value={newReview.university}
                        onChange={(e) => setNewReview({ ...newReview, university: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Course / Program
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Master of Data Science"
                        value={newReview.program}
                        onChange={(e) => setNewReview({ ...newReview, program: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Feedback &amp; Review
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share details about your counseling, visa approval timeline, scholarships won, or counselor support..."
                      value={newReview.reviewText}
                      onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm transition-colors shadow-md shadow-amber-400/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Publish Verified Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
