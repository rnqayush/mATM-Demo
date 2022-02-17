export const CARDTYPE = {
  CLASSIC: { name: 'CLASSIC', amount: 10000 },
  SIGNATURE: { name: 'SIGNATURE', amount: 25000 },
};

export const CONSTANTS = {
  INPUT_TEXT_LENGTH: 40,
  MOBILE_NO_LENGTH: 10, // with +91 & space
  PAN_NO_LENGTH: 10,
  VERIFICATION_CODE_CONST: 6,
  ANNUAL_INCOME_LENGTH: 9,
  FUND_AMOUNT_LENGTH: 6,
  IFSC_NO_LENGTH: 11,
  BANK_ACC_NO_LENGTH: 18,
  ADDRESS_PARITION: 40,
  PINCODE_LENGTH: 6,
};

export const COMMON_CONST = {
  DEFAULT_COUNTRY: 'INDIA',
  INTERNET_UNAVAILABLE: 'Please check your Internet connectivity.',
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again',
  // FAQ_NO_DATA_FOR_SEARCH_RESULT: 'No search results found',
  MOBILE: 'mobile',
  SENTENCES: 'sentences',
  CHARACTERS: 'characters',
  HIGHLIGHTS:"THIS MONTH'S HIGHLIGHTS",
  BANKING_PREFERENCES: 'Banking Preferences',
  FAMILY_DETAILS: 'Family Details',
  DROP_JOURNY_MODAL_TITLE: 'Welcome back, ',
  DROP_JOURNY_MODAL_DESCRIPTION:
    'As you are our existing user, we have saved your previous inputs. Please continue your savings account journey where you last left off.',
};

