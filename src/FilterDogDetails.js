import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

function FilterDogDetails({dogs}) {
  const { name } = useParams();

  const dog = dogs.find(
    dog => dog.name.toLowerCase() === name.toLowerCase()
  );

  if (dog) return <DogDetails dog={dog}/>
  
  return null;
}

export default FilterDogDetails;