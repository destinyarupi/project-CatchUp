import './App.css';
import { Home, AboutUs, Features, HowItWorks, LogIn, SignUp, ForgotPassword, Careers, ContactUs, FAQs, Help, PrivacyPolicy, TOS } from './data/Exports';
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
        <Route path='/Forgot_Password' element = {<ForgotPassword />} />
        <Route path='/Sign_Up' element = {<SignUp />} />
        <Route path='/Careers' element = {<Careers />} />
        <Route path='/Contact_Us' element = {<ContactUs />} />
        <Route path='/FAQs' element = {<FAQs />} />
        <Route path='/Help' element = {<Help />} />
        <Route path='/Privacy_Policy' element = {<PrivacyPolicy />} />
        <Route path='/Terms_and_conditions' element = {<TOS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
