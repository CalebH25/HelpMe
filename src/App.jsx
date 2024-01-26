import { useState } from 'react'
import AddIcon from "./assets/AddIcon.png"
import Filter from "./assets/Filter.png"

import {data} from './data.js'
import './App.css'

function App() {

  const [search, setSearch] = useState('');

  return (
    <>
      <header className='top'>
        
        <h1 className='title'> Buisness and Company Partners</h1>
        
      </header>


      
      <body className='container'>
      {data.filter((item) => {
        return search.toLowerCase() === '' ? item 
        : item.Group_Name.toLowerCase().includes(search)
      }).map((item) =>(
      <button key={item.id} className='shell'>
        <p>Company Name: {item.Group_Name}</p>
        <p>Phone Number: {item['Phone Number']}</p>
        <p>Type Of Group: {item['Type Of Group']}</p>
      </button>
      )
    )
    
    }

      </body>


      <footer className='bottom'>
        
        <input onChange={(x) => setSearch(x.target.value)}type="text" className='search-button' placeholder='Search...'>
        </input>
        <button className='filter-button'>
          <p>Filter</p>
          <img className='filter-icon' src={Filter} alt='icon'/>
          </button>
        
        <button className='add-button'>
          <p>Add</p>
          <img className='icon'src={AddIcon} alt='icon'/>
        </button>
      </footer>

    </>
  )
}

export default App
