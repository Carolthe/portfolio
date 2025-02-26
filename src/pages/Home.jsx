import { FaBars  } from "react-icons/fa6"
import Blod from '../imgs/Blod.png'
import Blod2 from '../imgs/Blod2.png'

export default function Home (){
    return(
        <div className='h-[100vh]'>
            <div className='flex justify-between items-center w-[100vw] p-[30px] bg-[#fbfbfb] border-b fixed sm:py-[10px] sm:px-[150px] sm:w-[100%] '>
                <p className="text-[#f5e213] text-[25px] sm:text-[30px] " > CT </p>
                <div>
                <button className="text-[#f5e213] text-[30px] sm:hidden"> <FaBars  /> </button>
                </div>
            </div>
            <div className="sm:flex sm:justify-center sm:gap-[100px] sm:pt-[110px] ">
            <div className='grid justify-items-center items-center pt-[100px] sm:pt-0 sm:h-[50px] sm:mt-[90px]'>
                <h1 className='font-bold text-[#2a2a2a] mt-[20%] flex text-center text-[40px] sm:ml-[33px] '>Caroline Tenorio</h1>
                <p className='text-[#666666] text-[19px]'>Desenvolvedora de Software</p>
                <button className='w-[270px] h-[60px] text-[19px] bg-[#73d6ef] text-white mt-[30px] mb-[20px] '>Contact-me</button>
            </div>
            <div className="h-[50%] mt-[5%] grid justify-items-center">
                <img className="w-[80%]" src={Blod} />
                <img className="relative right-[60px] bottom-[300px]" src={Blod2} />
            </div>
            </div>
        </div>
    )
}



