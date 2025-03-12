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

  const { data: userData } = useQuery([RequestKey.GET_GITHUB_USER, debounceSearchValue.debounceValue], () => getGithubUser(debounceSearchValue.debounceValue), {
    enabled: debounceSearchValue.debounceValue !== '',
  })
  console.log('🚀 ~ const{data}=useQuery ~ data:', userData)

  const { data: repositoriesData } = useQuery(
    [RequestKey.GET_REPOSITORIES],
    () =>
      getGithubRepositories({
        userName: debounceSearchValue.debounceValue,
      }),
    {
      enabled: debounceSearchValue.debounceValue !== '' && userData !== null,
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
      <GithubSearchBarHeader
        userImage={userData?.avatar_url as string}
        userData={userData}
        isSearchingResults={searchValue !== ''}
        handleOnChange={handleSearchValue}
        handleBlurInput={handleBlurInput}
        handleFocusInput={handleFocusInput}
        isInputFocus={isInputFocus}
        quote={`${userData?.bio.slice(0, 30)}...` as string}
        userName={userData?.name as string}
      />
      <GithubInformationLayout numberOfFollowers={userData?.followers} numberOfFollowing={userData?.following} location={userData?.location} />
      <GithubRepositories />
    </main>
  )
}
