import { ApiInstance } from '@/api/AxiosInstance'
import { getGithubRepositoriesProps } from './getGithubRepositories.types'

export const getGithubRepositories = async ({ userName }: getGithubRepositoriesProps): Promise<unknown> => {
  try {
    const { data } = await ApiInstance.get(`/users/${userName}/repos`)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
