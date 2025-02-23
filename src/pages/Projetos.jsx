import Projects from '../imgs/Projects.png'
import Componete from './Componete'

export default function (){
    return(
        <div className='bg-white'>
        <div className=" grid justify-items-center text-center my-[80px] mx-[20px]">
            <p className="mb-[20px] pt-[50px] text-[30px]">Projetos</p>
            <p className="mb-[40px]">Abaixo você vera alguns projetos desenvolvidos por mim</p>
        </div>
        <div className="bg-[#41b3d0] h-[270px] w-[350px] rounded-[10px] mx-[20px] p-[30px] mb-[50px]">
            <img className='' src={Projects} />
                <p className="text-[25px] font-semibold text-white " >Loja Virtual</p>
                <p className='text-white'>Loja virtual para venda de moveis </p>
            </div>
            <div className="bg-[#eeee58] h-[270px] w-[350px] rounded-[10px] mx-[20px] p-[30px] mb-[50px]">
            <img className='' src={Projects} />
                <p className="text-[23px] font-semibold text-white " >Calculadora de Projetos</p>
                <p className='text-white'>Loja virtual para venda de moveis </p>
            </div>
            <div className="bg-[#ea70f3] h-[270px] w-[350px] rounded-[10px] mx-[20px] p-[30px] mb-[50px]">
            <img className='' src={Projects} />
                <p className="text-[25px] font-semibold text-white " >Lista de Tarefas</p>
                <p className='text-white'>Loja virtual para venda de moveis </p>
            </div>
        </div>
    )
}