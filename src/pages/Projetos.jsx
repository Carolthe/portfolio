import CardProjetos from '../components/CardProjetos'

export default function (){
    return(
        <div className=' grid justify-items-center' id='projeto' >
        <div className=" grid justify-items-center text-center mb-[25px] mx-[20px]">
            <p className="mb-[20px] pt-[50px] text-[30px]">Projetos</p>
            <p className="mb-[40px]">Abaixo você vera alguns projetos desenvolvidos por mim</p>
        </div>
        <div    className=' sm:flex '>
                <CardProjetos 
            className="bg-[#41b3d0] h-[270px] w-[85%] rounded-[10px] mx-[20px] p-[30px] mb-[50px] sm:w-[30%]"
            titulo="Todo List"
            texto="Lista de Tarefas responsiva" />
                <CardProjetos 
            className="bg-[#eeee58] h-[270px] w-[85%] rounded-[10px] mx-[20px] p-[30px] mb-[50px] sm:w-[30%]"
            titulo="Todo List"
            texto="Lista de Tarefas responsiva" />
               <CardProjetos 
            className="bg-[#ea70f3] h-[270px] w-[85%] rounded-[10px] mx-[20px] p-[30px] mb-[50px] sm:w-[30%]"
            titulo="Todo List"
            texto="Lista de Tarefas responsiva" />
            </div>
        </div>
    )
}