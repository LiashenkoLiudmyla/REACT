
import './App.css';

function App() {
  return (
    <div className="App">
      
      <li className='Li' >Home</li>
      <li className='Li'>News </li>
      <li className='Li'>CallBack </li>
      <li className='Li'>Contacts</li>
     
    </div>
  );
}

export default App;






const Home extends React.Component{
  render(){
  return [
  <div className='li'>Home page</div>, 
  <div className='li'>News</div>,
  <div className='li'>CallBack</div>, 
  <div className='li'>Contacts</div>
];
}
};



export default Home;







// function Home (props)  {
//   return (<li className='Li' >Home page</li>);
// }

// export default Home;




