import { useMutation } from 'react-query';
import ENDPOINTS from '../../services/ENDPOINTS';
import { client } from '../../services/axiosClient';
import {
  IVendorSignInPayload,
  IVendorSignUpPayload,
} from '../../typings/APITypes';

export const useVendorSignInApi = () => {
  return useMutation((payload: IVendorSignInPayload) => {
    return client.post(ENDPOINTS.vendorSignIn, payload);
  });
};

export const useVendorSignUpApi = () => {
  return useMutation((payload: IVendorSignUpPayload) => {
    return client.post(ENDPOINTS.vendorSignUp, payload);
  });
};
