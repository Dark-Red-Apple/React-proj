import React, { Component } from 'react'
import Header from './Header'
import  Footer from './Footer'
import Body from './Body.js'
import './../css/App.css'


 class App extends Component {

    render() {
        
        return (
            <div className='wrapper'>
                <Header />
                <Body />  
         
         
                {/* <Footer /> */}
            </div>
            
        )
    }
    
}
export default App;
