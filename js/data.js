// Disclosure Desk Mock Data & Utility Functions
// Today's fixed date for demo: 2026-05-06

const TODAY = new Date('2026-05-06');

const MOCK_USER = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  initials: 'JD',
  organization: 'Clearinghouse News',
  role: 'Investigative Reporter'
};

const STATUS_CONFIG = {
  submitted: {
    label: 'Submitted',
    badgeClass: 'bg-slate-100 text-slate-600',
    dotClass: 'bg-slate-400'
    // successRate: — future use: % of requests in this state that eventually received a response
    // avgDays: — future use: avg days to move out of this status
  },
  acknowledged: {
    label: 'Acknowledged',
    badgeClass: 'bg-blue-100 text-blue-700',
    dotClass: 'bg-blue-500'
  },
  processing: {
    label: 'Processing',
    badgeClass: 'bg-amber-100 text-amber-700',
    dotClass: 'bg-amber-500'
  },
  responded: {
    label: 'Responded',
    badgeClass: 'bg-green-100 text-green-700',
    dotClass: 'bg-green-500'
  },
  appealed: {
    label: 'Appealed',
    badgeClass: 'bg-orange-100 text-orange-700',
    dotClass: 'bg-orange-500'
  },
  closed: {
    label: 'Closed',
    badgeClass: 'bg-slate-100 text-slate-500',
    dotClass: 'bg-slate-300'
  },
  overdue: {
    label: 'Overdue',
    badgeClass: 'bg-red-100 text-red-700',
    dotClass: 'bg-red-500'
  }
};

