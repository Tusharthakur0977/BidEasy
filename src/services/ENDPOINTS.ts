const ENDPOINTS = {
  vendorSignUp: '/vendor/auth/register',
  vendorSignIn: '/vendor/auth/login',
  vendorVerifyInvitationLink: '/vendor/verify_invite_link',
  vendorAddDetails: '/vendor/add_details',
  vendorAccountDetails: '/vendor/accountDetails',
  vendorBasicDetails: '/vendor/basicDetails',

  // ----------------------------------------------------------------
  rfqVendorsList: '/admin/vendor/users',
  inviteVendor: '/rfq/inviteVendor',
  checkVendorFOrPan: '/rfq/panVerify',
  allVenodrList: '/rfq/vendorsList',
  vendorById: '/rfq/vendor_detail',
  vendorAction: '/rfq/vendorAction',
};

export default ENDPOINTS;
