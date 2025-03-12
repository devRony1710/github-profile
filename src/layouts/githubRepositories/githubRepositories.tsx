import { FC } from 'react'
import { RepositoryCard } from '@/components'
import { GithubRepositoriesProps } from './githubRepositories.types'
import { Images } from '@/assets/media'

export const GithubRepositories: FC<GithubRepositoriesProps> = ({ repositoriesData }) => {
  const isNotDataAvailable = repositoriesData.length === 0

  if (isNotDataAvailable) {
    return (
      <section className="h-full min-h-[550px] w-full flex items-center justify-center flex-col pb-10">
        <img className="h-[450px] w-[450px] object-cover" src={Images.emptyStateRepositories} alt="Without repositories to show" />
        <div className="w-full flex flex-col gap-4 items-center">
          <span className="text-white font-bold text-2xl">No se encontraron repositorios</span>
          <p className="text-white font-medium text-base">Parece que no hay repositorios disponibles. Intenta buscar otro usuario o verifica que el nombre sea correcto.</p>
        </div>
      </section>
    )
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
