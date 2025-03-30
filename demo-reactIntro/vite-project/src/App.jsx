import './App.css'
import CardList from './CardList'

function App() {

  let counter = 111;
  
  const onClick = () => {
    return (
      counter = (counter + 1)
    )
  }
  console.log(counter);

  return (
    <>
      <h1> My primera app con React y Vite</h1>

      <p >Número de clicks: {counter}</p>
      <button onClick={onClick()}>clics</button>
      <CardList/>
    </>
  )
}

export default App
