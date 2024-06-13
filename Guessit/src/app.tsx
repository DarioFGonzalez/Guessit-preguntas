import './app.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Landing } from './Components/Landing/Landing'
import { QuestionDetails } from './Components/Question details/QuestionDetail';

function App()
{

  return (
    <div className='flex py-[100px] flex-row gap-[20px] bg-gradient-to-br from-pink-600 from-20% to-orange-500 to-80% justify-center items-center min-h-[100vh] bg-fixed align-middle'>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/:id" element={ <QuestionDetails /> } />
      </Routes>
    </div>
  )
}

export default App;