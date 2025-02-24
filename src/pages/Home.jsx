import { FaBars  } from "react-icons/fa6"
import Blod from '../imgs/Blod.png'
import Blod2 from '../imgs/Blod2.png'


export default function Home (){
    return(
        <div className='h-[100vh]'>
            <div className='flex justify-between items-center w-[100vw] h-[90px] p-[30px] bg-[#fbfbfb] border-b fixed'>
                <p className="text-[#f5e213] " > CT </p>
                <div>
                <button className="text-[#f5e213] text-[30px]"> <FaBars  /> </button>
                </div>
            </div>
            <div className='h-[400px] grid justify-items-center items-center '>
                <h1 className='font-bold text-[#2a2a2a] mt-[20%] flex text-center  text-[40px] '>Caroline Tenorio</h1>
                <p className='text-[#666666] text-[19px]'>Desenvolvedora de Software</p>
                <button className='w-[270px] h-[60px] text-[19px] bg-[#73d6ef] text-white mt-[30px] mb-[20px]' >Contact-me</button>
            </div>
            <div className="h-[50%] mt-[5%] grid justify-items-center">
                <img className="w-[80%]" src={Blod} />
                <img className="relative right-[60px] bottom-[300px]" src={Blod2} />
            </div>
        </div>
        
    )
}



