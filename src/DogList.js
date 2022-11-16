import React from "react";
import { Link } from "react-router-dom";
import './DogList.css';

const DogList = ({dogs}) => {

  return (
    <div className='DogList'>
      {dogs.map(dog => (
        <div className="dog" key={dog.name}>
          <img className='dogImg' src={dog.src} alt={dog.name} />
          <h3>
            <Link to={dog.name.toLowerCase()}>{dog.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DogList;