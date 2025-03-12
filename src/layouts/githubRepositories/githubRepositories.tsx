import { FC } from 'react'
import { EmptyState, RepositoryCard } from '@/components'
import { GithubRepositoriesProps } from './githubRepositories.types'
import { EMPTY_STATE_DESCRIPTION_REPOSITORIES, EMPTY_STATE_TITLE_REPOSITORIES } from '@/utils/constants/layoutStrings'

export const GithubRepositories: FC<GithubRepositoriesProps> = ({ repositoriesData }) => {
  const isNotDataAvailable = repositoriesData.length === 0

  if (isNotDataAvailable) {
    return <EmptyState title={EMPTY_STATE_TITLE_REPOSITORIES} description={EMPTY_STATE_DESCRIPTION_REPOSITORIES} />
  }

  return (
    <section className="mt-10 w-[90%] xl:w-[70%] flex flex-col mx-auto py-5 gap-4">
      <div className="flex flex-col w-auto flex-start mb-6 gap-3">
        <span className="text-light-grey text-[32px] font-semibold leading-[36px]">GitHub User</span>
        <p className="text-light-grey opacity-70 text-[18px] leading-[24px]">How people build software</p>
      </div>

      <div className="max-md:mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10">
        {repositoriesData.map((repo) => (
          <RepositoryCard nombre={repo.repositoryName} value={repo.starsValue} />
        ))}
      </div>

      <a href="/" className="w-auto mx-auto mt-10 text-light-grey opacity-85 text-base">
        View all repositories
      </a>
    </section>
  )
}
