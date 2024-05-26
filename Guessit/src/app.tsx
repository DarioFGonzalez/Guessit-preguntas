import './app.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Landing } from './Components/Landing/Landing'
import { QuestionDetails } from './Components/Question details/QuestionDetail';
import { SideBar } from './Components/SideBar/SideBar';

function App()
{

  return (
    <div>
      <SideBar />
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/:id" element={ <QuestionDetails /> } />
      </Routes>
    </div>
  )
}

export default App;