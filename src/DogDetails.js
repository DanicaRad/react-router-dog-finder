import { Navigate } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({dog}) => {

  if(!dog) return <Navigate to="../dogs" replace={true} />;

  return (
    <div className="DogDetails">
      <img src={dog.src} alt={dog.name}/>
      <h2>{dog.name}</h2>
      <h3>{dog.age} yeard old</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};
 
export default DogDetails;