import './app.css'
import { Home } from './Components/Home/Home';
import { Landing } from './Components/Landing/Landing'
import { Routes, Route } from 'react-router-dom';

function App()
{

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </div>
  )
}

export default App;