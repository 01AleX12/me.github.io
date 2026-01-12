import github from "../../src/assets/perfil/github-blanco.svg";
import linkedin from "../../src/assets/perfil/linkedin-blanco.svg";

function Footer() {
   return (
      <div className="flex items-center justify-evenly gap-2 px-5 py-3 text-white text-sm">
         <span className="">© 2026 AAGDEV. All rights reserved.</span>
         <div className="text-white text-sm flex gap-4">
            <a href="https://github.com/01AleX12">
               <img src={github} alt="logo de github" className="w-10"/>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-a-94951635a/">
               <img src={linkedin} alt="logo de linkedin" className="w-10"/>
            </a>
         </div>
      </div>
   );
}

export default Footer;