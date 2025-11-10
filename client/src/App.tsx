  import './App.css'
  import Banner from './components/Banner.tsx'
  import Metrics from './components/Metrics.tsx'
  import ToDoList from './components/ToDoList.tsx'
  import useTasks from './hooks/useTasks.tsx'

  function App() {
    //Import task state and functions from custom hook
    const {tasks, isLoading, fetchTasks, handleAddTask , handleDeleteTask, handleUpdateStatus} = useTasks()

    return (
      // Main container for app
      <div className='flex flex-col h-screen w-screen overflow-hidden'>
        <Banner />
        {/* Main content area */}
        <div className='bg-gradient-to-r from-slate-100 to-slate-200 flex-1 flex items-center gap-10 overflow-y-auto px-5'>
          {/* White container 1 */}
          <div className='bg-white max-w-sm mx-auto flex-1 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mt-5 mb-5'>
            <Metrics tasks={tasks} isLoading={isLoading}/>
          </div>
          {/* White container 2 */}
          <div className='bg-white mx-auto flex-1 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mt-5 mb-5'>
            <ToDoList 
              tasks={tasks} 
              isLoading={isLoading} 
              fetchTasks={fetchTasks} 
              handleAddTask={handleAddTask} 
              handleDeleteTask={handleDeleteTask} 
              handleUpdateStatus={handleUpdateStatus}
            />
          </div>
        </div>
      </div>
    )
  }

  export default App
