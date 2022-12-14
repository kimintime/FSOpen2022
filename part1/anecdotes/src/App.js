import { useState } from 'react'

const Header = ({text}) => (
  <h2>{text}</h2>
)

const Anecdote = (props) => (
  <div>
    <p>{props.quote}</p>
    <p>has {props.total} votes</p>
  </div>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Top = (props) => {
  const maxVotes = Math.max(...props.total)
  const first = props.total.indexOf(maxVotes)

  if (maxVotes === 0) {
    return (
      <p>No votes</p>
    )
  }

  return (
    <p>{props.text[first]}</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const handleClick = () => {
    const i = Math.floor(Math.random() * anecdotes.length)
    setSelected(i)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote 
        quote={anecdotes[selected]} 
        total={votes[selected]} 
      />
      <Button onClick={handleVote} text="Vote" />
      <Button onClick={handleClick} text="Next anecdote" />
      <Header text="Anecdote with the most votes" />
      <Top text={anecdotes} total={votes} />
    </div>
  )
}

export default App;
