import "./App.css";
import Employee from "./components/employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Holi",
      role: "Dev",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
    {
      name: "Holi",
      role: "Dev2",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
    {
      name: "Holi",
      role: "Dev3",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
    {
      name: "Holi",
      role: "Dev4",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
    {
      name: "Holi",
      role: "Dev5",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
  ]);
  console.log("Time to show employees");
  const showEmployees = true;
  return (
    <div>
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />

          <div classname="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>Can't see employees</p>
      )}
    </div>
  );
}

export default App;
