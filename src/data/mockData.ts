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
    id: 'paris',
    city: 'PARIS',
    country: 'France',
    badgeBg: 'bg-emerald-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 'london',
    city: 'LONDON',
    country: 'United Kingdom',
    badgeBg: 'bg-blue-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 'china',
    city: 'CHINA',
    country: 'China',
    badgeBg: 'bg-amber-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 'russia',
    city: 'RUSSIA',
    country: 'Russia',
    badgeBg: 'bg-purple-600/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 'sydney',
    city: 'SYDNEY',
    country: 'Australia',
    badgeBg: 'bg-yellow-500/90 text-white',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=700&q=85'
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
