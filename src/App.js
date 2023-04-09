import './App.css';
import Employee from './components/employee';

function App() {
  console.log('Time to show employees');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?(
       <>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        </>)
        :
     (<p>Can't see employees</p>) }
    </div>
  );
}

export default App;
