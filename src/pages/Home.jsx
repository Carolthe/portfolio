import { FaBars, FaX, FaGlobe } from "react-icons/fa6"
import { MdOutlineDarkMode } from "react-icons/md"
import { useState } from "react"
import { Link } from "react-scroll"
import Blod from "../imgs/Blod.png"

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false)

  function menuOpen() {
    setMenuAberto(!menuAberto)
  }

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Ferramentas", to: "ferramentas" },
    { name: "Projetos", to: "projetos" },
    { name: "Contactos", to: "contacto" },
  ]

  return (
    <div className="h-[100vh]">
      <div className="flex justify-between items-center w-[100vw] p-[30px] bg-[#fbfbfb] border-b fixed sm:py-[10px] sm:px-[150px] sm:w-[100%] ">
        <p className="text-[#f5e213] text-[25px] sm:text-[30px] "> CT </p>
        <div>
          {!menuAberto ? (
            <button onClick={menuOpen} className="text-[#f5e213] text-[30px] sm:hidden  ">
              {" "}
              <FaBars />{" "}
            </button>
          ) : (
            <button onClick={menuOpen} className="text-[#f5e213] text-[30px] sm:hidden ">
              {" "}
              <FaX />{" "}
            </button>
          )}
          <div
            className={`fixed top-0 left-0 h-[400px] w-[270px] rounded-e-[30px] bg-white text-[#8d8d8c] text-[20px] text-center pt-[35px] transition-transform duration-300 ${
              menuAberto ? "transform translate-x-0" : "transform -translate-x-full  "
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={menuOpen}
                className="block py-2 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <p>Tradução Eng</p>
            <p>Modo Noite</p>
          </div>
          <div className="hidden sm:flex gap-[30px]">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="sm:text-[#f5e213] cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <p className="text-[#73d6ef] text-[20px]">
              <FaGlobe />
            </p>
            <p className="text-[#73d6ef] text-[20px]">
              <MdOutlineDarkMode />
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:justify-center sm:gap-[120px] sm:pt-[0px] sm:items-center sm:mx-[50px] ">
        <div className="grid justify-items-center items-center pt-[100px] sm:pt-[0px] sm:flex-col sm:justify-items-start ">
          <h1 className="font-bold text-[#2a2a2a] mt-[20%] flex text-center text-[40px] sm:mt-[0px]">
            Caroline Tenorio
          </h1>
          <p className="text-[#666666] text-[19px] ">Desenvolvedora de Software</p>
          <Link
            to="contacto"
            smooth={true}
            duration={500}
            className="w-[270px] h-[60px] text-[19px] bg-[#73d6ef] text-white mt-[30px] mb-[20px] flex items-center justify-center cursor-pointer"
          >
            Contact-me
          </Link>
        </div>
        <div className="flex justify-center sm:h-[100vh] sm:items-center ">
          <div className=" mt-[7%] sm:mt-[0]">
            <img className="w-[350px] sm:w-[455px]" src={Blod || "/placeholder.svg"} alt="Blod" />
          </div>
        </div>
      </div>
    </div>
  )
}

