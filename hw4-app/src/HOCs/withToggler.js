import React, {Component, useState} from "react";

const withToggler = (WrappedComponent) => {

    const [toggled, setToggled] = useState(false)  
        const changeToggle = () => {
            setToggled(prev => !prev)
        }

    return class extends Component {        
        constructor(props){
            super(props);
            this.state = {users: []};
            
        }
            componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => this.setState({ users: json[0] }));        
        }
        render() {
            return <WrappedComponent {...this.props} {...this.state} toggled={toggled} changeToggle={changeToggle}/>
            
        }
    };
};

export default withToggler


