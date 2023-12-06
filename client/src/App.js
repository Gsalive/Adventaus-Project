import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Navbar } from './Components';
import {Hero,About,Contactus,Dinner,Lunch,Menu,Reservation,Gallery} from './Pages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >      
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route exact path="/" element={<Hero/>} />
     <Route  path="/About" element={<About/>} />
     <Route  path="/contact" element={<Contactus/>} />
     <Route  path="/menu" element={<Menu/>} />
     <Route  path="/dinner" element={<Dinner/>} />
     <Route  path="/lunch" element={<Lunch/>} />
     <Route  path="/booknow" element={<Reservation/>} />
     <Route  path="/gallery" element={<Gallery/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
