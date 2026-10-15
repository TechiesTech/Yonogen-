export interface Country {
  id: string;
  name: string;
  flagUrl: string;
  popularFor: string;
  universitiesCount: string;
  avgTuition: string;
  postStudyWork: string;
  popularIntakes: string[];
  description: string;
}

export interface LandmarkCard {
  id: string;
  city: string;
  country: string;
  badgeBg: string;
  imageUrl: string;
  details?: CountryDetails;
}

export interface CountryDetails {
  topUniversities: string;
  globalRankings: string;
  popularCourses: string;
  courseDuration?: string;
  careerOpportunities?: string;
  graduatePathways?: string;
  careerExposure?: string;
  admissionEssentials?: string;
  workAfterGraduation?: string;
  industryExperience?: string;
  admissionRequirements?: string;
  graduateOpportunities?: string;
  flexibleLearning?: string;
  careerPreparation?: string;
  admissionReq?: string;
  workOptions?: string;
  languageOptions?: string;
  tuitionAdvantage?: string;
  careerExposureGermany?: string;
  graduateOptions?: string;
  industryLinks?: string;
  admissions?: string;
  postStudyPathways?: string;
  teachingLanguages?: string;
  tuition?: string;
  careerExposureFrance?: string;
  admissionsAndVisas?: string;
  learningApproach?: string;
  careerPathways?: string;
  postStudyOptions?: string;
  practicalLearning?: string;
  graduatePathwaysNZ?: string;
  studyOptions?: string;
  industryExposureItaly?: string;
  admissionsItaly?: string;
}

export interface VisaService {
  id: string;
  title: string;
  description: string;
  characterType: 'visitor' | 'student' | 'worker' | 'citizenship' | 'business';
  eligibility: string[];
  processingTime: string;
  requiredDocuments: string[];
  successRate: string;
}

export interface CityDestination {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  universities: number;
  studentsRating: number;
}

export interface UniversityPartner {
  id: string;
  name: string;
  ranking: string;
}

