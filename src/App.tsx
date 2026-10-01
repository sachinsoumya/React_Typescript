import { React } from "react";

import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Heading } from "./components/Heading";
import { Oscar as Oscars } from "./components/Oscar";
import { Status } from "./components/Status";
import { Button } from "./components/Button";
import { InputElement } from "./components/Input";
import { Container } from "./components/Container";
import { User } from "./components/states/User";

function App() {
  const personDetails = {
    name: "John Doe",
    age: 67,
    address: "New , USA",
    skills: ["teaching", "traveling", "reading"],
  };

  const personList = [
    {
      _id: 1,
      name: "John Doe",
      age: 69,
      address: "London",
    },
    {
      _id: 2,
      name: "Bruce Wayne",
      age: 45,
      address: "Gowtam",
    },
    {
      _id: 3,
      name: "Donald Trumph",
      age: 78,
      address: "white house , USA",
    },
    {
      _id: 4,
      name: "Michel Jackson",
      age: 45,
      address: "Washington, USA",
    },
  ];

  return (
    <>
      <h1>Welcome to Vite+React</h1>
      <Greet message="Good evening ! How are you" isLoggedIn={true} />
      <Person details={personDetails} />
      <PersonList personLists={personList} />
      <Heading>This is heading children props</Heading>
      <Oscars>
        {" "}
        <Heading>This is heading children props</Heading>
      </Oscars>
      <Status status="success" />
      <Button
        handleClick={(event, id) => {
          console.log(event.type, id);
        }}
      />
      <InputElement
        handleChange={(event) => {
          console.log(event);
        }}
        value=" "
      />
      <Container styles={{ padding: "3px", backgroundColor: "pink" }} />
      <User />
    </>
  );
}

export default App;
