
// import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import Expertise from './Components/Expertise/Expertise';
import FindJobs from './Components/FindJobs/Findjobs';
import Aboutus from './Components/Aboutus/Aboutus';
import Resources from './Components/Resources/Resources';
import Contactus from './Components/Contactus/Contactus';

function App() {
  return (
    <div className="App">
      {/* <h1> INDIHIRE </h1> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} >
        <Route path='what-we-do' element={<WhatWeDo/>} />
        <Route path='expertise' element={<Expertise/>} />
        <Route path='navigate-to-your-next-opportunity' element={<FindJobs/>} />
        <Route path='about-us' element={<Aboutus/>} />
        <Route path='resources' element={<Resources/>} />
        <Route path='contact-us' element={<Contactus/>} />
        <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
