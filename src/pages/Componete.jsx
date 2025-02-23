import Projects from '../imgs/Projects.png'


export default function Componente (){
    return(
         <div className=" h-[270px] w-[350px] rounded-[10px] mx-[20px] p-[30px] mb-[50px]">
                    <img className='' src={Projects} />
                        <p className="text-[25px] font-semibold text-white " >E-commerce</p>
                        <p className='text-white'>Loja virtual para venda de moveis </p>
                    </div>
    )
}