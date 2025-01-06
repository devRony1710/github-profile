import { getGithubRepositories, getGithubUser } from '@/api'
import { useDebounce } from '@/hooks'
import { GithubInformationLayout, GithubRepositories, GithubSearchBarHeader } from '@/layouts'
import { RequestKey } from '@/utils'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'

export const Home: FC = () => {
  const [isInputFocus, setIsInputFocus] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const debounceSearchValue = useDebounce(searchValue, 500)

  const { data } = useQuery(['GET_GITHUB_USERS', debounceSearchValue.debounceValue], () => getGithubUser(debounceSearchValue.debounceValue), {
    enabled: debounceSearchValue.debounceValue !== '',
  })

  const { data: repositoriesData } = useQuery(
    [RequestKey.GET_REPOSITORIE_KEYS],
    () =>
      getGithubRepositories({
        userName: debounceSearchValue.debounceValue,
      }),
    {
      enabled: debounceSearchValue.debounceValue !== '' && data !== null,
    }
  )
  console.log('🚀 ~ repositoriesData:', repositoriesData)

  const handleFocusInput = (): void => {
    setIsInputFocus(true)
  }

  const handleBlurInput = (): void => {
    setIsInputFocus(false)
  }

  const handleSearchValue = (value: string): void => {
    setSearchValue(value)
  }
  return (
    <main className="bg-main w-full h-full">
      <GithubSearchBarHeader userData={data} isSearchingResults={searchValue !== ''} handleOnChange={handleSearchValue} handleBlurInput={handleBlurInput} handleFocusInput={handleFocusInput} isInputFocus={isInputFocus} />
      <GithubInformationLayout />
      <GithubRepositories />
    </main>
  )
}
