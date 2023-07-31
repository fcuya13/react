import "../App.css";
import AddEmployee from "../components/addEmployee";
import EditEmployee from "../components/editEmployee";
import Header from "../components/header";
import Employee from "../components/employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Employees() {
const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Holi",
      role: "Dev",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
    {
      id: 2,
      name: "Holi",
      role: "Dev2",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
    {
      id: 3,
      name: "Holi",
      role: "Dev3",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
    {
      id: 4,
      name: "Holi",
      role: "Dev4",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
    {
      id: 5,
      name: "Holi",
      role: "Dev5",
      img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div>
      
      {showEmployees ? (
        <>
          <div className=" flex flex-start justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  EditEmployee={editEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>Can't see employees</p>
      )}
      <AddEmployee newEmployee={newEmployee} />
    </div>
  );
}

export default Employees;
