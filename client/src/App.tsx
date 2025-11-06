import './App.css'
import Banner from './Banner'

function App() {

  return (
    // Main container for app
    <div className='flex flex-col h-screen w-screen overflow-hidden'>
      <Banner />
      {/* Main content area */}
      <div className='bg-slate-200 flex-1 flex items-center gap-10 overflow-y-auto px-5'>
        {/* White container */}
        <div className='bg-white max-w-3xl mx-auto flex-1 rounded-lg p-5'>
          <h1>Metrics</h1>
        </div>
        {/* White container 2 */}
        <div className='bg-white max-w-3xl mx-auto flex-1 rounded-lg p-5'>
          <h1>To-Do List</h1>
        </div>
      </div>
    </div>
  )
}

export default App
