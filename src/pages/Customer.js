import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../shared";
import NotFound from "../components/notFound";

export default function Customer() {
  const { id } = useParams();
  const [notFound, setNotFound] = useState();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  const [tempCustomer, setTempCustomer] = useState();
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState();

  const url = baseUrl + "api/customers/" + id;

  useEffect(() => {
    if (!tempCustomer) return;
    if (!customer) return;
    let equal = true;
    if (customer.name !== tempCustomer.name) equal = false;

    if (customer.industry !== tempCustomer.industry) equal = false;

    if (equal) setChanged(false);
  });

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }

        if (!response.ok) {
          throw new Error("Rip");
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setTempCustomer(data.customer);
        setError(undefined);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  function deleteCustomer() {
    console.log("delete");
  }

  function updateCustomer(e) {
    e.preventDefault();
    const url = baseUrl + "api/customers/" + id + "/";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tempCustomer),
    })
      .then((response) => {
        if (!response.ok) throw new Error("rip");
        return response.json();
      })

      .then((data) => {
        setCustomer(data.customer);
        console.log(data);
        setChanged(false);
        setError(undefined);
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  }

  return (
    <div className="p-3">
      {notFound ? <NotFound /> : null}
      {customer ? (
        <div>
          <form
            className="w-full max-w-sm"
            id="customer"
            onSubmit={updateCustomer}
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label for="name">Name</label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="name"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  value={tempCustomer.name}
                  onChange={(e) => {
                    setChanged(true);
                    setTempCustomer({ ...tempCustomer, name: e.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label for="industry">Industry</label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="industry"
                  type="text"
                  value={tempCustomer.industry}
                  onChange={(e) => {
                    setChanged(true);
                    setTempCustomer({
                      ...tempCustomer,
                      industry: e.target.value,
                    });
                  }}
                ></input>
              </div>
            </div>
          </form>
          {changed ? (
            <div className="mb-2 mr-2">
              <button
                className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => {
                  setTempCustomer({ ...customer });
                  setChanged(false);
                }}
              >
                Cancel
              </button>{" "}
              <t />
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                form="customer"
              >
                Save
              </button>{" "}
              <br />
            </div>
          ) : null}

          <div>
            <button
              className="mb-4 bg-slate-800 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded"
              onClick={(e) => {
                const url = baseUrl + "api/customers/" + id;
                fetch(url, {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                })
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Network response was not ok.");
                    }
                    navigate("/customers");
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
            >
              Delete Customer
            </button>
          </div>
        </div>
      ) : null}
      {error ? <p>{error}</p> : null}
      <Link
        className=" no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        to="/customers"
      >
        <button>Return</button>{" "}
      </Link>
    </div>
  );
}
