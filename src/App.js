import React from 'react';
import './App.css';
import MovieList from './components/movieList';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MovieList/>
    </div>
  );
}

export default App;
