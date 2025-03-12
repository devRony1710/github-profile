import { FC } from 'react'
import { InformationLabel } from '@/components'
import { Images } from '@/assets/media'
import { GithubInformationLayoutProps } from './githubInformationLayout.types'

export const GithubInformationLayout: FC<GithubInformationLayoutProps> = ({ location, numberOfFollowers, numberOfFollowing }) => {
  return (
    <section className="w-[90%] xl:w-[70%] max-md:h-[250px] h-[150px] flex items-end justify-start mx-auto gap-2 md:gap-10 -mt-10">
      <div className="w-[150px] mb-24 md:mb-8 h-[150px] md:h-full rounded-2xl bg-main flex items-center justify-center">
        <img src={Images.githubLogo} className="w-[90%] h-[90%] object-contain bg-black rounded-xl" />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4 md:mb-10">
        <InformationLabel title="Followers" value={numberOfFollowers ?? 0} />
        <InformationLabel title="Following" value={numberOfFollowing ?? 0} />
        <InformationLabel title="Location" value={location ?? 'San Francisco, CA'} />
      </div>
    </section>
  )
}
