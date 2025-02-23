import Html from '../imgs/Html.png'
import Css from '../imgs/Css.png'
import Js from '../imgs/Js.png'
import React from '../imgs/React.png'
import Tailwindcss from '../imgs/Tailwindcss.png'

export default function Ferramentas (){
    return(
        <div className=' bg-white h-[40vh] text-center flex-wrap'>
        <p className="text-[#75758b] pt-[40px]">Minhas Principais Ferramentas utilizadas para desenvolvimento web e mobile</p>
        <div className="flex justify-center gap-[25px] mt-[30px]">
        <img src={Html} />
        <img src={Css} />
        <img src={Js} />
        <img src={React} />
        <img className="w-[40px]" src={Tailwindcss} />
    </div>
    </div>
    )
}