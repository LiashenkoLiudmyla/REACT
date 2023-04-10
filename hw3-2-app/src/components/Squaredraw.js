import React, { Component } from "react";


class SquareDraw extends Component{

    squareDrawRef = React.createRef();
       
    componentDidMount(){

        setTimeout(() => {
            this.squareDrawRef.current.style=("transform: translateX(300px)") 
        }, 2000) 
    }
    
    render() {
        
        return (
            <>
                <div 
                    ref={this.squareDrawRef} 
                    className={"squaredraw"}                     
                />
                
            </>
        );     
    }     
}

export default SquareDraw