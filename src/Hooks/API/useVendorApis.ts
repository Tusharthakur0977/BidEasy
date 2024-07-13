import { useMutation, useQuery } from 'react-query';
import ENDPOINTS from '../../services/ENDPOINTS';
import { client } from '../../services/axiosClient';
import {
  IVendorSignInPayload,
  IVendorSignUpPayload,
} from '../../typings/APITypes';
import { getLocalItem } from '../../Utils/Helpers';
import LOCAL_STORAGE_KEYS from '../../Utils/LocalKeys';

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

export const useAddVendorDetailsApi = () => {
  return useMutation((payload: FormData) => {
    return client.post(ENDPOINTS.vendorAddDetails, payload, {
      headers: {
        Authorization: `Bearer ${getLocalItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
      },
    });
  });
};

export const useGetVendorAccountDetailsApi = () => {
  return useQuery(`vendor_accountDetails`, () =>
    client.get(ENDPOINTS.vendorAccountDetails, {
      headers: {
        Authorization: `Bearer ${getLocalItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
      },
    })
  );
};

export const useGetVendorBasicDetailsApi = () => {
  return useQuery(`vendor_basicDetails`, () =>
    client.get(ENDPOINTS.vendorBasicDetails, {
      headers: {
        Authorization: `Bearer ${getLocalItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
      },
    })
  );
};