const MOCK_REQUESTS = [
  // ── City agencies (NY FOIL) ───────────────────────────────────────────────
  {
    id: 1,
    agency: 'New York Police Department',
    agencyAbbr: 'NYPD',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'ShotSpotter gunshot detection contracts and performance data, 2015–present',
    description: 'Contracts, payments, deployment maps, and accuracy reports for NYPD\'s gunshot detection program, 2015 to present.',
    submitted: '2026-03-20',
    acknowledged: '2026-03-25',
    deadline: '2026-04-22',
    trackingNumber: 'NYPD-FOIL-2026-04421',
    status: 'overdue',
    contactName: 'NYPD FOIL Unit',
    contactEmail: 'foil.unit@nypd.org',
    notes: [
      { date: '2026-03-25', text: 'Acknowledgment received. Case number assigned.' },
      { date: '2026-04-10', text: 'Called FOIL unit — still in queue.' },
      { date: '2026-04-23', text: 'Deadline passed. Sent written follow-up.' },
      { date: '2026-05-01', text: 'Second follow-up sent. No response.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 2,
    agency: 'New York Police Department',
    agencyAbbr: 'NYPD',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Facial recognition technology vendor agreements and usage logs, 2017–present',
    description: 'Vendor agreements, usage logs, and internal accuracy assessments for NYPD\'s facial recognition program, 2017 to present.',
    submitted: '2026-01-15',
    acknowledged: '2026-01-20',
    deadline: '2026-02-19',
    trackingNumber: 'NYPD-FOIL-2026-00892',
    status: 'responded',
    contactName: 'NYPD FOIL Unit',
    contactEmail: 'foil.unit@nypd.org',
    notes: [
      { date: '2026-01-20', text: 'Acknowledgment received.' },
      { date: '2026-02-14', text: 'Partial response received — 312 pages. ~180 pages withheld under law enforcement exemption.' },
      { date: '2026-03-10', text: 'Filed appeal for withheld accuracy records.' }
    ],
    documents: ['nypd-fr-partial-response-feb14.pdf', 'nypd-fr-vaughn-index.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 3,
    agency: 'New York Police Department',
    agencyAbbr: 'NYPD',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Criminal Group Database enrollment criteria and demographic breakdown',
    description: 'Enrollment criteria, demographic breakdown, and removal procedures for NYPD\'s Criminal Group Database.',
    submitted: '2025-09-10',
    acknowledged: '2025-09-16',
    deadline: '2025-10-15',
    trackingNumber: 'NYPD-FOIL-2025-19034',
    status: 'appealed',
    contactName: 'NYPD FOIL Unit',
    contactEmail: 'foil.unit@nypd.org',
    notes: [
      { date: '2025-09-16', text: 'Acknowledgment received.' },
      { date: '2025-10-15', text: 'Request denied in full — law enforcement exemption claimed.' },
      { date: '2025-10-30', text: 'Filed administrative appeal.' },
      { date: '2025-12-05', text: 'Appeal denied. Considering Article 78 proceeding.' }
    ],
    documents: ['denial-letter-oct15.pdf', 'appeal-denial-dec5.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 4,
    agency: 'NYC Department of Correction',
    agencyAbbr: 'NYC DOC',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Solitary confinement and isolation placement data at Rikers Island, 2020–2024',
    description: 'Monthly data on isolation placements, incident reports, and compliance records for solitary confinement at NYC detention facilities, 2020–2024.',
    submitted: '2025-11-01',
    acknowledged: '2025-11-08',
    deadline: '2025-12-08',
    trackingNumber: 'DOC-FOIL-2025-4471',
    status: 'overdue',
    contactName: 'NYC DOC FOIL Unit',
    contactEmail: 'foilrequests@doc.nyc.gov',
    notes: [
      { date: '2025-11-08', text: 'Acknowledgment received.' },
      { date: '2025-12-09', text: 'Deadline passed without response.' },
      { date: '2026-01-10', text: 'Called Records Access Officer — still under review.' },
      { date: '2026-04-01', text: 'Formal demand letter sent citing FOIL obligations.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 5,
    agency: 'NYC Dept. of Housing Preservation and Development',
    agencyAbbr: 'NYC HPD',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Lead paint violations in city-subsidized buildings, 2018–2023',
    description: 'Housing code violations for lead paint hazards in city-subsidized buildings, 2018–2023, including compliance status.',
    submitted: '2025-08-15',
    acknowledged: '2025-08-20',
    deadline: '2025-09-17',
    trackingNumber: 'HPD-FOIL-2025-8892',
    status: 'closed',
    contactName: 'HPD Records Access Officer',
    contactEmail: 'foil@hpd.nyc.gov',
    notes: [
      { date: '2025-08-20', text: 'Acknowledgment received.' },
      { date: '2025-09-12', text: 'Response received — 4,217 violation records provided as spreadsheet.' },
      { date: '2025-09-18', text: 'Reviewed records. Data complete. Closing request.' }
    ],
    documents: ['hpd-lead-violations-data.xlsx', 'hpd-response-letter-sept12.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 6,
    agency: 'NYC Dept. of Social Services',
    agencyAbbr: 'NYC DSS',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Inspection reports and violations for city homeless shelter facilities, 2021–2024',
    description: 'Inspection reports, violations, and corrective action records for city-contracted homeless shelter facilities, 2021–2024.',
    submitted: '2026-02-20',
    acknowledged: '2026-02-26',
    deadline: '2026-03-26',
    trackingNumber: 'DSS-FOIL-2026-1143',
    status: 'overdue',
    contactName: 'DSS Records Access Officer',
    contactEmail: 'foil@dss.nyc.gov',
    notes: [
      { date: '2026-02-26', text: 'Acknowledgment received.' },
      { date: '2026-03-27', text: 'Deadline passed. Follow-up sent.' },
      { date: '2026-04-10', text: 'Extension notice received — agency claims unusual circumstances.' },
      { date: '2026-04-15', text: 'Contested extension notice — insufficient justification under FOIL.' }
    ],
    documents: ['dss-extension-notice.pdf'],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 7,
    agency: 'New York City Dept. of Education',
    agencyAbbr: 'NYC DOE',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'School safety agent use-of-force incidents on school campuses, 2020–2024',
    description: 'Use-of-force incidents involving school safety agents and NYPD officers on NYC school campuses, 2020–2024.',
    submitted: '2026-04-28',
    acknowledged: null,
    deadline: null,
    trackingNumber: null,
    status: 'submitted',
    contactName: 'NYC DOE FOIL Unit',
    contactEmail: 'foil@schools.nyc.gov',
    notes: [
      { date: '2026-04-28', text: 'Request submitted via NYC OpenRecords portal. Confirmation email received.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 8,
    agency: 'NYC Department of Transportation',
    agencyAbbr: 'NYC DOT',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Speed camera enforcement data by neighborhood and income level, 2019–2024',
    description: 'Ticketing records from NYC\'s automated speed enforcement program, broken down by community district and median income, 2019–2024.',
    submitted: '2026-02-14',
    acknowledged: '2026-02-20',
    deadline: '2026-06-01',
    trackingNumber: 'DOT-FOIL-2026-0215',
    status: 'processing',
    contactName: 'NYC DOT FOIL Officer',
    contactEmail: 'foil@dot.nyc.gov',
    notes: [
      { date: '2026-02-20', text: 'Acknowledgment received.' },
      { date: '2026-03-20', text: 'Extension notice — needs additional time to compile neighborhood-level data.' },
      { date: '2026-04-15', text: 'Checked status — still processing. New deadline June 1.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 9,
    agency: 'New York City Fire Department',
    agencyAbbr: 'FDNY',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Emergency response times by borough and neighborhood, 2020–2024',
    description: 'Average and median emergency response times by community district and borough, 2020–2024, including breakdown by call type.',
    submitted: '2025-10-05',
    acknowledged: '2025-10-10',
    deadline: '2025-11-07',
    trackingNumber: 'FDNY-FOIL-2025-3301',
    status: 'closed',
    contactName: 'FDNY Records Access Officer',
    contactEmail: 'foilrequests@fdny.nyc.gov',
    notes: [
      { date: '2025-10-10', text: 'Acknowledgment received.' },
      { date: '2025-11-03', text: 'Full response received — data provided in Excel format for all five boroughs.' },
      { date: '2025-11-10', text: 'Data verified and downloaded. Request closed.' }
    ],
    documents: ['fdny-response-times-2020-2024.xlsx'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 10,
    agency: 'NYC Department of Buildings',
    agencyAbbr: 'NYC DOB',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Building complaints, violations, and ECB hearings in the Bronx, 2020–2024',
    description: 'Building code complaints, issued violations, and Environmental Control Board hearing outcomes for Bronx community districts, 2020–2024.',
    submitted: '2026-03-01',
    acknowledged: '2026-03-07',
    deadline: '2026-05-25',
    trackingNumber: 'DOB-FOIL-2026-0891',
    status: 'processing',
    contactName: 'NYC DOB FOIL Officer',
    contactEmail: 'foil@buildings.nyc.gov',
    notes: [
      { date: '2026-03-07', text: 'Acknowledgment received.' },
      { date: '2026-04-04', text: 'Extension requested — large volume of records requires additional time.' },
      { date: '2026-04-20', text: 'New deadline confirmed as May 25.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 11,
    agency: 'NYC Commission on Human Rights',
    agencyAbbr: 'NYC CCHR',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Discrimination complaint filing and resolution times by protected category, 2019–2023',
    description: 'Volume, type, and resolution timelines for discrimination complaints filed with NYC Commission on Human Rights, by protected category and borough, 2019–2023.',
    submitted: '2026-03-15',
    acknowledged: '2026-03-20',
    deadline: '2026-05-10',
    trackingNumber: 'CCHR-FOIL-2026-0441',
    status: 'acknowledged',
    contactName: 'CCHR Records Officer',
    contactEmail: 'foil@cchr.nyc.gov',
    notes: [
      { date: '2026-03-20', text: 'Acknowledgment received. Deadline set as May 10.' },
      { date: '2026-04-28', text: 'Sent status inquiry — awaiting coordinator response.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 12,
    agency: 'NYC Mayor\'s Office',
    agencyAbbr: 'Mayor\'s Office',
    agencyType: 'city',
    jurisdiction: 'NY FOIL',
    subject: 'Internal communications on homeless shelter relocation and community notification policy',
    description: 'Memos and communications on the city\'s policy for relocating homeless shelter sites and notifying affected communities, 2023–2025.',
    submitted: '2026-03-10',
    acknowledged: '2026-03-16',
    deadline: '2026-05-20',
    trackingNumber: 'MAYOR-FOIL-2026-0012',
    status: 'processing',
    contactName: 'Mayor\'s Office FOIL Coordinator',
    contactEmail: 'foil@cityhall.nyc.gov',
    notes: [
      { date: '2026-03-16', text: 'Acknowledgment received.' },
      { date: '2026-04-15', text: 'Status check — told request is under legal review.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  // ── State agencies (NY FOIL) ──────────────────────────────────────────────
  {
    id: 13,
    agency: 'Metropolitan Transportation Authority',
    agencyAbbr: 'MTA',
    agencyType: 'state',
    jurisdiction: 'NY FOIL',
    subject: 'Fare evasion enforcement records disaggregated by race and borough, 2019–2023',
    description: 'Fare evasion enforcement records broken down by race, age, and borough, 2019–2023.',
    submitted: '2026-04-10',
    acknowledged: '2026-04-15',
    deadline: '2026-05-10',
    trackingNumber: 'MTA-FOIL-2026-0382',
    status: 'acknowledged',
    contactName: 'MTA Law Department — FOIL',
    contactEmail: 'foil@mtahq.org',
    notes: [
      { date: '2026-04-15', text: 'Acknowledgment received. Assigned to FOIL coordinator.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 14,
    agency: 'NYS Dept. of Environmental Conservation',
    agencyAbbr: 'NYS DEC',
    agencyType: 'state',
    jurisdiction: 'NY FOIL',
    subject: 'Toxic waste facility inspection records and enforcement actions, 2020–2023',
    description: 'Inspection reports, violation notices, and enforcement actions for registered hazardous waste facilities in New York State, 2020–2023.',
    submitted: '2025-12-01',
    acknowledged: '2025-12-08',
    deadline: '2026-01-05',
    trackingNumber: 'DEC-FOIL-2025-7823',
    status: 'responded',
    contactName: 'NYS DEC FOIL Officer',
    contactEmail: 'foil@dec.ny.gov',
    notes: [
      { date: '2025-12-08', text: 'Acknowledgment received.' },
      { date: '2025-12-30', text: 'Response received ahead of deadline — 892 pages of inspection records provided.' },
      { date: '2026-01-08', text: 'Reviewing documents. Significant number of violations with no follow-up enforcement noted.' }
    ],
    documents: ['nys-dec-inspection-records.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 15,
    agency: 'NYS Dept. of Corrections and Community Supervision',
    agencyAbbr: 'NYS DOCCS',
    agencyType: 'state',
    jurisdiction: 'NY FOIL',
    subject: 'Parole denial rates and decision data by race and supervising officer, 2018–2023',
    description: 'Parole board denial rates and decision records, broken down by race and assigned parole officer, 2018–2023.',
    submitted: '2026-03-18',
    acknowledged: '2026-03-24',
    deadline: '2026-05-09',
    trackingNumber: 'DOCCS-FOIL-2026-0221',
    status: 'acknowledged',
    contactName: 'NYS DOCCS FOIL Officer',
    contactEmail: 'foil@doccs.ny.gov',
    notes: [
      { date: '2026-03-24', text: 'Acknowledgment received. Deadline set as May 9.' },
      { date: '2026-04-22', text: 'Status check sent — no response yet.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 16,
    agency: 'NYS Department of Health',
    agencyAbbr: 'NYS DOH',
    agencyType: 'state',
    jurisdiction: 'NY FOIL',
    subject: 'Nursing home staffing ratios and death reporting during COVID-19, 2020–2021',
    description: 'Nursing home staffing data and COVID-19 death reporting for New York State facilities, 2020–2021.',
    submitted: '2025-06-01',
    acknowledged: '2025-06-08',
    deadline: '2025-07-06',
    trackingNumber: 'DOH-FOIL-2025-4411',
    status: 'closed',
    contactName: 'NYS DOH FOIL Unit',
    contactEmail: 'foil@health.ny.gov',
    notes: [
      { date: '2025-06-08', text: 'Acknowledgment received.' },
      { date: '2025-07-01', text: 'Full response received — data provided for all 619 registered nursing facilities.' },
      { date: '2025-07-10', text: 'Data downloaded and verified. Request closed.' }
    ],
    documents: ['nys-nursing-home-data.xlsx', 'doh-response-july1.pdf'],
    reminderDays: [7, 3, 1]
  },
  // ── Federal agencies (Federal FOIA) ──────────────────────────────────────
  {
    id: 17,
    agency: 'Federal Bureau of Investigation',
    agencyAbbr: 'FBI',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'Surveillance records on Muslim community organizations in New York City, 2008–2020',
    description: 'Surveillance and intelligence records related to monitoring of Muslim community organizations in New York City, 2008–2020.',
    submitted: '2025-03-01',
    acknowledged: '2025-03-10',
    deadline: '2025-04-08',
    trackingNumber: 'FBI-2025-FOIPA-09341',
    status: 'overdue',
    contactName: 'FBI Record/Information Dissemination Section',
    contactEmail: 'rids@fbi.gov',
    notes: [
      { date: '2025-03-10', text: 'Acknowledgment received. Estimated 6–18 month processing time.' },
      { date: '2025-07-15', text: 'Status check via eFOIPA portal — still pending.' },
      { date: '2026-03-20', text: 'Request now over a year old. No substantive response. Consulting legal counsel.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 18,
    agency: 'Environmental Protection Agency',
    agencyAbbr: 'EPA',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'Air quality data and enforcement records for South Bronx communities, 2018–present',
    description: 'Air quality monitoring data and enforcement records for South Bronx communities, 2018 to present.',
    submitted: '2026-03-10',
    acknowledged: '2026-03-14',
    deadline: '2026-05-25',
    trackingNumber: 'EPA-R2-2026-003341',
    status: 'processing',
    contactName: 'EPA Region 2 FOIA Office',
    contactEmail: 'r2foia@epa.gov',
    notes: [
      { date: '2026-03-14', text: 'Acknowledgment received from EPA Region 2.' },
      { date: '2026-04-12', text: 'Extension notice — coordinating across multiple program offices.' },
      { date: '2026-04-24', text: 'Follow-up sent. Still listed as in progress on EPA FOIA Online.' }
    ],
    documents: ['epa-extension-notice-apr12.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 19,
    agency: 'Drug Enforcement Administration',
    agencyAbbr: 'DEA',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'Asset forfeiture records for seizures in the New York metro area, 2018–2023',
    description: 'Asset forfeiture case records and seizure data for DEA operations in the New York metropolitan area, 2018–2023.',
    submitted: '2026-03-22',
    acknowledged: '2026-03-28',
    deadline: '2026-05-08',
    trackingNumber: 'DEA-FOIA-2026-00714',
    status: 'acknowledged',
    contactName: 'DEA FOIA/Records Management Section',
    contactEmail: 'dea.foia@usdoj.gov',
    notes: [
      { date: '2026-03-28', text: 'Acknowledgment received. Deadline set as May 8.' },
      { date: '2026-04-30', text: 'Status check sent — no response yet.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 20,
    agency: 'Dept. of Homeland Security — ICE',
    agencyAbbr: 'DHS/ICE',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'Arrest and detention records for individuals processed at New York field offices, 2021–2024',
    description: 'ICE arrest and detention records for individuals processed through New York area field offices, 2021–2024.',
    submitted: '2025-09-15',
    acknowledged: '2025-09-22',
    deadline: '2025-10-22',
    trackingNumber: 'DHS-FOIA-2025-04812',
    status: 'overdue',
    contactName: 'ICE FOIA Office',
    contactEmail: 'ice-foia@dhs.gov',
    notes: [
      { date: '2025-09-22', text: 'Acknowledgment received.' },
      { date: '2025-10-23', text: 'Deadline passed without response.' },
      { date: '2026-01-15', text: 'Third follow-up sent. No substantive response.' },
      { date: '2026-04-01', text: 'Sent formal demand letter. Considering FOIA lawsuit.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 21,
    agency: 'Dept. of Housing and Urban Development',
    agencyAbbr: 'HUD',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'NYCHA inspection scores, repair backlogs, and capital improvement records, 2019–2024',
    description: 'HUD inspection records and capital repair data for NYCHA public housing developments, 2019–2024.',
    submitted: '2026-01-20',
    acknowledged: '2026-01-26',
    deadline: '2026-02-24',
    trackingNumber: 'HUD-FOIA-2026-00234',
    status: 'responded',
    contactName: 'HUD FOIA Division',
    contactEmail: 'foiarequest@hud.gov',
    notes: [
      { date: '2026-01-26', text: 'Acknowledgment received.' },
      { date: '2026-02-20', text: 'Response received — 1,204 pages of inspection reports. Several developments failed multiple inspections.' },
      { date: '2026-03-01', text: 'Reviewed key documents. Strong data for story on repair backlog.' }
    ],
    documents: ['hud-nycha-inspections-2019-2024.pdf', 'hud-response-letter.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 22,
    agency: 'U.S. Citizenship and Immigration Services',
    agencyAbbr: 'USCIS',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'Application processing times by field office and category, 2020–2024',
    description: 'USCIS application processing time data by field office, application type, and year, 2020–2024.',
    submitted: '2026-04-03',
    acknowledged: null,
    deadline: null,
    trackingNumber: null,
    status: 'submitted',
    contactName: 'USCIS FOIA/PA Program',
    contactEmail: 'uscis.foia@uscis.dhs.gov',
    notes: [
      { date: '2026-04-03', text: 'Request submitted via online FOIA portal. Confirmation number received.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 23,
    agency: 'U.S. Customs and Border Protection',
    agencyAbbr: 'CBP',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'Enforcement actions and traveler detentions at JFK and Newark airports, 2020–2024',
    description: 'CBP enforcement records and secondary screening detentions at JFK International and Newark Liberty airports, 2020–2024.',
    submitted: '2026-03-28',
    acknowledged: '2026-04-03',
    deadline: '2026-06-10',
    trackingNumber: 'CBP-FOIA-2026-012341',
    status: 'processing',
    contactName: 'CBP FOIA Division',
    contactEmail: 'cbp-foia@cbp.dhs.gov',
    notes: [
      { date: '2026-04-03', text: 'Acknowledgment received.' },
      { date: '2026-04-28', text: 'Extension claimed — large volume of records requires additional review time.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 24,
    agency: 'Department of Justice',
    agencyAbbr: 'DOJ',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'Civil rights investigation referrals and resolutions for New York State, 2018–2023',
    description: 'Civil rights division investigation referrals, case resolutions, and outcomes for matters originating in New York State, 2018–2023.',
    submitted: '2026-04-15',
    acknowledged: '2026-04-21',
    deadline: '2026-06-05',
    trackingNumber: 'DOJ-FOIA-2026-8821',
    status: 'acknowledged',
    contactName: 'DOJ FOIA/PA Unit',
    contactEmail: 'foia.mail@usdoj.gov',
    notes: [
      { date: '2026-04-21', text: 'Acknowledgment received. Assigned case number.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 25,
    agency: 'Federal Communications Commission',
    agencyAbbr: 'FCC',
    agencyType: 'federal',
    jurisdiction: 'Federal FOIA',
    subject: 'Cell-site simulator and IMSI catcher usage authorization records for New York State',
    description: 'Records authorizing the use of cell-site simulators (Stingrays) and IMSI catchers by law enforcement in New York State, including any FCC authorizations or waivers.',
    submitted: '2025-07-10',
    acknowledged: '2025-07-15',
    deadline: '2025-08-13',
    trackingNumber: 'FCC-FOIA-2025-0441',
    status: 'appealed',
    contactName: 'FCC FOIA Branch',
    contactEmail: 'foia@fcc.gov',
    notes: [
      { date: '2025-07-15', text: 'Acknowledgment received.' },
      { date: '2025-08-13', text: 'Response received — request denied in full. Cited law enforcement exemption.' },
      { date: '2025-08-28', text: 'Filed administrative appeal arguing overbroad exemption application.' },
      { date: '2025-10-01', text: 'Appeal pending. No response from FCC appeals officer.' }
    ],
    documents: ['fcc-denial-aug13.pdf', 'fcc-appeal-aug28.pdf'],
    reminderDays: [7, 3, 1]
  }
];

// ============================================================
// AGENCY INSIGHTS DATA
// Each entry: id, agency, abbr, avgDays, dataPoints, withinDeadline,
//   successRate (0–100: % of completed requests with at least partial release),
//   law (statute name string),
//   jurisdiction ('federal' | 'state-local'),
//   state (2-letter code, only for state-local),
//   distribution (array of 7 pct values for response-time buckets)
// ============================================================
const AGENCY_INSIGHTS = [
  // ── Federal agencies ─────────────────────────────────────────────────────
  {
    id: 'epa',
    agency: 'Environmental Protection Agency',
    abbr: 'EPA',
    avgDays: 38,
    dataPoints: 1243,
    withinDeadline: 14,
    successRate: 72,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [2, 5, 7, 12, 22, 24, 14, 8, 5, 1]
  },
  {
    id: 'doj',
    agency: 'Department of Justice',
    abbr: 'DOJ',
    avgDays: 52,
    dataPoints: 892,
    withinDeadline: 8,
    successRate: 65,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [1, 3, 4, 7, 14, 24, 20, 15, 9, 3]
  },
  {
    id: 'fbi',
    agency: 'Federal Bureau of Investigation',
    abbr: 'FBI',
    avgDays: 89,
    dataPoints: 2107,
    withinDeadline: 3,
    successRate: 41,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [1, 1, 1, 2, 5, 8, 12, 18, 28, 24]
  },
  {
    id: 'ice',
    agency: 'Dept. of Homeland Security — ICE',
    abbr: 'DHS/ICE',
    avgDays: 74,
    dataPoints: 892,
    withinDeadline: 5,
    successRate: 47,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [1, 2, 2, 3, 8, 12, 18, 22, 20, 12]
  },
  {
    id: 'dhs',
    agency: 'Department of Homeland Security',
    abbr: 'DHS',
    avgDays: 61,
    dataPoints: 734,
    withinDeadline: 7,
    successRate: 58,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [1, 2, 4, 5, 10, 18, 24, 20, 12, 4]
  },
  {
    id: 'fda',
    agency: 'Food and Drug Administration',
    abbr: 'FDA',
    avgDays: 35,
    dataPoints: 561,
    withinDeadline: 17,
    successRate: 71,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [2, 7, 8, 14, 24, 22, 13, 6, 3, 1]
  },
  {
    id: 'ftc',
    agency: 'Federal Trade Commission',
    abbr: 'FTC',
    avgDays: 28,
    dataPoints: 318,
    withinDeadline: 29,
    successRate: 78,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [4, 14, 11, 18, 24, 16, 8, 3, 1, 1]
  },
  {
    id: 'hhs',
    agency: 'Dept. of Health and Human Services',
    abbr: 'HHS',
    avgDays: 30,
    dataPoints: 489,
    withinDeadline: 22,
    successRate: 74,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [3, 10, 9, 16, 24, 20, 11, 5, 2, 0]
  },
  {
    id: 'dod',
    agency: 'Department of Defense',
    abbr: 'DoD',
    avgDays: 95,
    dataPoints: 1056,
    withinDeadline: 2,
    successRate: 45,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [0, 1, 1, 2, 5, 8, 11, 17, 28, 27]
  },
  {
    id: 'sec',
    agency: 'Securities and Exchange Commission',
    abbr: 'SEC',
    avgDays: 22,
    dataPoints: 277,
    withinDeadline: 41,
    successRate: 81,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [6, 22, 13, 18, 19, 12, 5, 3, 1, 1]
  },
  {
    id: 'dea',
    agency: 'Drug Enforcement Administration',
    abbr: 'DEA',
    avgDays: 58,
    dataPoints: 341,
    withinDeadline: 9,
    successRate: 54,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [1, 3, 5, 7, 14, 26, 22, 14, 6, 2]
  },
  {
    id: 'hud',
    agency: 'Dept. of Housing and Urban Development',
    abbr: 'HUD',
    avgDays: 31,
    dataPoints: 289,
    withinDeadline: 27,
    successRate: 73,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [4, 13, 10, 16, 22, 19, 9, 5, 2, 0]
  },
  {
    id: 'uscis',
    agency: 'U.S. Citizenship and Immigration Services',
    abbr: 'USCIS',
    avgDays: 67,
    dataPoints: 1104,
    withinDeadline: 6,
    successRate: 61,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [1, 2, 3, 4, 9, 16, 22, 22, 16, 5]
  },
  {
    id: 'cbp',
    agency: 'U.S. Customs and Border Protection',
    abbr: 'CBP',
    avgDays: 55,
    dataPoints: 678,
    withinDeadline: 10,
    successRate: 56,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [1, 3, 6, 7, 14, 25, 22, 14, 6, 2]
  },
  {
    id: 'fcc',
    agency: 'Federal Communications Commission',
    abbr: 'FCC',
    avgDays: 43,
    dataPoints: 224,
    withinDeadline: 15,
    successRate: 62,
    law: 'Federal FOIA',
    jurisdiction: 'federal',
    distribution: [2, 6, 7, 11, 22, 26, 14, 7, 4, 1]
  },
  // ── NY / Local agencies ───────────────────────────────────────────────────
  {
    id: 'nypd',
    agency: 'New York City Police Department',
    abbr: 'NYPD',
    avgDays: 47,
    dataPoints: 2890,
    withinDeadline: 11,
    successRate: 52,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [1, 4, 6, 9, 18, 26, 20, 10, 5, 1]
  },
  {
    id: 'nyc-doc',
    agency: 'NYC Dept. of Correction',
    abbr: 'NYC DOC',
    avgDays: 63,
    dataPoints: 445,
    withinDeadline: 6,
    successRate: 44,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [1, 2, 3, 5, 10, 18, 24, 22, 12, 3]
  },
  {
    id: 'nyc-doe',
    agency: 'NYC Dept. of Education',
    abbr: 'NYC DOE',
    avgDays: 44,
    dataPoints: 1102,
    withinDeadline: 15,
    successRate: 63,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [2, 6, 7, 11, 20, 25, 17, 8, 3, 1]
  },
  {
    id: 'nyc-hpd',
    agency: 'NYC Housing Preservation and Development',
    abbr: 'NYC HPD',
    avgDays: 31,
    dataPoints: 623,
    withinDeadline: 24,
    successRate: 79,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [3, 12, 9, 14, 24, 20, 11, 5, 2, 0]
  },
  {
    id: 'nyc-dss',
    agency: 'NYC Dept. of Social Services',
    abbr: 'NYC DSS',
    avgDays: 56,
    dataPoints: 318,
    withinDeadline: 8,
    successRate: 55,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [1, 3, 4, 6, 14, 24, 24, 16, 7, 1]
  },
  {
    id: 'mta',
    agency: 'Metropolitan Transportation Authority',
    abbr: 'MTA',
    avgDays: 38,
    dataPoints: 892,
    withinDeadline: 19,
    successRate: 69,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [2, 9, 8, 14, 22, 24, 13, 6, 2, 0]
  },
  {
    id: 'doccs',
    agency: 'NYS Dept. of Corrections and Community Supervision',
    abbr: 'NYS DOCCS',
    avgDays: 51,
    dataPoints: 534,
    withinDeadline: 12,
    successRate: 61,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [1, 4, 7, 9, 16, 24, 20, 12, 6, 1]
  },
  {
    id: 'nyc-mayor',
    agency: "NYC Mayor's Office",
    abbr: 'Mayor\'s Office',
    avgDays: 71,
    dataPoints: 203,
    withinDeadline: 4,
    successRate: 38,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [0, 2, 2, 3, 8, 14, 20, 24, 20, 7]
  },
  {
    id: 'nyc-dot',
    agency: 'NYC Department of Transportation',
    abbr: 'NYC DOT',
    avgDays: 35,
    dataPoints: 478,
    withinDeadline: 22,
    successRate: 74,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [3, 11, 8, 12, 24, 22, 12, 5, 2, 1]
  },
  {
    id: 'fdny',
    agency: 'New York City Fire Department',
    abbr: 'FDNY',
    avgDays: 28,
    dataPoints: 612,
    withinDeadline: 31,
    successRate: 80,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [4, 16, 11, 14, 22, 18, 9, 4, 1, 1]
  },
  {
    id: 'nyc-dob',
    agency: 'NYC Department of Buildings',
    abbr: 'NYC DOB',
    avgDays: 41,
    dataPoints: 389,
    withinDeadline: 17,
    successRate: 69,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [2, 6, 9, 11, 20, 24, 16, 8, 3, 1]
  },
  {
    id: 'nyc-cchr',
    agency: 'NYC Commission on Human Rights',
    abbr: 'NYC CCHR',
    avgDays: 33,
    dataPoints: 156,
    withinDeadline: 25,
    successRate: 72,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [3, 13, 9, 12, 22, 22, 11, 5, 2, 1]
  },
  {
    id: 'nys-dec',
    agency: 'NYS Dept. of Environmental Conservation',
    abbr: 'NYS DEC',
    avgDays: 29,
    dataPoints: 447,
    withinDeadline: 34,
    successRate: 77,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [5, 18, 11, 12, 22, 18, 8, 4, 2, 0]
  },
  {
    id: 'nys-doh',
    agency: 'NYS Department of Health',
    abbr: 'NYS DOH',
    avgDays: 26,
    dataPoints: 523,
    withinDeadline: 38,
    successRate: 79,
    law: 'NY FOIL',
    jurisdiction: 'state-local',
    state: 'NY',
    distribution: [6, 21, 11, 13, 20, 16, 8, 3, 2, 0]
  },
  // ── Other state / local agencies ─────────────────────────────────────────
  {
    id: 'ca-doj',
    agency: 'California Department of Justice',
    abbr: 'CA DOJ',
    avgDays: 18,
    dataPoints: 412,
    withinDeadline: 58,
    successRate: 83,
    law: 'CA CPRA',
    jurisdiction: 'state-local',
    state: 'CA',
    distribution: [20, 26, 12, 18, 12, 7, 3, 1, 1, 0]
  },
  {
    id: 'chicago-pd',
    agency: 'Chicago Police Department',
    abbr: 'Chicago PD',
    avgDays: 53,
    dataPoints: 287,
    withinDeadline: 10,
    successRate: 48,
    law: 'IL FOIA',
    jurisdiction: 'state-local',
    state: 'IL',
    distribution: [1, 3, 6, 7, 16, 26, 22, 13, 5, 1]
  },
  {
    id: 'tx-dps',
    agency: 'Texas Department of Public Safety',
    abbr: 'TX DPS',
    avgDays: 12,
    dataPoints: 189,
    withinDeadline: 71,
    successRate: 87,
    law: 'TX PIA',
    jurisdiction: 'state-local',
    state: 'TX',
    distribution: [38, 22, 11, 15, 8, 4, 1, 1, 0, 0]
  }
];

// Returns number of days until deadline (negative = overdue)
// Uses fixed TODAY = 2026-05-06
function getDaysUntilDeadline(dateStr) {
  if (!dateStr) return null;
  const deadline = new Date(dateStr);
  const diffMs = deadline - TODAY;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

// Returns formatted date string e.g. "May 10, 2026"
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// Returns HTML string for a status badge
function getStatusBadgeHTML(status) {
  const config = STATUS_CONFIG[status];
  if (!config) return '';
  return `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.badgeClass}">
    <span class="w-1.5 h-1.5 rounded-full ${config.dotClass}"></span>
    ${config.label}
  </span>`;
}

// Returns colored HTML for days left column
function getDaysLeftHTML(deadlineStr, status) {
  if (!deadlineStr || status === 'closed' || status === 'responded') {
    return '<span class="text-slate-400 text-sm">—</span>';
  }
  const days = getDaysUntilDeadline(deadlineStr);
  if (days === null) return '<span class="text-slate-400 text-sm">—</span>';

  if (days < 0) {
    return `<span class="text-red-600 font-medium text-sm">${Math.abs(days)}d overdue</span>`;
  } else if (days <= 3) {
    return `<span class="text-red-600 font-medium text-sm">${days}d left</span>`;
  } else if (days <= 7) {
    return `<span class="text-amber-600 font-medium text-sm">${days}d left</span>`;
  } else {
    return `<span class="text-slate-600 text-sm">${days}d left</span>`;
  }
}

// Get a single request by id
function getRequestById(id) {
  return MOCK_REQUESTS.find(r => r.id === parseInt(id)) || MOCK_REQUESTS[0];
}
