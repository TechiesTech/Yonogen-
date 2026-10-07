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
  bgColor: string;
  textColor: string;
  accentColor: string;
  badgeBg: string;
  imageUrl: string;
  svgType: 'eiffel' | 'towerbridge' | 'pagoda' | 'stbasil' | 'sydneyopera';
}

export interface VisaService {
  id: string;
  title: string;
  slug: string;
  description: string;
  characterType: 'visitor' | 'student' | 'worker' | 'citizenship' | 'business';
  badgeBg: string;
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
  tagline: string;
  universities: number;
  studentsRating: number;
}

export interface TestimonialReview {
  id: string;
  name: string;
  role: string;
  university: string;
  country: string;
  rating: number;
  avatar: string;
  hasVideo: boolean;
  videoTitle: string;
  quote: string;
  size: 'small' | 'medium' | 'large';
  tag: string;
}

export interface UniversityPartner {
  id: string;
  name: string;
  country: string;
  ranking: string;
  popularPrograms: string;
  established: string;
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
    id: 'paris',
    city: 'PARIS',
    country: 'France',
    bgColor: 'from-emerald-500 to-teal-700',
    textColor: 'text-white',
    accentColor: '#10b981',
    badgeBg: 'bg-emerald-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=700&q=85',
    svgType: 'eiffel'
  },
  {
    id: 'london',
    city: 'LONDON',
    country: 'United Kingdom',
    bgColor: 'from-blue-600 to-indigo-800',
    textColor: 'text-white',
    accentColor: '#3b82f6',
    badgeBg: 'bg-blue-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=85',
    svgType: 'towerbridge'
  },
  {
    id: 'china',
    city: 'CHINA',
    country: 'China',
    bgColor: 'from-amber-500 to-orange-600',
    textColor: 'text-white',
    accentColor: '#830dfa',
    badgeBg: 'bg-amber-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=700&q=85',
    svgType: 'pagoda'
  },
  {
    id: 'russia',
    city: 'RUSSIA',
    country: 'Russia',
    bgColor: 'from-purple-600 to-fuchsia-800',
    textColor: 'text-white',
    accentColor: '#a855f7',
    badgeBg: 'bg-purple-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=700&q=85',
    svgType: 'stbasil'
  },
  {
    id: 'sydney',
    city: 'SYDNEY',
    country: 'Australia',
    bgColor: 'from-amber-400 to-yellow-500',
    textColor: 'text-white',
    accentColor: '#830dfa',
    badgeBg: 'bg-yellow-500/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=85',
    svgType: 'sydneyopera'
  }
];

