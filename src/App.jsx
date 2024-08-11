import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import JobBoard from './components/Job Board/JobBoard';
import JobDesc from './components/Job Board/JobDesc';
import DetailPage from './components/Onboarding/DetailPage';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/jobboard' element={<JobBoard/>}/>
          <Route exact path = '/details' element={<DetailPage/>}/>
          <Route path = '/jobdesc/:jobid' element={<JobDesc/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
