import { useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomLocation from "./utils/getRandomLocation";
import MainContent from "./components/MainContent";


const App = () => {
  const [inputValue, setInputValue] = useState(getRandomLocation());

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, hasError] = useFetch(url);

  const inputLocation = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* e.target.firstChild.value */
    setInputValue(inputLocation.current.value);
  };

  return (
    <div className="App">
      <h1 className="app__title">Rick and Morty</h1>
      <form className="app__form" onSubmit={handleSubmit}>
        <input className="app__input" ref={inputLocation} type="text" />
        <button className="app__btn">Search</button>
      </form>
      {
      hasError 
      ? <h2 className="app__error"> ❌Hey! you must provide an id from 1 to 126 ❌</h2>
      : <MainContent location={location} />
      }
    </div>
  );
};

export default App;

//*'https://rickandmortyapi.com/documentation/#get-a-single-location'*//
