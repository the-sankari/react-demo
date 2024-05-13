import Box from "./Box";
import { useState } from "react";
// import Counter from "./Counter";
// import { PersonList } from "./assets/components/PersonList";

function PersonList() {
  // eslint-disable-next-line no-unused-vars
  const [persons, setPerson] = useState([
    { id: 1, name: "John", title: "CTO", location: "Helsinki" },
    { id: 2, name: "Davin", title: "Dev", location: "Turku" },
    { id: 3, name: "Saf", title: "Designer", location: "Tampere" },
  ]);

  return (
    <>
      {persons.map((person) => (
        <Box
          key={person.id}
          name={person.name}
          title={person.title}
          location={person.location}
        />
      ))}
    </>
  );
}

export default PersonList;
