import './App.css';
import { Home, AboutUs, Features, HowItWorks, LogIn, SignUp } from './data/Exports';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path='/How_it_works' element = {<HowItWorks />} />
        <Route path='/Features' element = {<Features />} />
        <Route path='/About_us' element = {<AboutUs />} />
        <Route path='/Log_In' element = {<LogIn />} />
        <Route path='/Sign_Up' element = {<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
