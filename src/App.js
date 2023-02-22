import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import PublicDetails from './Components/PublicDetails/PublicDetails';
// import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/HomePage' element={<HomePage/>} />
        <Route path='/PublicDetails' element={<PublicDetails/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
