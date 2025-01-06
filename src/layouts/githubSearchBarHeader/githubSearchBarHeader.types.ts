import { GithubUserInterface } from '@/utils'

export interface GithubSearchBarHeaderProps extends DropdownProps {
  handleFocusInput: () => void
  handleBlurInput: () => void
  isInputFocus: boolean
  handleOnChange: (value: string) => void
  isSearchingResults: boolean
  userData: GithubUserInterface | undefined
}

export interface DropdownProps {
  userImage: string
  userName: string
  quote: string
}
