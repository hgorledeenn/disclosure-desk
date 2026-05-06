// Disclosure Desk Mock Data & Utility Functions
// Today's fixed date for demo: 2026-05-06

const TODAY = new Date('2026-05-06');

const MOCK_USER = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  initials: 'JD',
  organization: 'The City NYC',
  role: 'Investigative Reporter'
};

const STATUS_CONFIG = {
  submitted: {
    label: 'Submitted',
    badgeClass: 'bg-slate-100 text-slate-600',
    dotClass: 'bg-slate-400'
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
  {
    id: 1,
    agency: 'NYPD',
    agencyAbbr: 'NYPD',
    agencyFull: 'New York Police Department',
    jurisdiction: 'NY FOIL',
    subject: 'ShotSpotter/SoundThinking contracts, deployment maps, and accuracy data, 2015–present',
    description: 'All contracts, amendments, and payment records between NYPD and ShotSpotter Inc. (now SoundThinking, Inc.) from 2015 to present. Includes: total contract value and annual expenditures; deployment maps by precinct; performance and accuracy reports; internal communications about contract renewal; and any third-party audits of the technology\'s effectiveness in reducing gun violence.',
    submitted: '2026-03-20',
    acknowledged: '2026-03-25',
    deadline: '2026-04-22',
    trackingNumber: 'NYPD-FOIL-2026-04421',
    status: 'overdue',
    contactName: 'NYPD FOIL Unit',
    contactEmail: 'foil.unit@nypd.org',
    notes: [
      { date: '2026-03-25', text: 'Acknowledgment received. Case number NYPD-FOIL-2026-04421 assigned.' },
      { date: '2026-04-10', text: 'Called FOIL unit — request still in queue. Officer said to expect another 2–3 weeks.' },
      { date: '2026-04-23', text: 'Deadline passed without response. Sent written follow-up.' },
      { date: '2026-05-01', text: 'No response. Sent second follow-up email and called again — left voicemail.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 2,
    agency: 'NYPD',
    agencyAbbr: 'NYPD',
    agencyFull: 'New York Police Department',
    jurisdiction: 'NY FOIL',
    subject: 'Facial recognition technology usage logs, vendor contracts, and accuracy assessments, 2017–present',
    description: 'All policies, procedures, and vendor agreements related to NYPD\'s Facial Recognition Technology (FRT) Unit. Includes: number of FRT searches conducted annually from 2017 to present disaggregated by outcome; vendor names and software used; internal accuracy audits; any cases where FRT contributed to an arrest; and all communications with vendors regarding accuracy or bias concerns.',
    submitted: '2026-01-15',
    acknowledged: '2026-01-20',
    deadline: '2026-02-19',
    trackingNumber: 'NYPD-FOIL-2026-00892',
    status: 'responded',
    contactName: 'NYPD FOIL Unit',
    contactEmail: 'foil.unit@nypd.org',
    notes: [
      { date: '2026-01-20', text: 'Acknowledgment received.' },
      { date: '2026-02-14', text: 'Received partial response — 312 pages released. Approximately 180 pages withheld under the law enforcement exemption (Public Officers Law §87(2)(e)). Includes some vendor contract language but with pricing redacted.' },
      { date: '2026-02-28', text: 'Reviewed released documents. Significant gaps — no accuracy data or audit reports provided. Considering appeal for withheld records.' },
      { date: '2026-03-10', text: 'Filed appeal with NYPD FOIL Appeals Officer citing insufficient justification for withheld accuracy records.' }
    ],
    documents: ['nypd-fr-partial-response-feb14.pdf', 'nypd-fr-vaughn-index.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 3,
    agency: 'NYPD',
    agencyAbbr: 'NYPD',
    agencyFull: 'New York Police Department',
    jurisdiction: 'NY FOIL',
    subject: 'Criminal Group Database enrollment criteria, demographic data, and removal procedures',
    description: 'All records related to NYPD\'s Criminal Group Database (CGD), including: current enrollment criteria and designation procedures; total individuals listed disaggregated by race, ethnicity, age, and borough; number of additions and removals per year from 2018 to present; any audits or accuracy reviews of CGD records; and records of legal challenges or court orders related to CGD data.',
    submitted: '2025-09-10',
    acknowledged: '2025-09-16',
    deadline: '2025-10-15',
    trackingNumber: 'NYPD-FOIL-2025-19034',
    status: 'appealed',
    contactName: 'NYPD FOIL Unit',
    contactEmail: 'foil.unit@nypd.org',
    notes: [
      { date: '2025-09-16', text: 'Acknowledgment received.' },
      { date: '2025-10-15', text: 'Response received — request denied in full. Agency cited Public Officers Law §87(2)(e) (law enforcement exemption) and §87(2)(b) (unwarranted invasion of personal privacy).' },
      { date: '2025-10-30', text: 'Filed administrative appeal. Appeal letter argues denial was overbroad and agency failed to segregate non-exempt demographic aggregate data.' },
      { date: '2025-11-14', text: 'Appeal acknowledged by NYPD Records Access Appeals Officer. 10-business-day response window begins.' },
      { date: '2025-12-05', text: 'Appeal denied. Agency upheld original determination. Next step: Article 78 proceeding in State Supreme Court.' }
    ],
    documents: ['denial-letter-oct15.pdf', 'appeal-letter-oct30.pdf', 'appeal-denial-dec5.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 4,
    agency: 'NYC DOC',
    agencyAbbr: 'NYC DOC',
    agencyFull: 'NYC Department of Correction',
    jurisdiction: 'NY FOIL',
    subject: 'Punitive segregation and Enhanced Supervision Housing placement data, Rikers Island, 2020–2024',
    description: 'All records related to the use of punitive segregation, Enhanced Supervision Housing (ESH), and any isolation practices at NYC DOC facilities including Rikers Island from January 2020 to present. Includes: monthly placement counts by facility and average length of stay; incidents of self-harm, attempts, or deaths among individuals in isolation; inspection reports of isolation units; and compliance reports filed pursuant to Local Law 42 of 2019.',
    submitted: '2025-11-01',
    acknowledged: '2025-11-08',
    deadline: '2025-12-08',
    trackingNumber: 'DOC-FOIL-2025-4471',
    status: 'overdue',
    contactName: 'NYC DOC FOIL Unit',
    contactEmail: 'foilrequests@doc.nyc.gov',
    notes: [
      { date: '2025-11-08', text: 'Acknowledgment received. Request assigned to Records Access Officer.' },
      { date: '2025-12-09', text: 'Deadline passed without response.' },
      { date: '2025-12-15', text: 'Sent written follow-up. No response.' },
      { date: '2026-01-10', text: 'Called Records Access Officer. Request still \'under review.\' Was told to expect response \'in the next few weeks.\'' },
      { date: '2026-02-20', text: 'Still no response. Sent third follow-up. This request is now 74 days overdue.' },
      { date: '2026-04-01', text: 'Sent formal demand letter citing FOIL obligation and intent to seek court order if no response by April 15.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 5,
    agency: 'NYC HPD',
    agencyAbbr: 'NYC HPD',
    agencyFull: 'NYC Dept. of Housing Preservation and Development',
    jurisdiction: 'NY FOIL',
    subject: 'Lead paint violations in city-subsidized buildings, 2018–2023',
    description: 'All Housing Maintenance Code violations issued for lead-based paint hazards (Class B and Class C violations under §27-2056 et seq.) in buildings receiving city subsidy, HPD loans, or tax benefits administered by HPD between January 2018 and December 2023. Includes property addresses, violation issuance dates, required compliance dates, and current open/closed status.',
    submitted: '2025-08-15',
    acknowledged: '2025-08-20',
    deadline: '2025-09-17',
    trackingNumber: 'HPD-FOIL-2025-8892',
    status: 'closed',
    contactName: 'HPD Records Access Officer',
    contactEmail: 'foil@hpd.nyc.gov',
    notes: [
      { date: '2025-08-20', text: 'Acknowledgment received.' },
      { date: '2025-09-12', text: 'Response received — data provided as spreadsheet export. 4,217 violation records covering the full request period.' },
      { date: '2025-09-18', text: 'Reviewed records. Data is complete and usable. Closing request.' }
    ],
    documents: ['hpd-lead-violations-data.xlsx', 'hpd-response-letter-sept12.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 6,
    agency: 'NYC DSS',
    agencyAbbr: 'NYC DSS',
    agencyFull: 'NYC Dept. of Social Services',
    jurisdiction: 'NY FOIL',
    subject: 'Inspection reports and violations for city-contracted homeless shelter facilities, 2021–2024',
    description: 'All inspection reports, violation notices, corrective action plans, and audit findings for homeless shelter facilities operating under DSS/DHS contract from January 2021 through December 2024. Includes: facility names and addresses; all deficiencies cited; dates of follow-up inspections; facilities placed on corrective action plans; any contracts terminated or penalized for noncompliance; and summary reports prepared by the Office of Shelter Inspection.',
    submitted: '2026-02-20',
    acknowledged: '2026-02-26',
    deadline: '2026-03-26',
    trackingNumber: 'DSS-FOIL-2026-1143',
    status: 'overdue',
    contactName: 'DSS Records Access Officer',
    contactEmail: 'foil@dss.nyc.gov',
    notes: [
      { date: '2026-02-26', text: 'Acknowledgment received. Case number DSS-FOIL-2026-1143 assigned.' },
      { date: '2026-03-27', text: 'Deadline passed without response. Sent follow-up.' },
      { date: '2026-04-10', text: 'Received extension notice — agency claims \'unusual circumstances\' and needs additional 30 days.' },
      { date: '2026-04-15', text: 'Contested extension by email — unusual circumstances provision requires specific justification under FOIL.' }
    ],
    documents: ['dss-extension-notice.pdf'],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 7,
    agency: 'MTA',
    agencyAbbr: 'MTA',
    agencyFull: 'Metropolitan Transportation Authority',
    jurisdiction: 'NY FOIL',
    subject: 'Fare evasion enforcement data disaggregated by race, age, and borough, 2019–2023',
    description: 'All records related to fare evasion enforcement on NYC Transit subway and bus systems from 2019 through 2023, disaggregated by race/ethnicity, age, borough, and station or route. Includes: type of enforcement action (summons, arrest, warning); enforcement unit; any internal analyses of racial disparities in enforcement; and aggregate data from any fare evasion task force operations.',
    submitted: '2026-04-10',
    acknowledged: '2026-04-15',
    deadline: '2026-05-10',
    trackingNumber: 'MTA-FOIL-2026-0382',
    status: 'acknowledged',
    contactName: 'MTA Law Department — FOIL',
    contactEmail: 'foil@mtahq.org',
    notes: [
      { date: '2026-04-15', text: 'Acknowledgment received. Assigned to FOIL coordinator at MTA Law Department.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
  },
  {
    id: 8,
    agency: 'NYC DOE',
    agencyAbbr: 'NYC DOE',
    agencyFull: 'New York City Dept. of Education',
    jurisdiction: 'NY FOIL',
    subject: 'School Safety Agent use-of-force incidents and NYPD responses on school campuses, 2020–2024',
    description: 'All records related to use-of-force incidents involving NYPD School Safety Agents (SSAs) and uniformed NYPD officers on NYC DOE school campuses from September 2020 through June 2024. Includes: incident reports (redacted per applicable exemptions), student demographics, incident outcomes (arrest, suspension, injury), school name and borough, and records of any disciplinary investigations of officers involved.',
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
    id: 9,
    agency: 'EPA',
    agencyAbbr: 'EPA',
    agencyFull: 'Environmental Protection Agency',
    jurisdiction: 'Federal FOIA',
    subject: 'Air quality monitoring data and enforcement records for South Bronx environmental justice communities, 2018–present',
    description: 'All air quality monitoring data (PM2.5, PM10, NO2, ozone), environmental impact assessments, and enforcement records for stationary emission sources in South Bronx ZIP codes 10451, 10454, 10455, and 10456 from January 2018 to present. Also requesting: any cumulative environmental burden assessments for these census tracts; notices of violation issued to facilities in these ZIP codes; and any internal EPA communications about the designation of these areas as environmental justice communities.',
    submitted: '2026-03-10',
    acknowledged: '2026-03-14',
    deadline: '2026-04-11',
    trackingNumber: 'EPA-R2-2026-003341',
    status: 'processing',
    contactName: 'EPA Region 2 FOIA Office',
    contactEmail: 'r2foia@epa.gov',
    notes: [
      { date: '2026-03-14', text: 'Acknowledgment received from EPA Region 2 FOIA Office. Tracking number EPA-R2-2026-003341.' },
      { date: '2026-04-12', text: 'Deadline passed. Received notice of 10-day extension citing \'unusual circumstances\' (need to coordinate with multiple program offices).' },
      { date: '2026-04-24', text: 'Extension expired. No response. Sent follow-up. Request still listed as \'In Progress\' on EPA FOIA Online tracker.' }
    ],
    documents: ['epa-extension-notice-apr12.pdf'],
    reminderDays: [7, 3, 1]
  },
  {
    id: 10,
    agency: 'FBI',
    agencyAbbr: 'FBI',
    agencyFull: 'Federal Bureau of Investigation',
    jurisdiction: 'Federal FOIA',
    subject: 'NYC-area surveillance records targeting Muslim community organizations, 2008–2020',
    description: 'All records in the FBI\'s New York Field Office related to surveillance, monitoring, or intelligence collection activities targeting Muslim community organizations, mosques, student associations, or individuals in New York City between 2008 and 2020. This request specifically covers programs including but not limited to any joint operations with NYPD Intelligence Bureau and the NYPD Demographics Unit (also known as the Zone Assessment Unit). Includes: investigative files, surveillance reports, informant handling records, and any program closure documents.',
    submitted: '2025-03-01',
    acknowledged: '2025-03-10',
    deadline: '2025-04-08',
    trackingNumber: 'FBI-2025-FOIPA-09341',
    status: 'overdue',
    contactName: 'FBI Record/Information Dissemination Section',
    contactEmail: 'rids@fbi.gov',
    notes: [
      { date: '2025-03-10', text: 'Acknowledgment received. Assigned to FBI RIDS queue. Estimated processing time: 6–18 months.' },
      { date: '2025-04-09', text: 'Statutory deadline passed. FBI routinely misses deadlines on sensitive surveillance requests.' },
      { date: '2025-07-15', text: 'Filed a status check via FBI eFOIPA portal. Still listed as \'pending.\'' },
      { date: '2025-11-01', text: 'Still no response. Request is now 7 months overdue. Consulting legal counsel about potential litigation.' },
      { date: '2026-03-20', text: 'Request is now over a year old. No substantive response received. Considering FOIA lawsuit.' }
    ],
    documents: [],
    reminderDays: [14, 7, 3, 1]
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
