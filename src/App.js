import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect } from 'react';



     const API_URL='apiwebsite'
     const App = () => {

      const searchMovies =async (title) => {
        const response =await fetch(`${API_URL}&s=${title}`);

        const data =await response.json();

        console.log(data.search);
      }

      useEffect(() => {
      searchMovies('')
      },[]); 

      return (
        <div className='app'>
          <h1>MovieLand</h1>

          <div className="search">
            <input 
            placeholder='Search for movies'
            value="superman"
            onChange={()=>{}}
            />
            {/* <img
            src={earch}
            alt="search"
            onClick={()=>{}}
            /> */}
            </div>
            <div className='container'>
            
            </div>
          
          </div>
      );
     }
   
  


export default App;
