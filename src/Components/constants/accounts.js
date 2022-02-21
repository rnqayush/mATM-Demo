const ACCOUNT_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DORMANT: 'DORMANT',
  CLOSED: 'CLOSED',
  PRECREATED: 'PRECREATED',
};

export const ACCOUNT_TYPE = {
  CURRENT: 'CURRENT',
  SAVINGS: 'SAVINGS',
  HOMESAVER: 'HOMESAVER',
  CASHCREDIT: 'CASHCREDIT',
  OTHER: 'OTHER',
};

export const ACCOUNT_VARIANT = {
  RERA_COLLECTION: 'RERA_COLLECTION',
  RERA_SPONSOR: 'RERA_SPONSOR',
  RERA_UTILIZATION: 'RERA_UTILIZATION',
  OVERDRAFT: 'OVERDRAFT',
  CASH_CREDIT: 'CASH_CREDIT',
  DROPLINE_OVERDRAFT: 'DROPLINE_OVERDRAFT',
  ESCROW: 'ESCROW',
  EEFC: 'EEFC',
  WORKING_CAPITAL_DEMAND_LOAN: 'WORKING_CAPITAL_DEMAND_LOAN',
  BANK_GUARANTEE: 'BANK_GUARANTEE',
  LETTER_OF_CREDIT: 'LETTER_OF_CREDIT',
};

export const BUSINESS_FILTERS = {
  DEPOSIT_ELIGIBLE: 'deposit-eligible',
};

export const ACCOUNTS_MENU = {
  AVAIL_SALARY_BOOSTER: 'availSalaryBooster',
  CREATE_ENACH_MANDATE: 'Create E-NACH mandate',
  VIEW_TRANSACTION: 'viewTransaction',
  DOWNLOAD_STATEMENT: 'downloadStatement',
  MANAGE_CHEQUE: 'manageCheque',
  MANAGE_USERS: 'manageUsers',
  NOMINEE: 'nominee',
  COMMON: 'common',
  OD_AGAINST_FD: 'createODAgainstFD',
  MANAGE_OD_AGAINST_FD: 'manageODAgainstFD',
  CONVERT_BALANCE: 'convertBalance',
  REQUEST_CHEQUEBOOK: 'requestChequebook',
};

export const ELIGIBILITY_PROPERTY = {
  ECHEQUE: 'IsEchequeEligible',
  OD_AGAINST_FD: 'IsODEligible',
};

export const CURRENCY_CODES = {
  INR: 'INR',
};

export const ACCOUNT_VARIANTS = {
  TERM_LOAN: 'TERM_LOAN',
  WORKING_CAPITAL_DEMAND_LOAN: 'WORKING_CAPITAL_DEMAND_LOAN',
  BANK_GUARANTEE: 'BANK_GUARANTEE',
  LETTER_OF_CREDIT: 'LETTER_OF_CREDIT',
};

export const STATUS_FILTER = `${ACCOUNT_STATUS.ACTIVE},${ACCOUNT_STATUS.INACTIVE},${ACCOUNT_STATUS.DORMANT},${ACCOUNT_STATUS.PRECREATED}`;

export const ACCOUNT_RESIDENCY_TYPE = {
  NRO: 'NRO',
  NRE: 'NRE',
};

export default ACCOUNT_STATUS;