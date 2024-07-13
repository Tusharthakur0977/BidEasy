import { useMutation, useQuery } from 'react-query';
import { getLocalItem } from '../../Utils/Helpers';
import LOCAL_STORAGE_KEYS from '../../Utils/LocalKeys';
import ENDPOINTS from '../../services/ENDPOINTS';
import { client } from '../../services/axiosClient';
import { VendorByIdResponse, VendorListResponse } from '../../typings/RFQTypes';
import { IVendorActionpayload } from '../../typings/APITypes';

export const useInviteVendorApi = () => {
  return useMutation((payload: { email: string }) => {
    return client.post(ENDPOINTS.inviteVendor, payload, {
      headers: {
        Authorization: `Bearer ${getLocalItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
      },
    });
  });
};

export const useCheckVendorFOrPanApi = () => {
  return useMutation((payload: { PAN: string }) => {
    return client.post(ENDPOINTS.checkVendorFOrPan, payload);
  });
};

export const useGetAllVendorListApi = (page?: number, limit?: number) => {
  return useQuery(
    `vendor_${page}_${limit}`,
    () =>
      client.get(`${ENDPOINTS.allVenodrList}?page=${page}&limit=${limit}`, {
        headers: {
          Authorization: `Bearer ${getLocalItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
        },
      }),
    {
      select: ({ data }: { data: VendorListResponse }) => ({
        vendors: data?.vendors ?? [],
        page: data?.page ?? 1,
        limit: data?.limit ?? 10,
        totalRecords: data?.totalRecords ?? 0,
      }),
    }
  );
};

export const useGetVendorByIdApi = (id: string) => {
  return useQuery(
    `vendor_${id}`,
    () =>
      client.get(`${ENDPOINTS.vendorById}?id=${id}`, {
        headers: {
          Authorization: `Bearer ${getLocalItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
        },
      }),
    {
      select: ({ data }: { data: VendorByIdResponse }) => data?.vendor,
    }
  );
};

export const useVendorActionApi = () => {
  return useMutation((payload: IVendorActionpayload) => {
    return client.post(ENDPOINTS.vendorAction, payload, {
      headers: {
        Authorization: `Bearer ${getLocalItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
      },
    });
  });
};
