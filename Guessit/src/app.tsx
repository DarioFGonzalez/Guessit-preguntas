import './app.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Landing } from './Components/Landing/Landing'
import { QuestionDetails } from './Components/Question details/QuestionDetail';

function App()
{

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/:id" element={ <QuestionDetails /> } />
      </Routes>
    </div>
  )
}

export default App;