import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Avirat from './Pages/Avirat';
function App() {
  return (
    <div className="App">
          <BrowserRouter  basename={window.location.pathname || ''}>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/avirat' element={<Avirat/>}/>

        </Routes>
        </BrowserRouter>
    </div >
  );
}

export default App;
