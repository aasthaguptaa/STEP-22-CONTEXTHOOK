import React, {useContext } from 'react';
import  FamilyContext from "../context/family.context";
import GeneralContext from '../context/gen.context';

function CousinComp(){
    const msg = useContext(FamilyContext);
    const ver = useContext(GeneralContext);
        return  <div style={ {border : "2px solid red", width: "1050px", margin: "10px", padding: "10px", display: "table"}}>
                    <h1>Hello from Cousin Component</h1>
                    <hr/>
                    <FamilyContext.Consumer>{ (msg)=> {
                        return <GeneralContext.Consumer> 
                            { (ver)=> <h2>{msg} | {ver}</h2>} 
                            </GeneralContext.Consumer>
                    }}</FamilyContext.Consumer>
                        </div>
    }

export default CousinComp;