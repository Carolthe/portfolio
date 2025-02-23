export default function Contacto (){
    return(
        <div>
            <p>Contact-me</p>
            <p>Envie uma mensagem para o meu email atráves do formulário abaixo</p>
            <div>
               <form>
                <label>NAME</label>
                <input placeholder="Escreva o seu nome" />
                <label>NÚMERO PARA CONTACTO</label>
                <input placeholder="Escreva o seu número" />
                <label>EMAIL</label>
                <input placeholder="Escreva o seu email" />
                <label>SUA MENSAGEM</label>
                <input placeholder="Escreva sua mensagem" />
                <button className="bg-[#FEC110] text-white w-[150px]"> Enviar mensagem</button>
               </form>
                
            </div>
        </div>
    )
}