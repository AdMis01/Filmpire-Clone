import sun from '../assets/sunIcon.svg'
import moon from '../assets/moonIcon.svg'
import login from '../assets/loginIcon.svg'
import search from '../assets/searchIcon.svg'
import hamburger from '../assets/hamburger.svg'
import { useState } from 'react'


const Nav = ({sentFun}) => {

    document.addEventListener("click",(e)=>{

        if (e.target && e.target.classList && e.target.classList.contains("bgGray")) {
            const menu = document.getElementById("menuTo");
            const tloDoMenu = document.getElementById("bgGray");
            menu.classList.remove("showMenu");
            tloDoMenu.classList.remove("showBG");
        }
      })
    const [wyszukaj, setWyszukaj] = useState("");
    const [darkMode,setDarkMode] = useState(true);

    const zmianaDarkModu = () => {
        const elementMain = document.getElementById("mainElementDark");
        setDarkMode(!darkMode);
        if(darkMode){
            elementMain.classList.add("dark");
        }else{
            elementMain.classList.remove("dark");
        }
    }

    const menuSlid = () => {
        const menu = document.getElementById("menuTo");
        const tloDoMenu = document.getElementById("bgGray");
        menu.classList.toggle("showMenu");
        tloDoMenu.classList.toggle("showBG");
    }

    return (
    <nav className='fixed top-0 left-0 right-0 md:pl-[216px] h-[10vh] flex justify-between bg-blue-600 dark:bg-zinc-800 text-white px-4'>
        <div className='flex'>
            <div className='flex items-center'>
                <img src={hamburger} alt="" className='cursor-pointer md:hidden w-[25px]' onClick={menuSlid}/>
                {darkMode ? (<img src={sun} alt="" className={`w-[25px] cursor-pointer` } onClick={zmianaDarkModu}/>) : 
                (<img src={moon} alt="" className={`w-[25px] cursor-pointer` } onClick={zmianaDarkModu}/>)
                }

            </div>
        </div>
        <div className='flex items-center'>
            <div className='flex items-center border-b-[2px] border-b-gray-300 hover:border-b-white'>
                <img src={search} alt="search" className='w-[18px]' onClick={() => sentFun(wyszukaj)}/>
                <input type="text" className='h-5 bg-blue-600 dark:bg-zinc-800 outline-0 px-2 w-[120px] sm:w-[200px]' value={wyszukaj} onChange={(e) => setWyszukaj(e.target.value)}/>
            </div>
        </div>
        <div className='flex items-center cursor-pointer '>
            <div className='flex items-center hover:bg-blue-700 dark:hover:bg-zinc-900 p-1'>
                <p className='text-sm pr-1'>Login</p>
                <img src= {login} alt="" className='w-[25px]'/>
            </div>
        </div>
    </nav>
  )
}

export default Nav