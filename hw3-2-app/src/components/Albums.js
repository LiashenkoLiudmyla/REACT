import React, { Component } from "react";
import { DataContext } from "./Datacontext";
import HooksTask from "./HooksTask";

class Albums extends Component {
   
    render() {
       
        return( 
        <div>
            <p>TASK 1</p>            
            <div>
                <DataContext.Consumer>
                    {
                        
                        context => {
                            return(
                                context.map(albums =>
                            <div key = {albums.id}>{albums.id} - {albums.userId} - {albums.title}</div> )
                            )
                        }
                    }
                </DataContext.Consumer>
                
            </div> 
            <hr />
            <p>TASK 2-HOOKS-CONTEXT</p> 
            <HooksTask/>
                      
        </div>
        
        )        
    }
}

export default Albums

