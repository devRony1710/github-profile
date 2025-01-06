import { Images } from '@/assets/media'
import { FC } from 'react'
import { UserDropdownCompleteStateProps } from './userDropdownCompleteState.types'

export const UserDropdownCompleteState: FC<UserDropdownCompleteStateProps> = ({ userImage, quote, userName }) => {
  return (
    <div className="w-full h-full flex items-center gap-4">
      <img src={userImage ?? Images.githubLogo} className="h-full w-[20%] bg-black rounded-2xl p-1" />

      <div className="flex flex-col gap-2">
        <span className="text-light-grey text-lg">{userName ?? 'Github'}</span>
        <span className="text-light-grey opacity-85 text-base">{quote ?? 'How people build software'}</span>
      </div>
    </div>
  )
}
