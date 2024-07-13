export interface VendorListResponse {
  message: string;
  vendors: VendorInList[];
  page: number;
  limit: number;
  totalRecords: number;
}

export interface VendorInList {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  PAN: string;
  vendorCode: string;
  updatedAt: string;
  gstNumber: string;
  invitedBy: { id: string; email: string; name: string; role: string }[];
  overAllApprovalStatus: string;
}

export interface VendorByIdResponse {
  message: string;
  vendor: Vendor;
}

interface Vendor {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  PAN: string;
  registrationToken: string;
  vendorCode: string;
  isRegistered: boolean;
  isDetailsRegistered: boolean;
  invitedBy: InvitedBy;
  details: VendorDetails;
  venodrApproval: VendorApproval;
}

export interface VendorDetails {
  gstClassification: string;
  typesOfSupply: string;
  buisnessAddress: string;
  gstNumber: string;
  panDocument: string;
  gstCertificate: string;
  legalBusinessName: string;
  companyAddress: string;
  city: string;
  state: string;
  pinCode: string;
  contactPersonName: string;
  contactPersonEmail: string;
  contactPersonNumber: string;
  accountDeptEmail: string;
  salesDeptEmail: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  ifscCode: string;
  bankBranch: string;
  chequePhoto: string;
  msmeType: string;
  msmeNumber: string;
  msmeCertificate: string;
  cinNumber: string;
  companyRegsCertificate: string;
  authorisedDist: string;
  drugLicense: string;
  additionalLicenses: string;
  additionalNotes: string;
  additionalAttachement: string;
  updatedAt: string;
}

export interface VendorApproval {
  overAllApprovalStatus: string;
  approvals: Approval[];
}

export interface Approval {
  id: string;
  roleRequired: string;
  status: string;
  rejectionReason: string | null;
  approvedBy: InvitedBy;
  createdAt: string;
  updatedAt: string;
}

export interface InvitedBy {
  id: string;
  email: string;
  name: string;
  role: string;
}
