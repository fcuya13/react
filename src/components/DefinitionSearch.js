import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch(){
    const [word, setWord] = useState("");
    const navigate = useNavigate();
  
    return (
      <form
        className="flex justify-center space-x-2 max-w-300"
        onSubmit={() => {
          navigate("/dictionary/" + word);
        }}
      >
        <input
          className="shrink min-w-0 px-2 py-1 rounded "
          placeholder="Example"
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button className = "bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </form>
    );
}