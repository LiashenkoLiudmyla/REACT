import React, { Component } from 'react';
import './App.css';


const Home = () => {                
  return <div className='nav'>Home page</div>;
};
const News = () => {                 
  return <div className='nav'>News page</div>;
};

const CallBack = () => {              
  return <div className='nav'>CallBack page</div>;
};

const Contacts = () => {             
  return <div className='nav'>Contacts page</div>;
};

const pages = {
  home: <Home/>,
  news: <News/>,
  callBack: <CallBack/>,
  contacts: <Contacts/>,
}

const links = [ 
  {id: 1, title: "home", href: "#", text: "Home page"},
  {id: 2, title: "news", href: "#", text: "News page"},
  {id: 3, title: "callBack", href: "#", text: "CallBack page"},
  {id: 4, title: "contacts", href: "#", text: "Contacts page"}
]

class App extends React.Component {
  state = {currentPage: 'home'}
  onClick = (title) => {

 this.setState({currentPage: title })  

  };

  render (){
    return (
      <nav>
        {links.map(({href,title}) => (
          <a 
            href={href} 
            onClick={() => this.onClick(title)}
            key={title}
            >
            {title}
            </a>
        )
          )}
          <div>
            {pages[this.state.currentPage]}
          </div>
      </nav>
    )
  }
}

export default App;
