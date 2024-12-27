import { useState,useEffect } from "react";
import LeftConteiner from "./sections/LeftConteiner"
import RightConteiner from "./sections/RightConteiner"


const API_URL = "https://imdb.iamidiotareyoutoo.com/search?"

export default function App() {

  const [movies, setMovies] = useState([]);
  const wyszukanieFilmu = async (title) => {
    const response = await fetch(`${API_URL}q=${title}`);
    const data = await response.json();
    setMovies(data.description);
    
  }
  useEffect(() => {
    wyszukanieFilmu('batman');
  }, []);
  return (
    <main className="flex w-[100%]">
        <div id="bgGray" className="bg-slate-600/80  top-0 left-0 right-0 bottom-0"></div>
        <LeftConteiner/>

        <RightConteiner goFun={wyszukanieFilmu} filmy={movies} />
    </main>
  )
}