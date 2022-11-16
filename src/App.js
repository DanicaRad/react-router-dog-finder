import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dogs from './Dogs';
import NavBar from './Navbar';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={Dogs}/>
          <Routes>
            <Route path="dogs" element={<DogList dogs={Dogs}/>}/>
            <Route path="/dogs/:name" element={<FilterDogDetails dogs={Dogs}/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

