import './App.css'
import Card from './components/Card'

function App() {


  return (
    <div className='container'>
      <div className="row mt-2">
        <div className="col-md-4 mt-3">
        <Card title = "Audi" description = "This is luxury car" imageUrl = "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg" btnText="Read More"/>
        </div>
        <div className="col-md-4 mt-3">
        <Card title = "BMW" description = "This is luxury car" imageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg" btnText="Read More"/>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
