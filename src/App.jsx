import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'
import Navbar from './Components/Navbar'


function App() {

  const loadedCoffees = useLoaderData()

  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <>
    <Navbar></Navbar>
    <h1>Hot coffees: {coffees.length}</h1>
    {
      coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
    }
    </>
  )
}

export default App
