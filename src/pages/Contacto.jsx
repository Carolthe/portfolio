export default function Contacto (){
    return(
        <div className="grid justify-items-center bg-[#f3f3f37b] px-[30px] mb-[100px] pt-[60px]">
            <p className="text-[30px] mb-[15px]" >Contact-me</p>
            <p className="text-center">Envie uma mensagem para o meu email atráves do formulário abaixo</p>
            <div>
               <form className="mt-[40px] ">
                <label className="">NOME</label>
                <input className="w-[100%] mt-[10px] mb-[15px] h-[45px] p-[15px] " placeholder="Escreva o seu nome" />
                <label>NÚMERO PARA CONTACTO</label>
                <input className="w-[100%] h-[45px] mt-[10px] mb-[15px] p-[15px]" placeholder="Escreva o seu número" />
                <label>EMAIL</label>
                <input className="w-[100%] h-[45px]  mt-[10px] mb-[15px] p-[15px]" placeholder="Escreva o seu email" />
                <label>SUA MENSAGEM</label>
                <input className="w-[100%] h-[200px]  mt-[10px] mb-[15px] p-[15px] pb-[140px]" placeholder="Escreva sua mensagem" />
                <button className="bg-[#f5e213] my-[40px] text-white h-[50px] w-[150px]"> Enviar mensagem</button>
               </form>
            </div>
        </div>
    )
}