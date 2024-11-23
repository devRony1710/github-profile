import { GithubUserInterface } from '@/utils'

export interface GithubSearchBarHeaderProps {
  handleFocusInput: () => void
  handleBlurInput: () => void
  isInputFocus: boolean
  handleOnChange: (value: string) => void
  isSearchingResults: boolean
  userData: GithubUserInterface | undefined
}
