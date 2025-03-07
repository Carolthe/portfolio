import Projects from '../imgs/Projects.png'


export default function CardProjetos (props){
    return(
         <div className={props.className}>
                  <img src={Projects} />
                      <p className="text-[25px] font-semibold text-white" >{props.titulo}</p>
                      <p className='text-white' >{props.texto} </p>
                  </div>
    )
}