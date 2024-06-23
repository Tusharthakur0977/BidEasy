import { useQuery } from 'react-query';
import ENDPOINTS from '../../services/ENDPOINTS';
import { client } from '../../services/axiosClient';

export const useDummyApi = () => {
  return useQuery(ENDPOINTS.dummy, () => client.get(ENDPOINTS.dummy));
};
