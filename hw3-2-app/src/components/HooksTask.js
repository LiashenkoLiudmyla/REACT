import React, { useEffect , useState, useContext } from "react";
import {DataContext} from './Datacontext'


const HooksTask = () => {

    const [state, setState] = useState({ albums: [] });
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((json) => setState({albums: json}))
            
    },[]);
     
    const value = useContext(DataContext)

        return(
                <div>
                    <p>useContext</p>
                    {value.map(albums =>
                            <div key = {albums.id}>{albums.id} - {albums.userId} - {albums.title}</div> 
                        )
                    }
                </div>
            );       
}


export default HooksTask