export type FilingStatus = "married_joint" | "single" | "head" | "married_separate";

export type Bracket = {
  rate: number;
  upTo: number | null;
};

export type BracketRow = Bracket & {
  id: string;
};

export type JobIncome = {
  id: string;
  label: string;
  ytdWages: number;
  ytdWithholding: number;
  ytdPreTax: number;
  perPaycheckWages: number;
  perPaycheckWithholding: number;
  perPaycheckPreTax: number;
  paychecksRemaining: number;
};

export type OtherIncome = {
  interest: number;
  dividends: number;
  capitalGains: number;
  selfEmployment: number;
  rental: number;
  other: number;
};

export type Credits = {
  childTaxCredit: number;
  otherDependentCredit: number;
  dependentCareCredit: number;
  educationCredits: number;
  energyCredits: number;
  otherNonRefundableCredits: number;
  refundableCredits: number;
};

export type Deductions = {
  useStandardDeduction: boolean;
  itemizedDeductions: number;
  qbiDeduction: number;
  otherAdjustments: number;
};

export type Payments = {
  estimatedPayments: number;
  otherPayments: number;
};

export type Dependents = {
  qualifyingChildren: number;
  otherDependents: number;
};

export type FormState = {
  taxYear: "2026";
  filingStatus: FilingStatus;
  spouseAJobs: JobIncome[];
  spouseBJobs: JobIncome[];
  dependents: Dependents;
  otherIncome: OtherIncome;
  deductions: Deductions;
  credits: Credits;
  payments: Payments;
  useCustomBrackets: boolean;
  customStandardDeduction: number;
  customBrackets: BracketRow[];
};
