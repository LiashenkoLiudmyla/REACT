import React, { Component } from 'react';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            error: null,            
        } 
    };
    myInputName = (e) => {
        this.setState({name: e.target.value})  
    };
    myInputSurName = (e) => {
        this.setState({surname: e.target.value})  
    };
    onSubmit = (event) => {
        event.preventDefault();
        const { name, surname, error } = this.state;

            if (name.length === 0){ 
            alert('Error: введіть Імя')
            }if (surname.length === 0){ 
                    alert('Error: введіть прізвище')
            }if(name.length < 3 && surname.length < 3 ){
                    alert('з твоїми даними якийсь курйоз в даних мінімум по 4 чимволи ;(') 
            }else{
                this.setState({
                    error: "",
                    name: "",
                    surname: ""
                  });
                alert(`Welcome ${name} ${surname}`)
            }   
    };
    render() {
        const {name, surname} = this.state;

        return (
            <div>
                <br/>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input 
                        onChange={this.myInputName} 
                        placeholder='Name'
                        value={name}/>
                    </div>
                    <div>
                        <input 
                        onChange={this.myInputSurName} 
                        placeholder='Surname'
                        value={surname}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <p>{this.state.name}</p>
                <p>{this.state.surname}</p>
            </div>
        );
    };
}

export default Form;