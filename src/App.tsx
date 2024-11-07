import './App.css'
import { GithubInformationLayout, GithubRepositories, GithubSearchBarHeader } from './layouts'

function App() {

  return (
    <>
      <main className='bg-main w-full h-[100vh]'>
        <GithubSearchBarHeader />
        <GithubInformationLayout />
        <GithubRepositories />
      </main>
    </>
  )
}

export default App
