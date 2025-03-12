import { FC } from 'react'
import { EmptyStateProps } from './emptyState.types'
import { Images } from '@/assets/media'

export const EmptyState: FC<EmptyStateProps> = ({ title, description, emptyStateImage }) => {
  return (
    <section className="h-full min-h-[550px] w-full flex items-center justify-center flex-col pb-10">
      <img className="h-[450px] w-[450px] object-cover" src={emptyStateImage ?? Images.emptyStateRepositories} alt="Without repositories to show" />
      <div className="w-full flex flex-col gap-4 items-center">
        <span className="text-white font-bold text-2xl">{title ?? ''}</span>
        <p className="text-white font-medium text-base">{description ?? ''}</p>
      </div>
    </section>
  )
}
