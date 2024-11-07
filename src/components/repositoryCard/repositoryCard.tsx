import { FC } from 'react'
import { Icon } from '@/components'
import { Icons } from '@/assets/media'

export const RepositoryCard: FC = () => {
  const textDescription =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem consequatur quis corrupti corporis fuga similique neque repellat repudiandae deleniti, libero cumque nesciunt eius architecto necessitatibus officiis assumenda facere rem enim'

  return (
    <article className="w-full max-w-[450px] h-auto rounded-2xl bg-gradient-to-r min-h-[150px] from-[#111729] to-[#1D1B48] p-4 flex flex-col justify-between">
      <span className="text-light-grey font-bold  text-[18px] leading-[22px]">.Repo</span>
      <p className="text-light-grey text-base opacity-70">{textDescription.substring(0, 100)}...</p>

      <div className="text-light-grey">
        <span>
          <Icon src={Icons.chieldIcon} /> MIT
        </span>
        <span>
          <Icon src={Icons.nestingIcon} />
          2,369
        </span>
        <span>434</span>
        <span>updated 4 days ago</span>
      </div>
    </article>
  )
}
