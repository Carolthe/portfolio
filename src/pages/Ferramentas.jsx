import Html from '../imgs/Html.png'
import Css from '../imgs/Css.png'
import Js from '../imgs/Js.png'
import React from '../imgs/React.png'
import Tailwindcss from '../imgs/Tailwindcss.png'
import { IoLogoGithub } from "react-icons/io";
import NodeJs from '../imgs/NodeJs.png'

export default function Ferramentas (){
    return(
        <div className=' bg-white h-[60vh] pt-[70px] mx-[20px] text-center flex-wrap ' id="ferramentas">
        <p className="text-[30px]">Ferramentas</p>
        <p className="text-[#75758b] pt-[20px]">Essas são as principais ferramentas utilizadas por mim para desenvolvimento web e mobile</p>
        <div className="flex flex-wrap justify-center gap-[25px] mt-[50px]">
        <img src={Html} />
        <img src={Css} />
        <img src={Js} />
        <img src={React} />
        <img className="w-[70px]" src={Tailwindcss} />
        <IoLogoGithub className='text-[65px]' />
        <img className="w-[60px] h-[60px]" src={NodeJs} />
    </div>
    </div>
    )
}