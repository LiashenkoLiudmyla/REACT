import React, { Component } from "react";


export const DataContext = React.createContext();

class DataProvider extends Component {
    state = { albums: [] };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((json) => this.setState({albums: json}))
    }
    
    render() {
        const { albums } = this.state;      
        
        return (
                    <DataContext.Provider value={ albums }>
                        {this.props.children}
                    </DataContext.Provider>
                   
                );
        
    }
}

export default DataProvider

