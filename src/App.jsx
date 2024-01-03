import {puppyList} from './data.js'
import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log("puppyList: ", puppies)

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <>
      <div className="App">
      {featPupId && (
        <div className="clickDisplay">
          <h2 className='pupHeader'>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        {puppies.map((puppy) => {
          return <p className='puppyNames' onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })}
      </div>
      
    </>
  )
}

export default App
