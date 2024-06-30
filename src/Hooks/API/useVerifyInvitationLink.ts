import { useMutation } from 'react-query';
import { client } from '../../services/axiosClient';
import ENDPOINTS from '../../services/ENDPOINTS';
import { IVerifyInvitationLinkpayload } from '../../typings/APITypes';

export const useVerifyInvitationLink = (query?: string) => {
  return useMutation((payload: IVerifyInvitationLinkpayload) => {
    return client.post(ENDPOINTS.vendorVerifyInvitationLink, payload);
  });
};
