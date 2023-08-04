import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared";
import AddCustomer from "../components/addCustomer";

export default function Customers() {
  const [customers, setCustomers] = useState();
  const [show, setShow] = useState();

  function toggleShow(){
    setShow (!show);
  }

  useEffect(() => {
    fetch(baseUrl + "api/customers/")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);

  function newCustomer(name, industry) {
    const data = { name: name, industry: industry };
    const url = baseUrl + "api/customers/";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })

      .then((data) => {toggleShow()
        setCustomers([...customers, data.customer])
      })

      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <h1>Customer List:</h1>
      
        {customers
          ? customers.map((customer) => {
              return (
                <div className="m-2" key={customer.id}>
                  <Link to={"/customers/" + customer.id}><button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">{customer.name}</button></Link>
                </div>
              );
            })
          : ""}
      
      <AddCustomer newCustomer={newCustomer} show = {show} toggleShow = {toggleShow} />
    </>
  );
}
