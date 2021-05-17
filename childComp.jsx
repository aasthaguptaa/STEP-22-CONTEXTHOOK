import React from 'react';
import { useContext } from "react";
import  FamilyContext from "../context/family.context";

function ChildComp(){
    const value = useContext( FamilyContext);
        return  <div style={ {border : "2px solid red", width: "1000px", margin: "10px", padding: "10px", display: "table"}}>
                    <h1>Hello from Child Component</h1>
                    <hr/>
                    <FamilyContext.Consumer> 
                        { (value)=> <h2>{value}</h2>} 
                    </FamilyContext.Consumer>
                </div>
    }

export default ChildComp;