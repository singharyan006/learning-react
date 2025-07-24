import './App.css'

function App() {
  const animals = ["Lion", "Tiger", "Crocodile", "Lizard", "Horse"];

  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  )
}

export default App
