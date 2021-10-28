import React, {useState, useEffect} from "react";
import Student2021 from "./Student2021.js";
import Student2020 from "./Student2020.js";
import Student2019 from "./Student2019.js";
import './student.css';



// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";
import { isImportOrExportSpecifier } from "typescript";

export default function Ecell(){
    
const [isOpen,setIsOpen] = useState(<Student2021/>)

    return(
      
        <>
            <DangerNavbar/>
            
            <div className="wrapper">
      
            <div className="wrapper">
              <div className="main">
                <div className="section section-dark text-center landing-section">
                <div className = "select_year">
                  <button className= "syButton" value = '2020' onClick= {()=> setIsOpen(<Student2021/>)}>2021</button>
                  <button className= "syButton" value = '2019' onClick= {()=> setIsOpen(<Student2020/>)}>2020</button>
                  <button className= "syButton" value = '2018' onClick= {()=> setIsOpen(<Student2019/>)}>2019</button>
                </div>  
                      {isOpen}
                </div>
          </div>
          </div>
        </div>
      
            <FooterAboutUs/>
        </>
      );
        
    
        
}

