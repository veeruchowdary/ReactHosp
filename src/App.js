import React,{Component} from 'react';

import './App.css';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
class App extends Component {  
  render(){
    return (
      <div>
         <Nav/>

         <Footer/>
      </div>
    );
  }
}

export default App;
