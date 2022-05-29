import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" index element={<About/>}/>
       </Routes>
    </BrowserRouter>
    

  );
}

export default App;
