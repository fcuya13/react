import './App.css';
import Employee from './components/employee';
import { useState } from 'react';

function App() {
  const [role,setRole] = useState('dev');
  console.log('Time to show employees');
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ?(
       <>
       <input type = "text" onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value)
       }}/>
        <Employee name = "Holi" role ="cpp"/>
        <Employee name = "Holi2" role = {role}/>
        <Employee name = "Holi3"/>
        <Employee name = "Holi4"/>
        <Employee name = "Holi5"/>
        </>)
        :
     (<p>Can't see employees</p>) }
    </div>
  );
}

export default App;
