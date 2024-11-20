import { FC } from 'react'
import clsx from 'clsx'
import { Icons } from '@/assets/media'
import { useQuery } from 'react-query'
import { getGithubUser } from '@/api'
import { GithubSearchBarHeaderProps } from './githubSearchBarHeader.types'

export const GithubSearchBarHeader: FC<GithubSearchBarHeaderProps> = ({ handleBlurInput, handleFocusInput, isInputFocus, handleOnChange, searchValue }) => {
  const { data } = useQuery(['GET_GITHUB_USERS', searchValue], () => getGithubUser(searchValue), {
    enabled: searchValue !== '',
  })
  console.log('🚀 ~ data:', data)

  return (
    <section className="w-full h-[300px] bg-left bg-cover md:bg-cover bg-no-repeat bg-searchBarBackground flex items-center justify-center">
      <div className={clsx('flex items-center gap-4 w-[400px] h-[56px] rounded-lg bg-medium-grey px-4 py-2', isInputFocus ? 'border-2 border-custom-blue' : '')}>
        <img src={Icons.searchIcon} className="h-5 w-5" />
        <input onChange={(event) => handleOnChange(event.target.value)} onFocus={handleFocusInput} onBlur={handleBlurInput} placeholder="Github user" type="text" className="bg-transparent w-full h-full rounded-lg outline-none text-light-grey" />
      </div>
    </section>
  )
}
