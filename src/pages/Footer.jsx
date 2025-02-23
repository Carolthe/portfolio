import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaGitlab } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
 
export default function (){
    return(
        <div>
        <div className="flex w-[100vw] ">
            <p className="bg-[#41b3d0] text-white w-[100px] h-[150px] flex items-center justify-center gap-[2px] font-semibold">GitHub <IoLogoGithub /> </p>
            <p className="bg-[#fde153] text-white w-[100px] h-[150px] flex items-center justify-center gap-[2px] font-semibold">Linkedin <IoLogoLinkedin /> </p>
            <p className="bg-[#f169f1] text-white w-[100px] h-[150px] flex items-center justify-center gap-[2px] font-semibold">GitLab <FaGitlab /> </p>
            <p className="bg-[#6fee9e] text-white w-[100px] h-[150px] flex items-center justify-center gap-[2px] font-semibold">Email <MdEmail /> </p>
        </div>
            <div className="flex justify-center py-[100px] h-[100px] bg-[#73d6ef]">
                <p className="text-white">Copyright © 2025 Caroline Tenorio </p>
            </div>
        </div>
    )
}