export const COUNTRIES_DATA: Country[] = [
  {
    id: 'australia',
    name: 'Australia',
    flagUrl: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=120&q=80',
    popularFor: 'World-class universities, high quality of living & 2-4 years post-study work visa.',
    universitiesCount: '43+ Accredited Universities',
    avgTuition: '$24,000 - $42,000 AUD / year',
    postStudyWork: 'Up to 4 years PSW rights',
    popularIntakes: ['February', 'July', 'November'],
    description: 'Australia offers an exceptional education system, globally recognized qualifications, and vibrant multicultural cities like Melbourne and Sydney.'
  },
  {
    id: 'china',
    name: 'China',
    flagUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Affordable top-tier MBBS, engineering degrees, and Chinese government scholarships.',
    universitiesCount: '60+ English-taught Universities',
    avgTuition: '$3,500 - $8,000 USD / year',
    postStudyWork: '1-2 years internships and employment',
    popularIntakes: ['March', 'September'],
    description: 'Home to leading global research institutions and state-of-the-art medical colleges with globally recognized WHO/NMC programs.'
  },
  {
    id: 'luxembourg',
    name: 'Luxembourg',
    flagUrl: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=120&q=80',
    popularFor: 'High living standards, multilingual education, and thriving finance & tech sector.',
    universitiesCount: 'Premier European Institutions',
    avgTuition: '€800 - €3,000 EUR / semester',
    postStudyWork: 'European Blue Card pathway',
    popularIntakes: ['September', 'February'],
    description: 'Located in the heart of Europe, Luxembourg offers tuition-subsidized programs and unparalleled European networking.'
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    flagUrl: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Affordable 5-year MBBS programs recognized by WHO, NMC & ECFMG.',
    universitiesCount: '12+ Top Medical Academies',
    avgTuition: '$3,800 - $5,200 USD / year',
    postStudyWork: 'Clinical residency & practice',
    popularIntakes: ['September', 'October'],
    description: 'Prime destination for Indian medical aspirants offering quality English-medium medical training with low living costs.'
  },
  {
    id: 'russia',
    name: 'Russia',
    flagUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Centuries-old medical universities, space & aviation science, direct admissions.',
    universitiesCount: '70+ Federal & State Universities',
    avgTuition: '$4,000 - $7,500 USD / year',
    postStudyWork: 'Post-graduation residency & research',
    popularIntakes: ['September', 'October'],
    description: 'Renowned for prestigious government medical and aerospace institutes with highly modernized practical labs.'
  },
  {
    id: 'spain',
    name: 'Spain',
    flagUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Top European business schools, affordable tuition, and Mediterranean lifestyle.',
    universitiesCount: '50+ Public & Private Universities',
    avgTuition: '€2,500 - €12,000 EUR / year',
    postStudyWork: '1-year job search visa',
    popularIntakes: ['September', 'January'],
    description: 'Study business, design, and architecture in Madrid, Barcelona, or Valencia with low living expenses and Schengen mobility.'
  },
  {
    id: 'france',
    name: 'France',
    flagUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Globally recognized universities, diverse programs, and rich cultural experiences.',
    universitiesCount: 'Public and private institutions',
    avgTuition: 'Varies by institution and program',
    postStudyWork: 'Residence and work options depend on visa category',
    popularIntakes: ['September', 'January'],
    description: 'France offers a wide range of higher-education programs, including options in Paris and other major cities.'
  },
  {
    id: 'moldova',
    name: 'Moldova',
    flagUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Nicolae Testemitanu State University of Medicine and Pharmacy, affordable European MBBS.',
    universitiesCount: 'State Medical & Tech Universities',
    avgTuition: '€4,200 - €5,500 EUR / year',
    postStudyWork: 'European clinical pathway',
    popularIntakes: ['September'],
    description: 'Eastern European haven offering recognized medical degrees with clinical rotations aligned to USMLE and PLAB.'
  },
  {
    id: 'canada',
    name: 'Canada',
    flagUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Post-graduation work permit (PGWP), express entry PR pathways, world-ranked universities.',
    universitiesCount: '95+ DLI Universities & Colleges',
    avgTuition: '$16,000 - $35,000 CAD / year',
    postStudyWork: 'Up to 3 years PGWP',
    popularIntakes: ['September', 'January', 'May'],
    description: 'Canada is renowned for safety, multicultural harmony, robust post-study work permits, and clear immigration pathways.'
  },
  {
    id: 'ukraine',
    name: 'Ukraine',
    flagUrl: 'https://images.unsplash.com/photo-1561542320-9a18cd340469?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Mobility transfer programs, online-hybrid semesters, European medical degrees.',
    universitiesCount: 'Transfer & Partner Faculties',
    avgTuition: '$4,000 - $5,000 USD / year',
    postStudyWork: 'European residency options',
    popularIntakes: ['September', 'February'],
    description: 'Assisting relocated students with seamless academic mobility credits and European university transfers.'
  },
  {
    id: 'germany',
    name: 'Germany',
    flagUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=120&q=80',
    popularFor: 'Zero tuition fees at public universities, Ausbildung vocational training, Nursing jobs.',
    universitiesCount: '400+ Technical & Applied Universities',
    avgTuition: 'Free to €1,500 EUR / semester',
    postStudyWork: '18 months job seeker visa',
    popularIntakes: ['Winter (Oct)', 'Summer (April)'],
    description: 'The powerhouse of European engineering, tech, and healthcare. Free tuition at public universities and immense job demand.'
  }
];

