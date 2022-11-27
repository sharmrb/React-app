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
        <h1> APP</h1>
      );
     }
   
  


export default App;
