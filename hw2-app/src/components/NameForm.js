import React, { Component } from 'react';

class NameForm extends Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {        
      this.setState({value: event.target.value});
    }  
    handleSubmit(event) {
      event.preventDefault();
        let nameVal = this.state.value
        if (nameVal.length >= 6){
            alert('Вітаємо!');
        }else{
            alert('Не вірні дані!'); 
        }      
    }  
    render() {

      return (
        <form onSubmit={this.handleSubmit}>
          <br/>
          <label>
            Ім'я:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button>
            Надіслати
          </button>
        </form>
      );
    }
  }
  
export default NameForm