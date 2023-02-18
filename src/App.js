import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import PublicDetails from './Components/PublicDetails/PublicDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/PublicDetails' element={<PublicDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
