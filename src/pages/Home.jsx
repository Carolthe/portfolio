import { FaBars  } from "react-icons/fa6"
import Logos from '../imgs/Logos.png'



export default function Home (){
    return(
        <div className='h-[100vh]'>
            <div className='flex justify-between items-center w-[100vw] h-[90px] p-[20px] bg-[#fbfbfb] border-b fixed'>
                <img className="w-[35px]" src={Logos} /> 
                <div>
                <button className="text-[#FEC110] text-[30px]"> <FaBars  /> </button>
                </div>
            </div>
            <div className='h-[400px] grid justify-items-center items-center '>
                <h1 className='font-bold text-black mt-[200px] flex text-center  text-[35px] '>Caroline Tenorio</h1>
                <p className='text-[#666666] text-[19px]'>Desenvolvedora de Software</p>
                <button className='w-[270px] h-[60px] text-[19px] bg-[#FEC110] text-white mt-[50px] mb-[10px]' >Contact-me</button>
            </div>
            <div className="h-[50%]">
                
            </div>
        </div>
        
    )
}



