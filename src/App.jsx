import { useState } from 'react';
import data from './data';
import './App.css';
import List from './Components/List';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main className="h-100 d-flex justify-content-center align-items-center">
      <section className="container bg-white rounded p-5 bg-shadow">
        <h3 className="text-center text-capitalize text-dark">
          {people.length} birthdays today
        </h3>
        <List people={people} />
        <button
          className=" btn btn-primary d-inline btn-block"
          onClick={() => setPeople([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
