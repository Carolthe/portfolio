import { FaBars, FaX  } from "react-icons/fa6"

import Blod2 from '../imgs/Blod2.png'
import { useState } from "react"

export default function Home (){

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
                </div>
            </div>
            <div className="sm:flex sm:justify-center sm:gap-[120px] sm:pt-[110px] ">
            <div className='grid justify-items-center items-center pt-[100px] sm:pt-0 sm:h-[50px] sm:mt-[90px]'>
                <h1 className='font-bold text-[#2a2a2a] mt-[20%] flex text-center text-[40px] sm:ml-[33px] '>Caroline Tenorio</h1>
                <p className='text-[#666666] text-[19px]'>Desenvolvedora de Software</p>
                <button className='w-[270px] h-[60px] text-[19px] bg-[#73d6ef] text-white mt-[30px] mb-[20px] '>Contact-me</button>
            </div>
            <div className=" mt-[7%] ">
                <div id="img-home"> <img className="" src={Blod2} />  </div>
                
            </div>
            </div>
        </div>
    )
}