export const HERO_LANDMARKS: LandmarkCard[] = [
  {
    id: 'united-kingdom',
    city: 'LONDON',
    country: 'United Kingdom',
    badgeBg: 'bg-blue-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80',
    details: {
      topUniversities: 'University of Oxford, University of Cambridge, Imperial College London, UCL and the University of Manchester.',
      globalRankings: 'Oxford ranked #4, Imperial joint #2 and Cambridge #6 in the QS World University Rankings 2027.',
      popularCourses: 'Business Analytics, Finance, Computer Science, Engineering, Data Science, Law and Public Health.',
      courseDuration: 'Many master programs take one year; bachelor degrees commonly take three years, depending on the programme.',
      careerOpportunities: 'Explore finance, consulting, technology, healthcare and engineering through internships and university career services.',
      graduatePathways: 'Eligible graduates may qualify for the Graduate visa or other work routes under the rules applicable at the time.'
    }
  },
  {
    id: 'canada',
    city: 'TORONTO',
    country: 'Canada',
    badgeBg: 'bg-red-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'University of Toronto, McGill University, University of British Columbia, University of Alberta and University of Waterloo.',
      globalRankings: 'Toronto, McGill and UBC are established internationally ranked institutions; check the latest QS 2027 positions for each university.',
      popularCourses: 'Computer Science, AI, Engineering, Finance, Supply Chain Management, Healthcare and Business Analytics.',
      careerExposure: 'Co-op degrees, internships and employer-linked learning are available at selected institutions and programmes.',
      admissionEssentials: 'Academic transcripts, English-language scores where required, proof of funds and a study permit.',
      workAfterGraduation: 'A Post-Graduation Work Permit may be available to eligible graduates of qualifying programmes and institutions; not every course qualifies.'
    }
  },
  {
    id: 'australia',
    city: 'SYDNEY',
    country: 'Australia',
    badgeBg: 'bg-yellow-500/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'University of Melbourne, UNSW Sydney, University of Sydney, Australian National University and Monash University.',
      globalRankings: 'UNSW and the University of Melbourne are among Australia highest-ranked institutions in QS 2027.',
      popularCourses: 'Information Technology, Engineering, Nursing, Public Health, Accounting, Business and Environmental Science.',
      industryExperience: 'Explore professional placements, internships and practical projects offered by selected courses.',
      admissionRequirements: 'Academic qualifications, English proficiency, financial evidence and student visa requirements must be met.',
      graduateOpportunities: 'Eligible students may access post-study work pathways depending on their qualification, age and applicable visa conditions.'
    }
  },
  {
    id: 'united-states',
    city: 'BOSTON',
    country: 'United States',
    badgeBg: 'bg-indigo-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'MIT, Stanford University, Harvard University, California Institute of Technology and UC Berkeley.',
      globalRankings: 'MIT ranks #1, Stanford and Imperial are joint #2, and Harvard ranks #5 in QS 2027.',
      popularCourses: 'Artificial Intelligence, Computer Science, Finance, Business, Biotechnology, Engineering and Media Studies.',
      flexibleLearning: 'Many universities offer broad subject choices, electives, research projects and interdisciplinary programmes.',
      careerPreparation: 'Internships, research opportunities and campus recruitment may support career development; employment is not guaranteed.',
      admissionReq: 'Transcripts, essays, recommendations and English tests where required; SAT, ACT or GRE requirements depend on the programme.',
      workOptions: 'OPT and STEM OPT extensions may be available to eligible students and graduates, subject to immigration rules.'
    }
  },
  {
    id: 'germany',
    city: 'BERLIN',
    country: 'Germany',
    badgeBg: 'bg-purple-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'Technical University of Munich, LMU Munich, Heidelberg University, RWTH Aachen University and Freie Universitat Berlin.',
      globalRankings: 'Technical University of Munich is ranked #25 in QS World University Rankings 2027.',
      popularCourses: 'Mechanical Engineering, Automotive Technology, Robotics, Computer Science, Renewable Energy and Business.',
      languageOptions: 'English-taught master programs are available, while many bachelor programs require German proficiency.',
      tuitionAdvantage: 'Many public universities charge no general tuition, but exceptions, semester contributions and living costs apply.',
      careerExposureGermany: 'Engineering, manufacturing, automotive, research and technology offer relevant pathways, with German language skills often beneficial.',
      graduateOptions: 'Eligible graduates may apply for Germany job-search residence pathway under the applicable requirements.'
    }
  },
  {
    id: 'ireland',
    city: 'CLIFFS OF MOHER',
    country: 'Ireland',
    badgeBg: 'bg-green-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'Trinity College Dublin, University College Dublin, University of Galway, University College Cork and University of Limerick.',
      globalRankings: 'Trinity College Dublin and UCD are prominent internationally ranked Irish universities; confirm the latest individual QS 2027 positions before publishing.',
      popularCourses: 'Data Analytics, Pharmaceutical Science, Computer Science, Finance, Business, Cybersecurity and Biotechnology.',
      industryLinks: 'Dublin technology and financial services sectors offer relevant networking and career opportunities.',
      admissions: 'Academic transcripts, English proficiency and course-specific prerequisites are typically required.',
      postStudyPathways: 'Eligible non-EU graduates may qualify for the Third Level Graduate Programme, depending on their award and current immigration conditions.'
    }
  },
  {
    id: 'france',
    city: 'PARIS',
    country: 'France',
    badgeBg: 'bg-emerald-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'Universite PSL, Institut Polytechnique de Paris, HEC Paris, Sorbonne University and Ecole Polytechnique.',
      globalRankings: 'Universite PSL ranks #8 in the QS Europe 2026 ranking; note that this is a regional ranking, not its global position.',
      popularCourses: 'Luxury Brand Management, Fashion, Business, Aerospace Engineering, Data Science, Culinary Arts and International Relations.',
      teachingLanguages: 'English-taught master and business programmes are available; French opens up additional study and career options.',
      tuition: 'Public institutions have comparatively affordable fee structures, but non-EU fees and exemptions vary. Campus France lists 2026-27 differentiated annual fees of 2,902 EUR for bachelor and 3,950 EUR for master programmes at covered public institutions.',
      careerExposureFrance: 'Luxury, hospitality, aerospace, business and technology offer potential pathways depending on the qualification and language skills.',
      admissionsAndVisas: 'Requirements vary by programme, nationality and language of instruction; check the applicable Campus France and visa process.'
    }
  },
  {
    id: 'finland',
    city: 'ROVANIEMI',
    country: 'Finland',
    badgeBg: 'bg-cyan-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'Aalto University, University of Helsinki, LUT University, Tampere University and University of Turku.',
      globalRankings: 'Aalto and the University of Helsinki are leading Finnish institutions; verify individual positions against QS 2027 before publication.',
      popularCourses: 'Artificial Intelligence, Software Engineering, Sustainable Technology, Business Analytics, Design and Renewable Energy.',
      learningApproach: 'Emphasis on research, innovation, practical projects and independent learning.',
      careerPathways: 'Technology, clean energy, research and digital industries offer relevant opportunities; Finnish language skills can improve employability.',
      postStudyOptions: 'Eligible graduates can explore Finland residence permit pathways for job-seeking or starting a business, subject to current rules.'
    }
  },
  {
    id: 'new-zealand',
    city: 'AUCKLAND',
    country: 'New Zealand',
    badgeBg: 'bg-teal-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'University of Auckland, University of Otago, University of Waikato, Victoria University of Wellington and University of Canterbury.',
      globalRankings: 'The University of Auckland is a leading New Zealand institution; check the latest QS 2027 listing for its exact position.',
      popularCourses: 'Agriculture, Environmental Science, Information Technology, Business, Engineering, Public Health and Tourism Management.',
      practicalLearning: 'Selected programmes include industry projects, internships, research and supervised professional experience.',
      admissions: 'Academic records, English-language proficiency and programme-specific criteria apply.',
      graduatePathwaysNZ: 'Eligible qualifications may support a Post Study Work Visa for up to three years, depending on the qualification and applicable rules. New Zealand has also announced further graduate visa changes from 16 November 2026.'
    }
  },
  {
    id: 'italy',
    city: 'ROME',
    country: 'Italy',
    badgeBg: 'bg-orange-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=85',
    details: {
      topUniversities: 'Politecnico di Milano, University of Bologna, Sapienza University of Rome, University of Padua and Bocconi University.',
      globalRankings: 'Politecnico di Milano ranks #45 in the QS Europe 2026 ranking; University of Bologna ranks #59 in the same regional edition.',
      popularCourses: 'Architecture, Mechanical Engineering, Fashion Design, Automotive Engineering, Economics, Finance and Luxury Management.',
      studyOptions: 'English-taught master degrees are available across several disciplines; bachelor choices vary by institution and subject.',
      industryExposureItaly: 'Fashion, design, manufacturing, automotive and hospitality sectors provide relevant career connections depending on the course.',
      admissionsItaly: 'Academic eligibility, language requirements, document recognition and student visa procedures depend on the chosen programme.'
    }
  }
];

