import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/notFound";
import DefinitionSearch from "../components/DefinitionSearch";


export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }
        else if(response.status === 401){
          navigate('/login');
        }
        
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);

  if (notFound === true) {
    return (
    <><NotFound />
      <Link to='/dictionary'>Return to Search</Link>
    
    </>
    
    );
  }

  return (
    <>
      <h1>Definition</h1>
      {word ? (
        <>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                <b>{meaning.partOfSpeech}</b>:{" "}
                {meaning.definitions[0].definition}
              </p>
              
            );
          })}
          <p>Search again</p>
          <DefinitionSearch/>
        </>
      ) : null}
    </>
  );
}
