import { useEffect, useState } from "react"
import Nav from "./Nav"
import CardMo from "./CardMo"

const RightConteiner = ({goFun,filmy}) => {

  return (
    <section className="flex flex-col w-[100%] h-[100vh] md:pl-[216px] overflow-y-scroll">
        <Nav sentFun={goFun}/>
        {
          filmy?.length > 0 ? (
            <div id="container" className="flex flex-wrap justify-evenly pt-20">
              {filmy.map((movie,index) => (
                <CardMo key={index} movie = {movie} />

              ))}
            </div>
          ) : (
            <div> 
              <h2>No movies found</h2>
            </div>
          )
        }
        
    </section>
)
}

export default RightConteiner