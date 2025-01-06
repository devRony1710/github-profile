import { ApiInstance } from '@/api/AxiosInstance'
import { GithubUserInterface } from '@/utils'

export const getGithubUser = async (userName: string): Promise<GithubUserInterface> => {
  return (await ApiInstance.get(`/users/${userName}`)).data
}
