import { FC } from 'react'
import clsx from 'clsx'
import { Icons } from '@/assets/media'
import { GithubSearchBarHeaderProps } from './githubSearchBarHeader.types'
import { UserDropdownCompleteState } from '@/components'

export const GithubSearchBarHeader: FC<GithubSearchBarHeaderProps> = ({ handleBlurInput, handleFocusInput, isInputFocus, handleOnChange, isSearchingResults, userData, userImage, quote, userName }) => {
  console.log('🚀 ~ userData:', userData)
  return (
    <section className="w-full h-[300px] bg-left bg-cover md:bg-cover bg-no-repeat bg-searchBarBackground flex items-center justify-center">
      <div className={clsx('relative flex items-center gap-4 w-[400px] h-[56px] rounded-lg bg-medium-grey px-4 py-2', isInputFocus ? 'border-2 border-custom-blue' : '')}>
        <img src={Icons.searchIcon} className="h-5 w-5" />
        <input onChange={(event) => handleOnChange(event.target.value)} onFocus={handleFocusInput} onBlur={handleBlurInput} placeholder="Github user" type="text" className="bg-transparent w-full h-full rounded-lg outline-none text-light-grey" />

        {isSearchingResults && (
          <div className="absolute top-16 -left-1 w-[400px] h-[100px] py-3 px-2 bg-main rounded-2xl">
            <UserDropdownCompleteState userImage={userImage} quote={quote} userName={userName} />
          </div>
        )}
      </div>
    </section>
  )
}
