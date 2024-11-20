export interface GithubSearchBarHeaderProps {
  handleFocusInput: () => void
  handleBlurInput: () => void
  isInputFocus: boolean
  handleOnChange: (value: string) => void
  searchValue: string
}
