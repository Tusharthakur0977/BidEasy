import { useMutation, useQuery } from 'react-query';
import ENDPOINTS from '../../services/ENDPOINTS';
import { client } from '../../services/axiosClient';
import { IApproveVendorPayload } from '../../typings/APITypes';

export const useRFQVendorsListApi = (query?: string) => {
  return useQuery(`data_${query}`, () =>
    client.get(`${ENDPOINTS.rfqVendorsList}?search=${query}`)
  );
};

export const useVendorApproveApi = () => {
  return useMutation((payload: IApproveVendorPayload) => {
    return client.post(ENDPOINTS.approveVendor, payload);
  });
};
