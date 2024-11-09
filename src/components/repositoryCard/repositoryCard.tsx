import { FC } from 'react'
import { Icon } from '@/components'
import { Icons } from '@/assets/media'

export const RepositoryCard: FC = () => {
  const textDescription =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur quis corrupti corporis fuga similique neque repellat repudiandae deleniti, libero cumque nesciunt eius architecto necessitatibus officiis assumenda facere rem enim'

  return (
    <article className="w-full max-w-[500px] h-auto rounded-2xl bg-gradient-to-r min-h-[180px] from-[#111729] to-[#1D1B48] p-4 flex flex-col justify-between">
      <span className="text-light-grey font-bold  text-[18px] leading-[22px]">.Repo</span>
      <p className="text-light-grey text-base opacity-90 line-clamp-2">{textDescription}</p>

      <div className="text-light-grey flex items-center w-full gap-4">
        <span className="flex items-center gap-1 text-lg">
          <Icon src={Icons.chieldIcon} /> MIT
        </span>
        <span className="flex items-center gap-1 text-lg">
          <Icon src={Icons.nestingIcon} />
          2,369
        </span>
        <span className="flex items-center gap-1 text-lg">
          <Icon src={Icons.startIcon} />
          434
        </span>
        <span className="text-sm">updated 4 days ago</span>
      </div>
    </article>
  )
}
