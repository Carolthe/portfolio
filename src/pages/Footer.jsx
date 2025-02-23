import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaGitlab } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
 
export default function (){
    return(
        <div className="flex  w-[100vw] ">
            <p className="bg-[#444480] w-[100px] h-[150px] flex items-center justify-center gap-[2px] font-semibold">GitHub <IoLogoGithub /> </p>
            <p className="bg-[#8B5EBC] w-[100px] h-[150px] flex items-center justify-center gap-[2px] font-semibold">Linkedin <IoLogoLinkedin /> </p>
            <p className="bg-[#964F9F] w-[100px] h-[150px] flex items-center justify-center gap-[2px] font-semibold">GitLab <FaGitlab /> </p>
            <p className="bg-[#AE5151]  w-[100px] h-[150px] flex items-center justify-center gap-[2px] font-semibold">Email <MdEmail /> </p>
        </div>
    )
}