import { Images } from '@/assets/media'
import { FC } from 'react'

export const UserDropdownCompleteState: FC = () => {
  return (
    <div className="w-full h-full flex items-center gap-4">
      <img src={Images.githubLogo} className="h-full w-[20%] bg-black rounded-2xl p-1" />

      <div className="flex flex-col gap-2">
        <span className="text-light-grey text-lg">Github</span>
        <span className="text-light-grey opacity-85 text-base">How people build software</span>
      </div>
    </div>
  )
}
