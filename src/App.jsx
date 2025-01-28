import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'


function App() {

  const coffees = useLoaderData()

  return (
    <>
    <h1>Hot coffees: {coffees.length}</h1>
    {
      coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
    }
    </>
  )
}

export default App