export const VISA_SERVICES: VisaService[] = [
  {
    id: 'visitor-visa',
    title: 'Visitor Visa',
    slug: 'visitor-visa',
    description: 'Unlock global opportunities: streamline your business travel with our expert visa services.',
    characterType: 'visitor',
    badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
    eligibility: ['Valid passport with 6 months validity', 'Proof of sufficient funds', 'Clean immigration history', 'Travel itinerary & return flight tickets'],
    processingTime: '7 - 21 Business Days',
    requiredDocuments: ['Passport Copies', 'Bank Statements (6 months)', 'Employment/Leave Letter', 'Hotel Booking & Travel Insurance'],
    successRate: '99.2%'
  },
  {
    id: 'student-visa',
    title: 'Student Visa',
    slug: 'student-visa',
    description: 'Secure your future by pursuing international education with our seamless student visa assistance.',
    characterType: 'student',
    badgeBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    eligibility: ['Valid university offer / CAS / I-20 / CoE', 'English proficiency (IELTS/PTE/TOEFL)', 'Academic records & certificates', 'Financial solvency proof'],
    processingTime: '15 - 45 Business Days',
    requiredDocuments: ['Letter of Acceptance', 'Proof of Tuition Payment', 'Financial Affidavit & GIC/SOP', 'Valid Medical Certificate'],
    successRate: '98.8%'
  },
  {
    id: 'worker-visa',
    title: 'Worker Visa',
    slug: 'worker-visa',
    description: 'Secure your international job opportunity: our work visa solutions pave the way for your professional aspirations.',
    characterType: 'worker',
    badgeBg: 'bg-blue-50 text-blue-900 border-blue-200',
    eligibility: ['Genuine employer job offer / sponsorship', 'Skill assessment qualification', 'Relevant professional experience', 'Basic host language proficiency'],
    processingTime: '30 - 90 Business Days',
    requiredDocuments: ['Employment Contract', 'Credential Evaluation (WES/ACS)', 'Experience Certificates', 'Police Clearance Certificate (PCC)'],
    successRate: '97.5%'
  },
  {
    id: 'citizenship',
    title: 'Citizenship',
    slug: 'citizenship',
    description: 'Embrace a future of stability and opportunity: our expert guidance supports your journey to citizenship.',
    characterType: 'citizenship',
    badgeBg: 'bg-purple-50 text-purple-900 border-purple-200',
    eligibility: ['Permanent residency residency period met', 'Good character & tax compliance', 'Language & citizenship knowledge test', 'Continuous physical presence'],
    processingTime: '6 - 18 Months',
    requiredDocuments: ['PR Card & Passport History', 'Tax Returns & Utility Proofs', 'Citizenship Test Passed Certificate', 'Birth & Marriage Certificates'],
    successRate: '99.4%'
  },
  {
    id: 'business-visa',
    title: 'Business Visa',
    slug: 'business-visa',
    description: 'Unlock global opportunities: streamline your business travel with our expert visa services.',
    characterType: 'business',
    badgeBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
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
    tagline: 'Voted World’s Most Liveable Student City',
    universities: 9,
    studentsRating: 4.9
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80',
    tagline: 'Global Financial & Tech Epicenter',
    universities: 8,
    studentsRating: 4.8
  },
  {
    id: 'brisbane',
    name: 'Brisbane',
    country: 'Australia',
    imageUrl: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80',
    tagline: 'Sunshine Capital with Great Affordability',
    universities: 5,
    studentsRating: 4.7
  },
  {
    id: 'perth',
    name: 'Perth',
    country: 'Australia',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    tagline: 'Resource Hub & Extra Regional Migration Points',
    universities: 5,
    studentsRating: 4.7
  }
];

export const CLIENT_TESTIMONIALS: TestimonialReview[] = [
  {
    id: '1',
    name: 'Dr. Rohan Mehra',
    role: 'MBBS Graduate',
    university: 'Kazan Federal University',
    country: 'Russia',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=260&q=80',
    hasVideo: true,
    videoTitle: 'My Journey to Medical Degree in Russia',
    quote: 'Jagvimal guided me from NEET counselling all the way to hostel check-in in Russia. 100% transparent and supportive team.',
    size: 'large',
    tag: 'Medical'
  },
  {
    id: '2',
    name: 'Ananya Sharma',
    role: 'Master in Management',
    university: 'University of Sydney',
    country: 'Australia',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80',
    hasVideo: true,
    videoTitle: 'Admitted with 30% Scholarship in Sydney',
    quote: 'From IELTS 7.5 prep to Australian visa grant in just 14 days! Jagvimal consultants made my dream come true.',
    size: 'large',
    tag: 'Management'
  },
  {
    id: '3',
    name: 'Dr. Vivek Sharma',
    role: 'General Physician',
    university: 'Semmelweis & German Board',
    country: 'Germany',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=260&q=80',
    hasVideo: true,
    videoTitle: 'Medical Licensing and Nursing Path in Germany',
    quote: 'Their German language faculty and Approbation licensing guidance are top tier in India.',
    size: 'medium',
    tag: 'Healthcare'
  },
  {
    id: '4',
    name: 'Pooja Verma',
    role: 'Staff Nurse',
    university: 'Anerkennung Program',
    country: 'Germany',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1594824813511-9a99787ff27c?auto=format&fit=crop&w=260&q=80',
    hasVideo: false,
    videoTitle: 'Hospital Placement in Frankfurt',
    quote: 'Zero tuition and guaranteed hospital contract with 2,800€ monthly starting pay. Thank you Jagvimal!',
    size: 'small',
    tag: 'Nursing'
  },
  {
    id: '5',
    name: 'Harpreet Singh',
    role: 'Cloud Architect',
    university: 'Seneca College & Tech PR',
    country: 'Canada',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=260&q=80',
    hasVideo: true,
    videoTitle: 'Canada Student to Work Permit Transition',
    quote: 'Got my Canadian visa approved after one prior refusal through another agent. Jagvimal’s SOP drafted by legal counsel was flawless.',
    size: 'medium',
    tag: 'Technology'
  },
  {
    id: '6',
    name: 'Dr. Sneha Patel',
    role: 'Surgical Resident',
    university: 'Astana Medical University',
    country: 'Kazakhstan',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=260&q=80',
    hasVideo: false,
    videoTitle: 'Kazakhstan Clinical Training',
    quote: 'Hands-on clinical exposure and excellent Indian food mess right on campus. Best overseas mentor.',
    size: 'small',
    tag: 'Medical'
  }
];