export const VISA_SERVICES: VisaService[] = [
  {
    id: 'visitor-visa',
    title: 'Visitor Visa',
    description: 'Unlock global opportunities: streamline your business travel with our expert visa services.',
    characterType: 'visitor',
    eligibility: ['Valid passport with 6 months validity', 'Proof of sufficient funds', 'Clean immigration history', 'Travel itinerary & return flight tickets'],
    processingTime: '7 - 21 Business Days',
    requiredDocuments: ['Passport Copies', 'Bank Statements (6 months)', 'Employment/Leave Letter', 'Hotel Booking & Travel Insurance'],
    successRate: '99.2%'
  },
  {
    id: 'student-visa',
    title: 'Student Visa',
    description: 'Secure your future by pursuing international education with our seamless student visa assistance.',
    characterType: 'student',
    eligibility: ['Valid university offer / CAS / I-20 / CoE', 'English proficiency (IELTS/PTE/TOEFL)', 'Academic records & certificates', 'Financial solvency proof'],
    processingTime: '15 - 45 Business Days',
    requiredDocuments: ['Letter of Acceptance', 'Proof of Tuition Payment', 'Financial Affidavit & GIC/SOP', 'Valid Medical Certificate'],
    successRate: '98.8%'
  },
  {
    id: 'worker-visa',
    title: 'Worker Visa',
    description: 'Secure your international job opportunity: our work visa solutions pave the way for your professional aspirations.',
    characterType: 'worker',
    eligibility: ['Genuine employer job offer / sponsorship', 'Skill assessment qualification', 'Relevant professional experience', 'Basic host language proficiency'],
    processingTime: '30 - 90 Business Days',
    requiredDocuments: ['Employment Contract', 'Credential Evaluation (WES/ACS)', 'Experience Certificates', 'Police Clearance Certificate (PCC)'],
    successRate: '97.5%'
  },
  {
    id: 'citizenship',
    title: 'Migration Visa',
    description: 'Embrace a future of stability and opportunity: our expert guidance supports your journey to citizenship.',
    characterType: 'citizenship',
    eligibility: ['Permanent residency residency period met', 'Good character & tax compliance', 'Language & citizenship knowledge test', 'Continuous physical presence'],
    processingTime: '6 - 18 Months',
    requiredDocuments: ['PR Card & Passport History', 'Tax Returns & Utility Proofs', 'Citizenship Test Passed Certificate', 'Birth & Marriage Certificates'],
    successRate: '99.4%'
  },
  {
    id: 'business-visa',
    title: 'Business Visa',
    description: 'Unlock global opportunities: streamline your business travel with our expert visa services.',
    characterType: 'business',
    eligibility: ['Invitation letter from overseas company', 'Corporate registration documents', 'Confirmed meeting agenda / trade expo passes', 'Company financial statements'],
    processingTime: '10 - 25 Business Days',
    requiredDocuments: ['Company Invitation Letter', 'Letter from Employer / Board', 'Company Bank Statements', 'Travel Insurance & Accommodation'],
    successRate: '98.9%'
  }
];

