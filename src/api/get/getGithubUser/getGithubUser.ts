import { ApiInstance } from '@/api/AxiosInstance'
import { GithubUserInterface } from '@/utils'
import { isAxiosError } from 'axios'

export const getGithubUser = async (userName: string): Promise<GithubUserInterface> => {
  try {
    const { data } = await ApiInstance.get(`/users/${userName}`)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data
    }
    throw error
  }
}
