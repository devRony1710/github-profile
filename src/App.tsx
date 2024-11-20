import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import { GithubInformationLayout, GithubRepositories, GithubSearchBarHeader } from './layouts'
import { useState } from 'react'
import { useDebounce } from './hooks'

function App() {
  const queryClient = new QueryClient()
  const [isInputFocus, setIsInputFocus] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const debounceSearchValue = useDebounce(searchValue, 500)

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
    <>
      <QueryClientProvider client={queryClient}>
        <main className="bg-main w-full h-full">
          <GithubSearchBarHeader searchValue={debounceSearchValue.debounceValue} handleOnChange={handleSearchValue} handleBlurInput={handleBlurInput} handleFocusInput={handleFocusInput} isInputFocus={isInputFocus} />
          <GithubInformationLayout />
          <GithubRepositories />
        </main>
      </QueryClientProvider>
    </>
  )
}

export default App
