import { instance } from '@/api/AxiosInstance'
import { GithubUserInterface } from '@/utils'

export const getGithubUser = async (userName: string): Promise<GithubUserInterface> => {
  return (await instance.get(`/users/${userName}`)).data
}
