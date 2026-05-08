// ================================================================
// DISCLOSURE DESK — SITE COPY
// ================================================================
// This file contains every piece of text shown on the website.
// To change any text: edit the value between quotes on the right
// side of the colon, then save the file and refresh your browser.
//
// RULES:
//   • Only change text BETWEEN the quote marks " "
//   • Do NOT change the label to the LEFT of the colon
//   • Keep all commas, brackets, and quote marks in place
//   • After saving, refresh the browser to see changes
//   • If a value is inside [ ] brackets, it is a list —
//     keep each item on its own line inside quotes
// ================================================================

const COPY = {

  // ── Brand ────────────────────────────────────────────────────
  // The product name shown in the sidebar, header, and footer.
  brand: {
    name: "Disclosure Desk",
  },


  // ════════════════════════════════════════════════════════════
  // LANDING PAGE (index.html)
  // ════════════════════════════════════════════════════════════

  // ── Left panel: hero section ─────────────────────────────────
  hero: {
    // The two lines of the big hero headline (each is a separate line)
    headlineLine1: "Track your requests.",
    headlineLine2: "Never miss a deadline.",
    subheadline: "The professional tool, built by journalists, for journalists, managing Freedom of Information Act requests.",

    // Three feature bullet points on the left panel
    feature1Title: "Automated deadline reminders",
    feature1Desc:  "Get email alerts 2 weeks, 7 days and 1 day before every deadline so you never miss a follow-up.",

    feature2Title: "Centralized request dashboard",
    feature2Desc:  "Track every FOIA request across all agencies in one place — with status, documents, and notes.",

    feature3Title: "Document management & appeal tracking",
    feature3Desc:  "Attach agency responses, track appeals, and keep a full audit trail for every request.",

    footerTagline:    "Built for journalists.",
    viewPricingLabel: "View pricing",
  },

  // ── Right panel: login form ──────────────────────────────────
  login: {
    headline:           "Welcome back",
    subheadline:        "Sign in to your Disclosure Desk account",
    demoNotice:         "Demo: Use any email and password to log in.",
    emailLabel:         "Email address",
    emailPlaceholder:   "you@example.com",
    passwordLabel:      "Password",
    forgotPassword:     "Forgot password?",
    rememberMe:         "Remember me for 30 days",
    signInButton:       "Sign in to Disclosure Desk",
    noAccountText:      "Don't have an account?",
    signUpLink:         "Create one free",
    footerNote:         "For journalists, by journalists — built with transparency in mind.",
    mobilePricingLink:  "View pricing plans ↓",
  },


  // ── Pricing section ──────────────────────────────────────────
  pricing: {
    sectionLabel: "Pricing",
    headline:     "Simple, transparent pricing",
    subheadline:  "Start free. Upgrade when you need more power and automation.",

    billingMonthly: "Monthly",
    billingAnnual:  "Annual",
    annualSavings:  "Save 30%",

    // ── Free tier ─────────────────────────────────────────────
    freeName:        "Basic",
    freePrice:       "$0",
    freePriceUnit:   "/month",
    freeDescription: "For individuals getting started with public records.",
    freeCtaLabel:    "Get started free",
    freeIncludedLabel: "What's included",

    // Items with a green checkmark (included in Free)
    freeIncluded: [
      "Up to <strong>10 active</strong> FOIA requests",
      "Request status tracking",
      "Notes & document uploads",
      "Activity timeline",
    ],

    // Items with an X (NOT included in Free)
    freeNotIncluded: [
      "Email deadline reminders",
      "Data insights & analytics",
      "Letter generation tool",
      "Unlimited requests",
    ],

    // ── Pro tier ──────────────────────────────────────────────
    proName:          "Pro",
    proPopularBadge:  "Most Popular",
    proPriceMonthly:  "$14",
    proPriceAnnual:   "$10",
    proPriceUnit:     "/month",
    proBillingMonthly: "Billed monthly. Cancel anytime.",
    proBillingAnnual:  "Billed annually ($120/year). Save $48.",
    proCtaLabel:       "Start 14-day free trial",
    proIncludedLabel:  "Everything in Free, plus",

    // Items included in Pro (all get a checkmark)
    proFeatures: [
      "<strong>Unlimited</strong> active FOIA requests",
      "Automated email deadline reminders",
      "Data insights & analytics dashboard",
      "Weekly summary digest emails",
      "CSV & spreadsheet export",
      "Priority email support",
      "Configurable reminder schedules",
    ],

    // ── Institutional tier ────────────────────────────────────
    institutionalName:         "Institutional",
    institutionalPrice:        "Custom",
    institutionalDescription:  "For newsrooms, research teams, and organizations.",
    institutionalCtaLabel:     "Contact us to inquire",
    institutionalCtaEmail:     "hello@disclosuredesk.com",
    institutionalIncludedLabel: "Everything in Pro, plus",

    // Items included in Institutional
    institutionalFeatures: [
      "Unlimited team members",
      "Shared team request workspace",
      "Admin dashboard & user management",
      "Custom onboarding & training",
      "Dedicated account manager",
      "Volume pricing & annual contracts",
      "SLA & uptime guarantees",
    ],

    // ── Student discount callout ──────────────────────────────
    studentTitle:    "Student & educator discount",
    studentDesc:     "Students and journalism faculty qualify for discounted Pro access. Verification required via your .edu email address.",
    studentCtaLabel: "Inquire about discounts",
    studentCtaEmail: "hello@disclosuredesk.com?subject=Student discount inquiry",

    // ── Three FAQ boxes below the pricing cards ───────────────
    faqItems: [
      {
        title: "No credit card required",
        desc:  "Start with the free plan immediately — no payment info needed to get started.",
      },
      {
        title: "Cancel anytime",
        desc:  "Upgrade or downgrade at any time. Your data is always yours to export.",
      },
      {
        title: "Free trial on Pro",
        desc:  "Pro plans include a 14-day free trial. No charge until the trial ends.",
      },
    ],
  },


  // ── Footer ───────────────────────────────────────────────────
  footer: {
    tagline:      "Built for journalists and public records researchers.",
    copyrightYear: "2026",
    privacyLabel:  "Privacy",
    termsLabel:    "Terms",
    contactLabel:  "Contact",
    contactEmail:  "hello@disclosuredesk.com",
  },


  // ════════════════════════════════════════════════════════════
  // SIDEBAR NAVIGATION (appears on every app page)
  // ════════════════════════════════════════════════════════════
  nav: {
    dashboard:      "Dashboard",
    myRequests:     "My Requests",
    logRequest:     "Log a Request",
    draftRequest:   "Draft a Request",
    agencyInsights: "Agency Insights",
    settings:       "Settings",
  },


  // ════════════════════════════════════════════════════════════
  // DASHBOARD PAGE (dashboard.html)
  // ════════════════════════════════════════════════════════════
  dashboard: {
    greeting:      "Good morning, Jane.",
    date:          "Wednesday, May 6, 2026",
    logRequestCta: "+ Log a Request →",

    // Four stat boxes at the top
    statInProgress:     "In Progress",
    statInProgressNote: "active requests",
    statUpcoming:       "Upcoming Deadlines",
    statUpcomingNote:   "due within 7 days",
    statOverdue:        "Overdue",
    statOverdueNote:    "need follow-up",
    statCompleted:      "Completed",
    statCompletedNote:  "requests resolved",

    // Request list section
    allRequestsTitle: "All Requests",
    viewAllLink:      "View all in My Requests →",

    // Filter pill labels
    filterAll:     "All",
    filterOverdue: "Overdue",
    filterDueSoon: "Due Soon",
    filterActive:  "Active",
    filterDone:    "Done",

    // Right sidebar
    recentUpdatesTitle: "Recent Updates",
  },


  // ════════════════════════════════════════════════════════════
  // MY REQUESTS PAGE (requests.html)
  // ════════════════════════════════════════════════════════════
  requests: {
    pageTitle:        "My Requests",
    logRequestButton: "Log a Request",
    searchPlaceholder: "Search by agency or subject…",

    filterAll:       "All",
    filterAttention: "Needs Attention",
    filterActive:    "Active",
    filterDone:      "Done",

    // Table column headers
    colAgency:       "Agency",
    colSubject:      "Subject",
    colJurisdiction: "Jurisdiction",
    colDeadline:     "Deadline",
    colStatus:       "Status",

    emptyState: "No requests match your filter.",
  },


  // ════════════════════════════════════════════════════════════
  // LOG A REQUEST PAGE (new-request.html)
  // ════════════════════════════════════════════════════════════
  logRequest: {
    pageTitle:    "Log a FOIA Request",
    pageSubtitle: "Track a request you've already sent. Writing a new one? Use the",
    pageSubtitleLink: "Draft a Request →",

    // Section 1: Agency
    section1Title:   "Which agency?",
    agencyLabel:     "Agency name",
    agencyRequired:  "*",
    agencyPlaceholder: "e.g. New York Police Department",
    agencyHint:      "Enter the full name, e.g. \"New York Police Department\". You can add more details later.",

    communityDataTitle: "Disclosure Desk community data",
    communityDataLink:  "View full breakdown →",
    avgResponseLabel:   "avg response",
    withinDeadlineLabel: "within deadline",
    receivedResponseLabel: "received response",

    jurisdictionLabel: "Jurisdiction",
    jurisdictionRequired: "*",
    jurisdictionHint:  "This determines the legal deadline and your appeal rights.",

    // Section 2: Records
    section2Title:   "What did you request?",
    subjectLabel:    "In one sentence, what did you ask for?",
    subjectRequired: "*",
    subjectPlaceholder: "e.g. Internal emails about PFAS contamination in local water supply",
    subjectHint:     "This is your reference label — keep it short.",

    descriptionLabel:      "Full description",
    descriptionOptional:   "(optional)",
    descriptionPlaceholder: "Paste in the text of your request if you'd like to keep a record of exactly what you asked for.",
    descriptionHint:       "Paste the text of your request if you want a record of exactly what you asked. Not required.",

    // Section 3: Tracking
    section3Title:   "Tracking info — optional",
    dateLabel:       "Date submitted",
    dateHint:        "Used to calculate the statutory response deadline.",
    trackingLabel:   "Tracking number",
    trackingPlaceholder: "e.g. EPA-HQ-2026-001234",
    trackingHint:    "Usually in the agency's acknowledgment email. Add it later if you don't have it yet.",
    deadlineLabel:   "Response deadline",
    deadlineHint:    "Federal FOIA and most state laws: 20 business days from receipt. Leave blank to set later.",

    // Section 4: Reminders
    section4Title:        "Email reminders",
    remindersToggleLabel: "Remind me before this deadline",
    reminder14days:       "2 weeks before",
    reminder7days:        "1 week before",
    reminder3days:        "3 days before",
    reminder1day:         "1 day before",

    cancelLink:  "Cancel",
    saveButton:  "Save Request",
  },


  // ════════════════════════════════════════════════════════════
  // SINGLE REQUEST PAGE (request.html)
  // ════════════════════════════════════════════════════════════
  requestDetail: {
    breadcrumbParent: "My Requests",

    communityDataTitle:   "Community Data",
    communityDataNoMatch: "No community data yet for this agency.",
    communityDataLink:    "View agency breakdown →",
    avgResponseLabel:     "avg response",
    withinDeadlineLabel:  "within deadline",
    successRateLabel:     "success rate",

    notesTitle:       "Notes & Timeline",
    notePlaceholder:  "Add a note — follow-up call, status update, new information…",
    noteDateHint:     "Will be dated today.",
    saveNoteButton:   "Save note",

    documentsTitle:   "Documents",
    noDocuments:      "No documents attached yet.",
    uploadTitle:      "Upload a document",
    uploadSubtitle:   "PDF, DOCX, or image",

    remindersTitle:   "Email Reminders",
    remindersFooter:  "Reminders go to jane@example.com",

    actionMarkResponded: "Mark as responded",
    actionFileAppeal:    "File appeal",
    actionCloseRequest:  "Close request",
  },


  // ════════════════════════════════════════════════════════════
  // SETTINGS PAGE (settings.html)
  // ════════════════════════════════════════════════════════════
  settings: {
    pageTitle:     "Settings",
    tabProfile:    "Profile",
    tabNotifications: "Notifications",
    tabAccount:    "Account",

    profileSectionTitle: "Profile",
    fullNameLabel:  "Full name",
    emailLabel:     "Email address",
    orgLabel:       "Organization",
    jobTitleLabel:  "Job title",
    saveButton:     "Save changes",

    notifSectionTitle: "When should we email you?",
    notifSubtitle:     "Reminders go to",
    notif14days:       "2 weeks before deadline",
    notif7days:        "1 week before deadline",
    notif3days:        "3 days before deadline",
    notif1day:         "1 day before deadline",
    weeklyDigestLabel: "Weekly digest email",
    weeklyDigestDesc:  "A summary of all active requests, sent every Monday.",

    passwordSectionTitle:      "Change password",
    currentPasswordLabel:      "Current password",
    currentPasswordPlaceholder: "Enter your current password",
    newPasswordLabel:          "New password",
    newPasswordPlaceholder:    "At least 8 characters",
    confirmPasswordLabel:      "Confirm new password",
    confirmPasswordPlaceholder: "Repeat new password",
    updatePasswordButton:      "Update password",

    exportSectionTitle: "Export your data",
    exportDesc:         "Download all your FOIA requests and notes as a CSV file.",
    exportButton:       "Export all requests (CSV)",

    dangerSectionTitle: "Danger zone",
    dangerDesc:         "These actions cannot be undone.",
    deleteAccountButton: "Delete my account",
  },


  // ════════════════════════════════════════════════════════════
  // AGENCY INSIGHTS PAGE (agency-insights.html)
  // ════════════════════════════════════════════════════════════
  agencyInsights: {
    pageTitle:    "Agency Insights",
    pageSubtitle: "Response time data from the Disclosure Desk community — anonymized and aggregated.",

    filterAll:        "All",
    filterFederal:    "Federal",
    filterStateLocal: "State & Local",

    avgResponseLabel:    "avg response",
    withinDeadlineLabel: "within deadline",
    successRateLabel:    "success rate",
    dataPointsLabel:     "requests",
    viewBreakdownLink:   "View breakdown →",

    modalResponseDistribution: "Response Time Distribution",
    modalStatutoryLimit:       "Statutory limit",
  },


  // ════════════════════════════════════════════════════════════
  // DRAFT A REQUEST PAGE (draft-request.html)
  // ════════════════════════════════════════════════════════════
  draftRequest: {
    pageTitle:    "Draft a FOIA Request",
    pageSubtitle: "Answer a few questions and we'll generate a formal records request letter you can copy, download, and send.",

    step1Title:    "Agency",
    step1Subtitle: "Who are you sending this to?",
    step2Title:    "Records",
    step2Subtitle: "What are you asking for?",
    step3Title:    "About You",
    step3Subtitle: "Your contact info for the letter.",
    step4Title:    "Your Letter",
    step4Subtitle: "Review and copy your letter.",

    backButton:      "Back",
    nextButton:      "Continue",
    copyButton:      "Copy letter",
    downloadButton:  "Download .txt",
    startOverButton: "Start over",

    agencyPreviewTitle: "Disclosure Desk community data",
    agencyPreviewLink:  "View full breakdown →",
  },

};