export const PERSON_DETAILS = {
  HINT_PAN: 'Permanent Account Number(PAN)*',
  HINT_EMAIL: 'Email address*',
  HINT_FULL_NAME: 'Full name*',
  HINT_MOBILE_NO: 'Mobile number*',
  HINT_VERIFICATION_CODE: 'verification Code*',
  // HINT_ADDRESS_TYPE: 'Address type*',
  // HINT_BRANCH_LOC: 'Preferred branch location*',
  HINT_MARITAL_STS: 'Marital status*',
  HINT_MOTHER_NAME: 'Mother’s name*',
  HINT_RESI_PROPERTY_TYPE: 'Residential property type*',
  HINT_NOMIEE_NAME: 'Nominee name*',
  HINT_NOMIEE_OTHER_NAME: 'Other relation',
  HINT_RLEATIONSHIP_APPLICANT: 'Relationship with the applicant*',
  HINT_NOMINEE_BIRTH_DATE: 'Nominee’s date of birth*',
  HINT_PINCODE: 'Pincode*',
  HINT_PINCODE_OPTIONAL: 'Pincode',
  HINT_ZIPCODE: 'Zipcode',
  HINT_STATE: 'State*',
  HINT_STATE_OPTIONAL: 'State',
  HINT_CITY: 'City*',
  HINT_CITY_OPTIONAL: 'City',
  HINT_COUNTRY: 'Country*',
  HINT_COUNTRY_OPTIONAL: 'Country',
  HINT_ADDRESS_LINE1: 'Address line 1*',
  HINT_ADDRESS_LINE1_OPTIONAL: 'Address line 1',
  HINT_ADDRESS_LINE2: 'Address line 2',
  HINT_ADDRESS_LINE3: 'Address line 3',
  HINT_GUARDIAN_NAME: 'Guardian name*',
  HINT_SALUTATION: 'Salutation',
  HINT_MOTHERS_SALUTATION: 'Mother’s salutation',
  HINT_NAME_ON_DEBIT: 'Name on debit card*',

  HINT_OCCUPATION: 'Occupation*',
  HINT_COMPANY_NAME: 'Company name*',
  HINT_OCCUPATION_TYPE: 'Occupation type*',
  HINT_SOURCE_INCOME: 'Source of income*',
  HINT_EDUCATIONAL_QUALIFICATION: 'Educational qualification*',
  HINT_NATIONALITY: 'Nationality*',
  HINT_COUNTRY_TAX_RESI: 'Country of Tax Residency*',
  HINT_FOREIGN_TAX_TIN: 'Foreign tax identification number (TIN)',
  HINT_TIN_ISSUE_COUNTRY: 'TIN issuing country',
  HINT_COUNTRY_BIRTH: 'Birth country*',
  HINT_PLACE_BIRTH: 'Birth place*',
  HINT_BIRTH_COUNTRY: 'Birth country*',
  HINT_BIRTH_PLACE: 'Birth place*',
  HINT_BANK_NAME: 'Bank name',

  HINT_SELECT_PREFERRED_BRANCH: 'Please select your preferred branch location*',
  HINT_SELECT_NOMINEE_BIRTH: 'Select nominee date of birth*',
  HINT_ENTER_PINCODE: 'Enter your pincode*',
  HINT_GROSS_ANNUAL: 'Gross annual income*',

  HINT_ENTER_GROSS_ANNUAL: 'Enter your gross annual income in ₹*',
  HINT_DROPDOWN: 'salutation*',

  COMMUNICATION_ADDRESS_NOTE: 'Communication address is same as my Aadhaar.',
  NOMINEE_ADDRESS_NOTE: 'Nominee address is same as my communication address',
  GUARDIAN_ADDRESS_TITLE_HEADER: "Guardian's Addresss",
  GUARDIAN_ADDRESS_NOTE: "Guardian's address is same as my communication address",
  NOMINEE_BELOW_18_NOTE: 'Since your Nominee is below 18 years of age, please enter guardian details',
  COMMUNICATION_ALERT: 'Please ensure to update your complete address for successful delivery of your welcome kit',

  INDIAN_CITIZEN_CHECK: 'I am an Indian citizen and pay taxes only in India',
  INDIAN_CITIZEN_NOTE: 'I am a resident of India and pay taxes in countries in addition to India',

  DBT_CHECK: 'I do not wish to avail Direct Benefit Transfer (DBT) benefits in IDFC FIRST Bank Account',

  ERR_ENTER_EMAIL: 'Please enter Email ID',
  ERR_ENTER_VALID_EMAIL: 'Please enter valid Email ID',
  ERR_ENTER_MOBILE: 'Please enter Mobile No',
  ERR_ENTER_VALID_MOBILE: 'Please enter your valid 10-digit mobile number',
  ERR_ENTER_PAN: 'Please enter PAN number(PAN)*',
  ERR_ENTER_VALID_PAN: 'Please enter Valid/Complete PAN.',
  ERR_ADDRESS_TYPE_SELECT: 'Please select address type.',
  ERR_RESIDENTIAL_PROPERTY_SELECT: 'Please select residential property.',
  ERR_DEBIT_CARD_NAME_SELECT: 'Please select name on debt card.',
  ERR_PREFERED_BRANCH_SELECT: 'Please select preferred branch location.',
  ERR_MARITAL_STATS_SELECT: 'Please select marital status.',
  ERR_MONTHER_SALUTATION_SELECT: 'Please select monther salutation.',
  ERR_MONTHER_NAME: 'Please enter monther name.',
  ERR_MONTHER_NAME_VALID: 'Please enter valid monther name.',
  ERR_NOMINEE_NAME: 'Please enter nominee name.',
  ERR_NOMINEE_NAME_VALID: 'Please enter valid nominee name.',
  ERR_RELATION_APPLICANT_SELECT: 'Please select relation with applicant.',
  ERR_STATE_SELECT: 'Please select state.',
  ERR_CITY_SELECT: 'Please select city.',
  ERR_COUNTRY_SELECT: 'Please country.',
  ERR_PINCODE: 'Please enter pincode.',
  ERR_PINCODE_VALID: 'Please enter valid pincode.',
  ERR_ADRESS_LINE1: 'Please enter address.',

  ERR_OCCUPATION_SELECT: 'Please select occupation.',
  ERR_COMPANY_NAME: 'Please enter company name.',
  ERR_COMPANY_NAME_VALID: 'Please enter valid company name.',
  ERR_OCCUPATION_TYPE_SELECT: 'Please select occupation type.',
  ERR_INCOME_SOURCE_SELECT: 'Please select income source.',
  ERR_ANUAL_INCOME: 'Please enter annual income.',
  ERR_INVALID_ANUAL_INCOME: 'Please enter valid annual income.',
  ERR_INVALID_ANUAL_INCOME1: 'Enter correct value.',
  ERR_EDUCATIONAL_QUALIFICATION_SELECT: 'Please select educational qualification.',
  ERR_NATIONALITY_SELECT: 'Please select nationality.',
  ERR_COUNTRY_TAX_RESI_SELECT: 'Please select country of tax residence.',
  ERR_TIN_NUMBER: 'Please enter TIN number.',
  ERR_TIN_VALID_NUMBER: 'Please enter valid TIN number.',
  ERR_COUNTRY_TIN_SELECT: 'Please select TIN issuing country.',
  ERR_COUNTRY_OF_BIRTH_SELECT: 'Please select country of birth.',
  ERR_PLACE_OF_BIRTH: 'Please enter place of birth.',
  ERR_PLACE_OF_BIRTH_VALID: 'Please enter valid place of birth.',
  ERR_BANK_NAME_SELECT: 'Please select bank name.',
  ERR_GUARDIAN_NAME: 'Please enter guardian name.',
  ERR_GUARDIAN_NAME_VALID: 'Please enter valid guardian name.',
  RESIDENTIAL_ADDRESS_NOTE: 'Residential address is same as my Aadhaar',
  DELETE_NOMINEE_HEADER_TXT: 'Are you sure you want to delete the nominee?',
  DELETE_NOMINEE_HEADER_SUB_TXT: 'Please note that this action, if proceeded,\ncannot be undone.',
  YES_I_WANT_TO_DELETE_NOMINEE: 'Yes, I want to delete this nominee',
  INDIA: 'India',
  PERSONAL_DETAILS: 'PERSONAL_DETAILS',
  STEP1: 'P1',
  SELECT_COUNTRY: 'Please select country',
  SELECT_BELOW_OPTION: 'Please select one of the below options',
  ERR_ENTER_VALID_AMOUNT: 'Enter valid fund amount',
  ERR_IFSC_RETRY_LIMIT: '5 attempt limit exceeded.',
};

