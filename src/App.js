import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import PublicDetails from './Components/PublicDetails/PublicDetails';

import HomePage from './Components/HomePage/HomePage';
import About from './Pages/About/About';
import Services from './Pages/ServicesPage/Services';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/HomePage' element={<HomePage/>} />
        <Route path='/PublicDetails' element={<PublicDetails/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
