import * as React from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const LocalStorageComponent = () => {
  const [person, setPerson] = useLocalStorageState("personData", {
    name: "",
    family: "",
  });

  function handleChange(event) {
    const newPerson = { ...person };
    newPerson[event.target.name] = event.target.value;
    setPerson(newPerson);
  }

  return (
    <div>
      <form>
        <label>Name: </label>
        <input value={person.name} onChange={handleChange} name="name" />
        <label> Family: </label>
        <input value={person.family} onChange={handleChange} name="family" />
        <button
          type="button"
          onClick={() => setPerson({ name: "", family: "" })}
        >
          Reset
        </button>
      </form>
      {person.name && person.family ? (
        <strong>
          Hello {person.name} {person.family}
        </strong>
      ) : (
        "Please type your name & family"
      )}
    </div>
  );
};

export default LocalStorageComponent;
