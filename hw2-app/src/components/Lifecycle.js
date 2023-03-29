import React, { Component } from 'react';

   class LifeCycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {title: 'HW2'};
        
        
      }
    componentDidMount() { 
      document.title = this.state.title 
    }
    componentDidUpdate() { 
       
        
    }
    componentWillUnmount() {
        
    }
    
render() {
    
  return(  
    <div>
        <button onClick = {() => this.setState({ title: 'HW3' })}>Змінити title
        </button>
    </div>
    
  );
}

}

export default LifeCycle