import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import { GithubInformationLayout, GithubRepositories, GithubSearchBarHeader } from './layouts'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main className="bg-main w-full h-full">
          <GithubSearchBarHeader />
          <GithubInformationLayout />
          <GithubRepositories />
        </main>
      </QueryClientProvider>
    </>
  )
}

export default App
