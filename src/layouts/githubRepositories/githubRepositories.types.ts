export type RepositoryType = {
  repositoryName: string
  starsValue: number
}

export interface GithubRepositoriesProps {
  repositoriesData: RepositoryType[]
}
