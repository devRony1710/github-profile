import './App.css'
import { GithubInformationLayout, GithubSearchBarHeader } from './layouts'

function App() {

  return (
    <>
      <main className='bg-main w-full h-[100vh]'>
        <GithubSearchBarHeader />
        <GithubInformationLayout />
      </main>
    </>
  )
}

export default App
