import React from 'react'

const Header = ({course}) => (
    <h1>{course}</h1>
)

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
          <Part
            key={part.id}
            parts={part.name} 
            exercises={part.exercises}
          /> 
        )}
    </div>
  )
}
const Part = ({parts, exercises}) => {
  return(
    <div>
      <p>{parts} {exercises}</p>
    </div>
  )
}

const Total = ({parts}) => {
  const total = 
    parts.reduce((sum, current) => sum + current.exercises, 0)
  return (
    <div>
      <p  style={{fontWeight: 'bold'}}>Total number of exercises {total}</p>
    </div>
  )
}

const Course = ({courses}) => {
  return (
  <div>
    {courses.map(course =>
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
      )
    }   
  </div>
  )
}

export default Course