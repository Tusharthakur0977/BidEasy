export interface IVendorSignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName: string;
  PAN: string;
}

export interface IVendorSignInPayload {
  email: string;
  password: string;
}

export interface IVerifyInvitationLinkpayload {
  token: string;
  email: string;
}

export interface IVendorActionpayload {
  vendorId: string;
  status: 'APPROVED' | 'REJECTED';
  rejectionReason?: string;
}
