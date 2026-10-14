import React from 'react';
import { X } from 'lucide-react';
import { LandmarkCard } from '../data/mockData';

interface CountryDetailsModalProps {
  landmark: LandmarkCard | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CountryDetailsModal: React.FC<CountryDetailsModalProps> = ({
  landmark,
  isOpen,
  onClose
}) => {
  if (!isOpen || !landmark || !landmark.details) return null;

  const details = landmark.details;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed Position Outside Scroll */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white shadow-lg transition-colors z-30"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Banner Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-3xl">
            <img
              src={landmark.imageUrl}
              alt={`${landmark.city} banner`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 sm:-mt-20 mb-6">
            <div className="sm:mb-3">
              <h1 id="modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
                {landmark.city}
              </h1>
              <p className="text-lg text-slate-900 font-bold">{landmark.country}</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5">
            {/* Top Universities */}
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Top Universities
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {details.topUniversities}
              </p>
            </div>

            {/* Global Rankings */}
            <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Global Rankings
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {details.globalRankings}
              </p>
            </div>

            {/* Popular Courses */}
            <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Popular Courses
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {details.popularCourses}
              </p>
            </div>

            {/* Conditional Details */}
            {details.courseDuration && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Course Duration
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.courseDuration}
                </p>
              </div>
            )}

            {details.careerOpportunities && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Career Opportunities
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.careerOpportunities}
                </p>
              </div>
            )}

            {details.graduatePathways && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Graduate Pathways
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.graduatePathways}
                </p>
              </div>
            )}

            {details.careerExposure && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Career Exposure
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.careerExposure}
                </p>
              </div>
            )}

            {details.admissionEssentials && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Admission Essentials
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.admissionEssentials}
                </p>
              </div>
            )}

            {details.workAfterGraduation && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Work After Graduation
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.workAfterGraduation}
                </p>
              </div>
            )}

            {details.industryExperience && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Industry Experience
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.industryExperience}
                </p>
              </div>
            )}

            {details.admissionRequirements && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Admission Requirements
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.admissionRequirements}
                </p>
              </div>
            )}

            {details.graduateOpportunities && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Graduate Opportunities
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.graduateOpportunities}
                </p>
              </div>
            )}

            {details.flexibleLearning && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Flexible Learning
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.flexibleLearning}
                </p>
              </div>
            )}

            {details.careerPreparation && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Career Preparation
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.careerPreparation}
                </p>
              </div>
            )}

            {details.admissionReq && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Admission Requirements
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.admissionReq}
                </p>
              </div>
            )}

            {details.workOptions && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Work Options
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.workOptions}
                </p>
              </div>
            )}

            {details.languageOptions && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Language Options
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.languageOptions}
                </p>
              </div>
            )}

            {details.tuitionAdvantage && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Tuition Advantage
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.tuitionAdvantage}
                </p>
              </div>
            )}

            {details.careerExposureGermany && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Career Exposure
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.careerExposureGermany}
                </p>
              </div>
            )}

            {details.graduateOptions && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Graduate Options
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.graduateOptions}
                </p>
              </div>
            )}

            {details.industryLinks && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Industry Links
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.industryLinks}
                </p>
              </div>
            )}

            {details.admissions && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Admissions
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.admissions}
                </p>
              </div>
            )}

            {details.postStudyPathways && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Post-Study Pathways
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.postStudyPathways}
                </p>
              </div>
            )}

            {details.teachingLanguages && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Teaching Languages
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.teachingLanguages}
                </p>
              </div>
            )}

            {details.tuition && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Tuition
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.tuition}
                </p>
              </div>
            )}

            {details.careerExposureFrance && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Career Exposure
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.careerExposureFrance}
                </p>
              </div>
            )}

            {details.admissionsAndVisas && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Admissions and Visas
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.admissionsAndVisas}
                </p>
              </div>
            )}

            {details.learningApproach && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Learning Approach
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.learningApproach}
                </p>
              </div>
            )}

            {details.careerPathways && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Career Pathways
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.careerPathways}
                </p>
              </div>
            )}

            {details.postStudyOptions && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Post-Study Options
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.postStudyOptions}
                </p>
              </div>
            )}

            {details.practicalLearning && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Practical Learning
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.practicalLearning}
                </p>
              </div>
            )}

            {details.graduatePathwaysNZ && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Graduate Pathways
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.graduatePathwaysNZ}
                </p>
              </div>
            )}

            {details.studyOptions && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Study Options
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.studyOptions}
                </p>
              </div>
            )}

            {details.industryExposureItaly && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Industry Exposure
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.industryExposureItaly}
                </p>
              </div>
            )}

            {details.admissionsItaly && (
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Admissions
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {details.admissionsItaly}
                </p>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
