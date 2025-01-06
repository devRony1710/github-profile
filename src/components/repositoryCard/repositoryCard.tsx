import { FC } from 'react'
import { Icon } from '@/components'
import { Icons } from '@/assets/media'
import { RepositoryCardProps } from './repositoryCard.types'

export const RepositoryCard: FC<RepositoryCardProps> = ({ value, nombre }) => {
  const textDescription =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur quis corrupti corporis fuga similique neque repellat repudiandae deleniti, libero cumque nesciunt eius architecto necessitatibus officiis assumenda facere rem enim'

  return (
    <article className="w-full md:max-w-[500px] h-auto rounded-2xl bg-gradient-to-r min-h-[180px] from-[#111729] to-[#1D1B48] p-4 flex flex-col justify-between">
      <span className="text-light-grey font-bold  text-[18px] leading-[22px]">{nombre}</span>
      <p className="text-light-grey text-base opacity-90 line-clamp-2">{textDescription}</p>

      <div className="text-light-grey flex flex-wrap items-center w-full gap-2">
        <span className="flex items-center gap-1 text-lg">
          <Icon src={Icons.chieldIcon} /> MIT
        </span>
        <span className="flex items-center gap-1 text-lg">
          <Icon src={Icons.nestingIcon} />
          {value}
        </span>
        <span className="flex items-center gap-1 text-lg">
          <Icon src={Icons.startIcon} />
          {value}
        </span>
        <span className="text-sm">updated 4 days ago</span>
      </div>
    </article>
  )
}
