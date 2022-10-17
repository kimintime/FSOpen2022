import React from 'react'

const Persons = ({persons, filterNames, removePerson}) => (
    <div>
      {persons
        .filter(person => person.name.toLowerCase().includes(filterNames.toLowerCase()))
        .map(person => (
          <p key={person.id}>
            {person.name} {person.number} {' '}
            <button onClick={() => removePerson(person.id)}>
            Delete
            </button>

          </p>
        ))}
     </div>
)

export default Persons