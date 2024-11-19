import { FC } from 'react'
import { InformationLabelProps } from './informationLabel.types'

export const InformationLabel: FC<InformationLabelProps> = ({ title, value }) => {
  return (
    <div className="w-auto gap-4 px-4 py-2 rounded-lg h-[50px] bg-[#111729] flex items-center justify-around">
      <span className="text-light-grey text-base opacity-50 font-bold">{title}</span>
      <div className="w-[0.5px] opacity-40 rounded-full border-none h-[90%] bg-light-grey" />
      <span className="text-white text-lg line-clamp-1">{value}</span>
    </div>
  )
}
