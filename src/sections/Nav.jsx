import sun from '../assets/sunIcon.svg'
import moon from '../assets/moonIcon.svg'
import login from '../assets/loginIcon.svg'
import search from '../assets/searchIcon.svg'
import hamburger from '../assets/hamburger.svg'
import { useState } from 'react'


const Nav = ({sentFun}) => {
    const [sunM, setSunM] = useState(true);
    const [moonM, setMoonM] = useState(false);
    const [wyszukaj, setWyszukaj] = useState("");

    const zmianaAtrybutuSun = () => {
        setSunM(!sunM);
        setMoonM(!moonM);
    }
    const zmianaAtrybutuMoon = () => {
        setSunM(!sunM);
        setMoonM(!moonM);
    }

    const menuSlid = () => {
        const menu = document.getElementById("menuTo");
        const tloDoMenu = document.getElementById("bgGray");
        menu.classList.toggle("showMenu");
        tloDoMenu.classList.toggle("showBG");
    }

    return (
    <nav className='fixed top-0 left-0 right-0 md:pl-[216px] h-[10vh] flex justify-between bg-blue-600 text-white px-4'>
        <div className='flex'>
            <div className='flex items-center'>
                <img src={hamburger} alt="" className='cursor-pointer md:hidden w-[25px]' onClick={menuSlid}/>
                <img src={sun} alt="" className={`w-[25px] cursor-pointer ${sunM ? 'block' : 'hidden'}` } onClick={zmianaAtrybutuSun}  />
                <img src={moon} alt="" className={`w-[25px] cursor-pointer ${moonM ? 'block' : 'hidden'}` } onClick={zmianaAtrybutuMoon}  />
            </div>
        </div>
        <div className='flex items-center'>
            <div className='flex items-center border-b-[2px] border-b-gray-300 hover:border-b-white'>
                <img src={search} alt="search" className='w-[18px]' onClick={() => sentFun(wyszukaj)}/>
                <input type="text" className='h-5 bg-blue-600 outline-0 px-2 w-[120px] sm:w-[200px]' value={wyszukaj} onChange={(e) => setWyszukaj(e.target.value)}/>
            </div>
        </div>
        <div className='flex items-center cursor-pointer '>
            <div className='flex items-center hover:bg-blue-700 p-1'>
                <p className='text-sm pr-1'>Login</p>
                <img src= {login} alt="" className='w-[25px]'/>
            </div>
        </div>
    </nav>
  )
}

export default Nav