export const FORM_FIELD_CONST = {
  NO_AADHAR_FORM_FIELDS: {
    SALUTATION: 'salutationKey',
    MOBILE: 'mobileNumber',
    FULL_NAME: 'fullName',
    EMAIL: 'email',
    PAN: 'panNumber',
    CODE: 'verificationCode',
  },

  PERSONAL_INFO_FORM_FIELDS: {
    MOBILE: 'mobNum',
    EMAIL: 'email',
    PAN: 'panNum',
    IS_COMM_ADRSS_SAME_ADHAR: 'commAddressSameAadhar',
    COMMUNICATION_ADDRESS: 'commAddress',
    GENDER: 'gender',
    TITLE: 'title',
    PAN_FIRST_NAME: 'panFstName',
    PAN_MID_NAME: 'panMidName',
    PAN_LAST_NAME: 'panLstName',
    PANSTATUS: 'panStatus',
    AADHAR_FIRST_NAME: 'aadharFName',
    PERM_ADDRESS: 'permAddress',
    MOTHERS_NAME: 'motherFullName',
    OCCUPATION: 'occupation',
    OCCUPATION_TYPE: 'occupationType',
    GROSS_ANNUAL: 'grossAnualIncome',
    MARITAL_STATUS_FIELD: 'maratialStatus',
    BRANCH_LOCATION: 'branchLocation',
  },

  PERSONAL_DETAIL_FORM_FIELDS: {
    MOBILE: 'mobNum',
    EMAIL: 'email',
    PAN: 'panNum',
    ADDRESS_TYPE: 'addressType',
    PROPERTY_TYPE: 'propertyType',
    BRANCH_LOCATION: 'branchLocation',
    IS_COMM_ADRSS_SAME_ADHAR: 'commAddressSameAadhar',
    COMMUNICATION_ADDRESS: 'commAddress',
    GENDER: 'gender',
    TITLE: 'title',
    PAN_FIRST_NAME: 'panFstName',
    PAN_MID_NAME: 'panMidName',
    PAN_LAST_NAME: 'panLstName',
    PANSTATUS: 'panStatus',
    AADHAR_FIRST_NAME: 'aadharFName',
    PERM_ADDRESS: 'permAddress',
    NOMINEE_DETAILS: 'nomineeDetails',
    GUARDIAN_DETAAILS: 'guardianDetails',
  },

  OCCUPATION_DETAILS_FORM_FIELD: {
    OCCUPATION: 'occupation',
    OCCUPATION_TYPE: 'occupationType',
    COMPANY_NAME: 'companyName',
    IS_IDIAN_CITIZEN: 'indianCitizen',
    NON_INDIAN_DETAILS: 'nonIndianDetails',
    BANK_PREFERANCES: 'bankingPreferances',
    COUNTRY_OF_BIRTH: 'countryOfBrth',
    EDU_QUALIFICATION: 'eduQualification',
    GROSS_ANNUAL: 'grossAnualIncome',
    PLACE_OF_BIRTH: 'placeOfBirth',
    SOURCE_OF_INCOME: 'sourceOfIncome',
    NATIONALITY: 'nationality',
    COUNTRY_TAX_RESIDENCE: 'contryPfTaxResidence',
    JURISDICATION_ADDRESS: 'jurisdictionalAddress',
    TIN_COUNTRY: 'tinCntry',
    TIN_NUMBER: 'tinNum',
    BANK_NAME: 'bankName',
    BENIFIT_FROM_OTHER: 'benefitFrmOther',
    CHECK_DBT: 'checkDBT',
    OCCUPATIONAL_DETAILS: 'occupationDetails',
  },
  PRODUCT_SELECTION_FORM_FIEDS: {
    ACN: 'accountNumber',
    IFSC: 'ifscCode',
    FUNDAMT: 'fundAmt',
    CARDTYPE: 'cardType',
    IS_ACCEPT_TERMS_CONDI_1: 'termsCondition1',
    IS_ACCEPT_TERMS_CONDI_2: 'termsCondition2',
    IS_ACCEPT_TERMS_CONDI_3: 'termsCondition3',
  },
  SURVEY_FORM_FIELDS: {
    COMPANYNAME: 'companyName',
    WORKEMAIL: 'Email',
    MOBILE: 'mobile',
    EMAIL: 'email',
    PAN: 'pan',
    ADDRESS_TYPE: 'addressType',
    PROPERTY_TYPE: 'propertyType',
    EDU_QUALIFICATION: 'eduQualification',
    BRANCH_LOCATION: 'branchLocation',
    IS_COMM_ADRSS_SAME_ADHAR: 'commAddressSameAadhar',
    NOMINEE_DETAILS: 'nomineeDetails',
    COMMUNICATION_ADDRESS: 'commAddress',
    VEHICLE_MAKE: 'vehicleMake',
    VEHICLE_MODEL: 'vehicleModel',
    NOMINEE_DOB: 'nomineeDob',
    PROFESSION_TYPE: 'professionType',
  },
  ADDRESSS_COMPONENT: {
    PINCODE: 'pincode',
    STATE_FIELD: 'state',
    CITY_FIELD: 'city',
    COUNTRY_FIELD: 'country',
    ADDRESS1: 'address1',
    ADDRESS2: 'address2',
    ADDRESS3: 'address3',
  },
  AADHAR_LOGIN_FORM_FIELDS: {
    AADHAR_NO: 'aadharNumber',
    AADHAR_OTP: 'aadharOTP',
  },
};

export const DBTvaluesArr = [
  {
    label: 'first',
    value:
      'I authorize IDFC FIRST Bank to seed my Aadhaar number with the NPCI mapper to enable me to receive Direct Benefit Transfer (DBT) including LPG subsidy from the Govt. of India to my proposed bank account number. ' +
      '\nI understand if more than one benefit is due to me, I will receive all the benefit transfers in the same account.\nYou can check the bank account and Aadhaar linking status on UIDAI website.',
  },
  {
    label: 'second',
    value:
      'I currently receive benefits in my other bank account. I request you to change my NPCI mapping (DBT benefit account) to \nIDFC FIRST Bank.',
  },
];