export const UNIVERSITIES_PARTNERS: UniversityPartner[] = [
  {
    id: 'uni-aus',
    name: 'UNIVERSITIES AUSTRALIA',
    country: 'Australia',
    ranking: 'Peak Body (39 Universities)',
    popularPrograms: 'Higher Education Framework',
    established: '1920'
  },
  {
    id: 'federation-1',
    name: 'Federation UNIVERSITY AUSTRALIA',
    country: 'Australia',
    ranking: '#1 for Employability & Skills',
    popularPrograms: 'IT, Nursing, Engineering, MBA',
    established: '1870'
  },
  {
    id: 'anu',
    name: 'Australian National University',
    country: 'Australia',
    ranking: 'QS World Rank #30',
    popularPrograms: 'Law, Public Policy, Physics',
    established: '1946'
  },
  {
    id: 'macquarie-1',
    name: 'MACQUARIE University SYDNEY · AUSTRALIA',
    country: 'Australia',
    ranking: 'QS World Rank #130',
    popularPrograms: 'Business Analytics, Cyber Security',
    established: '1964'
  },
  {
    id: 'uni-aus-2',
    name: 'UNIVERSITIES AUSTRALIA',
    country: 'Australia',
    ranking: 'National Consortium Member',
    popularPrograms: 'International Student Mobility',
    established: '1920'
  },
  {
    id: 'flinders',
    name: 'Flinders University',
    country: 'Australia',
    ranking: 'Top 2% Globally',
    popularPrograms: 'Biomedicine, AI, Social Work',
    established: '1966'
  },
  {
    id: 'federation-2',
    name: 'Federation UNIVERSITY AUSTRALIA',
    country: 'Australia',
    ranking: 'Regional Post-Study Perks (Up to 4 Yrs)',
    popularPrograms: 'Hospitality, Data Science',
    established: '1870'
  },
  {
    id: 'anu-2',
    name: 'Australian National University',
    country: 'Australia',
    ranking: 'Group of Eight (Go8) Premier',
    popularPrograms: 'Environmental Science, Economics',
    established: '1946'
  },
  {
    id: 'macquarie-2',
    name: 'MACQUARIE University SYDNEY · AUSTRALIA',
    country: 'Australia',
    ranking: '5 QS Stars Rating',
    popularPrograms: 'Finance, Media, Health Science',
    established: '1964'
  },
  {
    id: 'uni-aus-3',
    name: 'UNIVERSITIES AUSTRALIA',
    country: 'Australia',
    ranking: 'CRICOS Accredited Network',
    popularPrograms: 'UG & PG Degree Direct Enrolment',
    established: '1920'
  },
  {
    id: 'flinders-2',
    name: 'Flinders University',
    country: 'Australia',
    ranking: 'Adelaide Innovation Hub',
    popularPrograms: 'Creative Arts, Mechanical Eng',
    established: '1966'
  },
  {
    id: 'federation-3',
    name: 'Federation UNIVERSITY AUSTRALIA',
    country: 'Australia',
    ranking: 'Guaranteed Industry Placements',
    popularPrograms: 'Mining, Civil Eng, Commerce',
    established: '1870'
  }
];
