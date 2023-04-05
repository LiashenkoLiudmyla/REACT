import React, { Component } from "react";
import { DataContext } from "./Datacontext";
import HooksTask from "./HooksTask";

class Albums extends Component {
   
    render() {
       
        return( 
        <div>
            <p>TASK 2</p>            
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
        </div>
        
        )        
    }
}

export default Albums

