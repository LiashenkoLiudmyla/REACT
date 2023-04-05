import { render } from "@testing-library/react";
import React, { Component } from "react";

class Albums extends Component {
    state = { albums: [] };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((json) => console.log(json))
    }

    render() {
        return <div></div>;
    }
}

export default Albums