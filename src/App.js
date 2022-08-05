import { React, useState, useEffect } from "react";
import './App.css';
import Cards from "./components/cards"
import ImageSearch from "./components/ImageSearch"


function App() {

  const [Images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImage(data.hits);
        setIsLoading(false)
      })
      .catch(err => console.log(err));
  }, [term])


  return (
    <>
      <div className="container mx-auto">
        <ImageSearch searchText={(text)=>setTerm(text)}/>          
       
       {!isLoading && Images.length===0 &&  <h1 className="text-6xl text-center mx-auto mt-32">No Image Found</h1> }
       
        { isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
          : <div className="grid grid-cols-3 gap-4">
            { Images.map(image => (
              <Cards key={ image.id } image={ image }></Cards>
            )) }

          </div> }
      </div>
    </>
  );
}
export default App;
