import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Navbar } from './Components';
import {Hero,About} from './Pages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >      
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route exact path="/NeeD" element={<Hero/>} />
     <Route  path="/About" element={<About/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
