import React, {useState} from "react";
import data from './data'
import People from "./components/People";

const App = () => {

  const [people, setPeople] = useState(data);

  function removePerson(id) {
    const newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  }

  if(people.length === 0) {
    return (
        <div className="refresh">
          <h2>No People Left</h2>
          <button className="btn-white" onClick={() => setPeople(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <People people={people} removePerson={removePerson}></People>
    </div>
  )
};

export default App;
