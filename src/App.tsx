import { React } from "react";

import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personDetails = {
    name: "John Doe",
    age: 67,
    address: "New , USA",
    skills: ["teaching", "traveling", "reading"],
  };

  const personList = [
    {
      name: "John Doe",
      age: 69,
      address: "London",
    },
    {
      name: "Bruce Wayne",
      age: 45,
      address: "Gowtam",
    },
    {
      name: "Donald Trumph",
      age: 78,
      address: "white house , USA",
    },
    {
      name: "Michel Jackson",
      age: 45,
      address: "Washington, USA",
    },
  ];

  return (
    <>
      <h1>Welcome to Vite+React</h1>
      <Greet
        message="Good evening ! How are you"
        messageCount={10}
        isLoggedIn={false}
      />
      <Person details={personDetails} />
      <PersonList personLists={personList} />
    </>
  );
}

export default App;
