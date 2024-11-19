import { instance } from '@/api/AxiosInstance'

export const getGithubUser = async (userName: string): Promise<unknown> => {
  return (await instance.get(`/users/${userName}`)).data
}
