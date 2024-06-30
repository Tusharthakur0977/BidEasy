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

export interface IApproveVendorPayload {
  userId: number;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
}

export interface IVerifyInvitationLinkpayload {
  token: string;
  email: string;
}
