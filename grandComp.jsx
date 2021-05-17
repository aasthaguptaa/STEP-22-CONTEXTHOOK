import React, { useState } from "react";
import FamilyContext from "../context/family.context";
import ParentComp from './parentComp';
import CousinComp from './cousin.component';
import GeneralContext from '../context/gen.context';

function GrandComp(){
    let [state, setState] = useState({message : 'grand parent message', version : 1001})
    
    let changeMessage = ()=> {
        setState({
            ...state,
            message : "Updated Message on "+new Date()
        })
    }
    let changeVersion = ()=> {
        setState({
            ...state,
            version : Math.round(Math.random() * 1000)
        })
    }
        return  <div style={ {border : "2px solid red", width: "1100px", margin: "10px", padding: "10px", display: "table"}}>
                        <h1>Hello from Grand Component</h1>
                        <button onClick={changeMessage}>Change Message</button>
                        <button onClick={changeVersion}>Change Version</button>
                        <hr/>
                        <FamilyContext.Provider value={state.message}>
                        <GeneralContext.Provider value ={ state.version }>
                        <ParentComp/>
                        <hr/>
                        <CousinComp/>
                        </GeneralContext.Provider>
                        </FamilyContext.Provider>
                    </div>
              
    }

export default GrandComp;