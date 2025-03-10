import { FaBars, FaX  } from "react-icons/fa6"
import { useState } from "react"
import Blod from '../imgs/Blod.png'

export default function Home ({ scrollToSection }){

    const [menuAberto, setMenuAberto] = useState(false)    

    function menuOpen (){
        setMenuAberto(!menuAberto)
    }


    return(
        <div className='h-[100vh]'>
            <div className='flex justify-between items-center w-[100vw] p-[30px] bg-[#fbfbfb] border-b fixed sm:py-[10px] sm:px-[150px] sm:w-[100%] '>
                <p className="text-[#f5e213] text-[25px] sm:text-[30px] " > CT </p>
                <div>
                    {!menuAberto ?
                <button onClick={menuOpen} className="text-[#f5e213] text-[30px] sm:hidden  "> <FaBars  /> </button>
                : <button onClick={menuOpen} className="text-[#f5e213] text-[30px] sm:hidden "  > <FaX /> </button>  }
                <div className={`fixed top-0 left-0 h-[400px] w-[270px] rounded-e-[30px] bg-white text-[#8d8d8c] text-[20px] text-center pt-[35px] transition-transform duration-300 ${
          menuAberto ? 'transform translate-x-0' : 'transform -translate-x-full  '
        }`}>  
            <p>Home</p>
            <p>Ferramentas</p>
            <p>Projetos</p>
            <p>Contactos</p>
            <p>Tradução Eng</p>
            <p>Modo Noite</p>
                </div>
            <div className="hidden sm:block sm:flex">
            <button onClick={() => scrollToSection('section1')} className="sm:text-yellow-400 ">Home</button>
            <p className="sm:text-yellow-400 ">Ferramentas</p>
            <p className="sm:text-yellow-400 ">Projetos</p>
            <p className="sm:text-yellow-400 ">Contactos</p>
            <p className="sm:text-yellow-400 ">Tradução Eng</p>
            <p className="sm:text-yellow-400 ">Modo Noite</p>
            </div>
                </div>
            </div>
            <div className="sm:flex sm:justify-center sm:gap-[120px] sm:pt-[0px] sm:items-center sm:mx-[50px] ">
            <div className='grid justify-items-center items-center pt-[100px] sm:pt-[0px] sm:flex-col sm:justify-items-start '>
                <h1 className='font-bold text-[#2a2a2a] mt-[20%] flex text-center text-[40px] sm:mt-[0px]'>Caroline Tenorio</h1>
                <p className='text-[#666666] text-[19px] '>Desenvolvedora de Software</p>
                <button className='w-[270px] h-[60px] text-[19px] bg-[#73d6ef] text-white mt-[30px] mb-[20px]  '>Contact-me</button>
            </div>
            <div className="flex justify-center sm:h-[100vh] sm:items-center ">
            <div className=" mt-[7%] sm:mt-[0]">
            <img className="w-[350px] sm:w-[455px]" src={Blod} />
            </div>
            </div>
            </div>
        </div>
    )
}



