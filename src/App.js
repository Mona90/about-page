import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About';
// import Header from './components/Header';

function App() {
  
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" index element={<About/>}/>
       </Routes>
    </BrowserRouter>
    // <>
    // <Header/>
    // </>
    
  );
}

export default App;
