import React, { Component } from 'react';

class User extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: 'Василина',
          surname: 'Костенко',
          age: 5,
          
      }
  }
render() {
  return (
    <UserCard/>,
    <UserCardText ageUs = {this.state.age}/>
      );
  }
}
function UserCardText({ageUs}){  
  return (
      <div >
        {ageUs >=18 ? 'можу тобі запропонувати алкоголь' : 'Ти ще дууууже маленька'}
      </div>
    );
  }
  function UserCard({name, surname, age}){  
    return (
        <div >
          <div>User information:</div>
          <div>Name: {name} </div>
          <div>Surname: {surname}</div>
          <div>Age: {age}</div>
        </div>
      );
    }
    export default User;


    