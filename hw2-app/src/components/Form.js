import React, { Component } from 'react';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            error: false,
            
        }
    }

myInputName = (e) => {
    this.setState({name: e.target.value})  
}

myInputSurName = (e) => {
    this.setState({surname: e.target.value})  
}

render() {
    const {name, surname} = this.state;
    return (
        <div>
            <form>
                <input 
                onChange={this.myInputName} 
                placeholder='Name'
                value={name} />
                {surname.length >= 4  ? 
                '' : 'Введіть будь ласка ваші дані '}
            </form>

            <form>
                <input 
                onChange={this.myInputSurName} 
                placeholder='Surname'
                value={surname}/>
                {surname.length >= 4  ? 
                alert('Вітаємо') : 'Введіть будь ласка ваші дані '}
            </form>

            
            <p>{this.state.name}</p>
            <p>{this.state.surname}</p>
        </div>
        );
    }
}
export default Form;