export const CITY_DESTINATIONS: CityDestination[] = [
  {
    id: 'melbourne',
    name: 'Melbourne',
    country: 'Australia',
    imageUrl: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=600&q=80',
    universities: 9,
    studentsRating: 4.9
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80',
    universities: 8,
    studentsRating: 4.8
  },
  {
    id: 'brisbane',
    name: 'Brisbane',
    country: 'Australia',
    imageUrl: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80',
    universities: 5,
    studentsRating: 4.7
  },
  {
    id: 'perth',
    name: 'Perth',
    country: 'Australia',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    universities: 5,
    studentsRating: 4.7
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    universities: 18,
    studentsRating: 4.8
  },
  {
    id: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    imageUrl: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=600&q=80',
    universities: 8,
    studentsRating: 4.8
  },
  {
    id: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80',
    universities: 12,
    studentsRating: 4.7
  },
  {
    id: 'auckland',
    name: 'Auckland',
    country: 'New Zealand',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
    universities: 5,
    studentsRating: 4.8
  }
];

export const UNIVERSITIES_PARTNERS: UniversityPartner[] = [
  {
    id: 'uni-aus',
    name: 'UNIVERSITIES AUSTRALIA',
    ranking: 'Peak Body (39 Universities)'
  },
  {
    id: 'federation-1',
    name: 'Federation UNIVERSITY AUSTRALIA',
    ranking: '#1 for Employability & Skills'
  },
  {
    id: 'anu',
    name: 'Australian National University',
    ranking: 'QS World Rank #30'
  },
  {
    id: 'macquarie-1',
    name: 'MACQUARIE University SYDNEY · AUSTRALIA',
    ranking: 'QS World Rank #130'
  },
  {
    id: 'uni-aus-2',
    name: 'UNIVERSITIES AUSTRALIA',
    ranking: 'National Consortium Member'
  },
  {
    id: 'flinders',
    name: 'Flinders University',
    ranking: 'Top 2% Globally'
  },
  {
    id: 'federation-2',
    name: 'Federation UNIVERSITY AUSTRALIA',
    ranking: 'Regional Post-Study Perks (Up to 4 Yrs)'
  },
  {
    id: 'anu-2',
    name: 'Australian National University',
    ranking: 'Group of Eight (Go8) Premier'
  },
  {
    id: 'macquarie-2',
    name: 'MACQUARIE University SYDNEY · AUSTRALIA',
    ranking: '5 QS Stars Rating'
  },
  {
    id: 'uni-aus-3',
    name: 'UNIVERSITIES AUSTRALIA',
    ranking: 'CRICOS Accredited Network'
  },
  {
    id: 'flinders-2',
    name: 'Flinders University',
    ranking: 'Adelaide Innovation Hub'
  },
  {
    id: 'federation-3',
    name: 'Federation UNIVERSITY AUSTRALIA',
    ranking: 'Guaranteed Industry Placements'
  }
];
