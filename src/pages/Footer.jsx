import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaGitlab } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
 
export default function (){
    return(
        <div>
        <div className="flex w-[100vw] sm:w-[100%] "  id="footer">
            <p className="bg-[#41b3d0] text-white w-[25%] h-[150px] flex items-center justify-center gap-[2px] font-semibold">GitHub <IoLogoGithub /> </p>
            <p className="bg-[#f5e213] text-white w-[25%] h-[150px] flex items-center justify-center gap-[2px] font-semibold">Linkedin <IoLogoLinkedin /> </p>
            <p className="bg-[#f084f8] text-white w-[25%] h-[150px] flex items-center justify-center gap-[2px] font-semibold">GitLab <FaGitlab /> </p>
            <p className="bg-[#6fee9e] text-white w-[25%] h-[150px] flex items-center justify-center gap-[2px] font-semibold">Email <MdEmail /> </p>
        </div>
            <div className="flex justify-center py-[100px] h-[100px] w-[100vw] bg-[#73d6ef] sm:w-[100%]">
                <p className="text-white">Copyright © 2025 Caroline Tenorio </p>
            </div>
        </div>
    )
}