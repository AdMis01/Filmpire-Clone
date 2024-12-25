import sun from '../assets/sunIcon.svg'
import moon from '../assets/moonIcon.svg'
import login from '../assets/loginIcon.svg'
import search from '../assets/searchIcon.svg'
import hamburger from '../assets/hamburger.svg'

const Nav = () => {
  return (
    <nav className='fixed top-0 w-[100%] md:pl-[216px] h-[10vh] flex justify-between bg-blue-600 text-white px-4'>
        <div className='flex'>
            <div className='flex items-center'>
                <img src={hamburger} alt="" className=' md:hidden w-[25px]'/>
                <img src={sun} alt="" className='w-[25px]' />
            </div>
        </div>
        <div className='flex items-center'>
            <div className='flex border-b-[2px] border-b-gray-300 hover:border-b-white'>
                <img src={search} alt="" className='w-[18px]'/>
                <input type="text" className='h-6 bg-blue-600 outline-0 px-2'/>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='flex items-center'>
                <p className='text-sm pr-1'>Login</p>
                <img src= {login} alt="" className='w-[25px]'/>
            </div>
        </div>
    </nav>
  )
}

export default Nav