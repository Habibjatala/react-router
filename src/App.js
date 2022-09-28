
import './App.css';
//import {Switch,Router} from './react-router-dom';
import {Route,Routes,Navigate} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Move from './Move';
import Services from './Services';
import Search from './Search';

function App() {
  return (
   <>
        <Move/>
   <Routes>
    <Route exact path='/' element={<About  name='About'/>}/>
    <Route path='/contact' element={<Contact name="Contact" />}/>
    <Route path='/search' element={<Search name="Contact" />}/>
    <Route path='/services/:asd/:aho' element={<Services name='Services'/>}/>
    {/*<Route path="*" element={<Error/>}/>*/}
    <Route path="*" element={<Navigate to ="/" />}/>
   </Routes>

   </>
  );
}

export default App;
