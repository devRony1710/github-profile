import { FC } from 'react'
import { RepositoryCard } from '@/components'

export const GithubRepositories: FC = () => {
  return (
    <section className="mt-10 w-[70%] flex flex-col mx-auto py-5 gap-4">
      <span className="text-light-grey text-[32px] font-semibold leading-[36px]">GitHub User</span>
      <p className="text-light-grey opacity-70 text-[18px] leading-[24px]">How people build software</p>

      <div className="w-full flex items-center justify-between flex-wrap gap-y-10">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </div>

      <a href="/" className="w-auto mx-auto mt-10 text-light-grey opacity-85 text-base">
        View all repositories
      </a>
    </section>
  )
}
