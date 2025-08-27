import './App.css'
import { InputBox } from './components'

function App() {


  return (
    <div 
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form>
            <div className='w-full mb-1'>
              <InputBox/>
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>swap</button>
            </div>
            <div className='w-full mb-4'>
              <InputBox/>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert USD to INR</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default App
