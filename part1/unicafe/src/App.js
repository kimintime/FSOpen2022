import { useState } from 'react'

const StatisticsLine = (props) => {
  if (props.text === "Positive:") {
    return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  ) 
}

const Statistics = (props) => {
  const average = (props.valueGood + (props.valueBad * -1)) 
    / props.valueAll

  const percent = (props.valueGood / props.valueAll) * 100

  if (props.valueAll === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="Good:" value={props.valueGood}  />
          <StatisticsLine text="Neutral:" value={props.valueNeutral}  />
          <StatisticsLine text="Bad:" value={props.valueBad}  />
          <StatisticsLine text="Average:" value={average}  />
          <StatisticsLine text="Positive:" value={percent}  />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick} >{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () =>{
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
        <Button handleClick={handleGood} text={'Good'} />
        <Button handleClick={handleNeutral} text={'Neutral'} />
        <Button handleClick={handleBad} text={'Bad'} />
      <h2>Statistics:</h2>
        <Statistics  
          valueGood={good} 
          valueNeutral={neutral} 
          valueBad={bad} 
          valueAll={all}
        />
    </div>
  )
}

export default App;
