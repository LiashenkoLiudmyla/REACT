import React, { useEffect , useState } from "react";


const HooksTask = () => {

    const [state, setState] = useState({ albums: [] });
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((json) => setState({albums: json}))
            
    },[]);

         const {albums} = state;

        return(
                <div>
                    {albums.map
                        (albums =>
                            <div key = {albums.id}>{albums.id} - {albums.userId} - {albums.title}</div> 
                        )
                    }
                </div>
            );       
}


export default HooksTask