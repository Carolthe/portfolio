import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function ScrollToSection (){

    const { pathname } = useNavigate();

    useEffect(() => {
        const sectionId = pathname.split('/')[1] + '-section';
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, [pathname]);
    
      return null;
}