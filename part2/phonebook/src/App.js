import { useState, useEffect } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNames, setFilterNames] = useState('')
  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(true)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const alreadyInRegister = persons.some(personsObject =>{
    if(personsObject.name === newName){
        return true;
    }
    return false
  })

  const addName = (event) => {
    event.preventDefault()

    const personsObject = {
        name: newName,
        number: newNumber
      }
    
    const person = persons.find(p => p.name === newName)
    const changedPerson = {...person, number: newNumber}
    
    if (alreadyInRegister) {
      if (window
          .confirm(`${changedPerson.name} is already in the phonebook. Update phone number? `) === true) {

        setNewName('')
        setNewNumber('')

        personsService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
          setMessage(`${newName}'s number was updated.`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setMessage(`${changedPerson.name} was already deleted from the server.`)
          setSuccess(false)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== changedPerson.id))
        })
       } else {
        
        setNewName('')
        setNewNumber('')

       }
    } 

     else {
      personsService
        .create(personsObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(`Added ${newName}.`)
          setSuccess(true)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
  }

  const removePerson = (id) => { 
    const person = persons.find(p => p.id === id)
    const name = person.name
    const personid = person.id

    if (window.confirm(`Delete ${name}?`)) {
      personsService.remove(personid)
      setPersons(persons.filter(person => person.id !== personid))
    }  
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setFilterNames(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} success={success} />
      <Filter filterNames={filterNames} handleFilterChange={handleFilterChange} />
      <h2>Add:</h2>
      <PersonForm
        addName={addName}
        newName={newName} 
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}  
      /> 
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        filterNames={filterNames} 
        removePerson={removePerson} 
      /> 
    </div>
  )
}

export default App