import "./App.css";
import Header from "./components/header";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Employees from "./pages/Employees";
import Dictionary from "./components/Dictionary";

function App() {
  
  return (
    
      <BrowserRouter>
      <Header>
        <Routes>
          <Route path = '/employees' element = {<Employees/>} />
          <Route path = '/employees' element = {<Employees/>} />
          <Route path = '/dictionary' element = {<Dictionary/>} />
        </Routes>
        </Header>
      </BrowserRouter>
   
  );
  
  
} 

export default App;
