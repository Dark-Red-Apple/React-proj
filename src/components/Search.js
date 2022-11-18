import React, { Component } from 'react'

// import './../css/App.css'


 class Search extends Component {
    state = {        
        foundItems:[]
    }
    
    loadFounds=(e)=>{
 
    }
    searchResult = () => {
       
    }

    render() {
        
        return (
            <div className='search'>
                <div style={{width: "30%"}} >               
                    <form className='search-form' onSubmit={this.loadFounds} action=''>
                        <input name="" id="" type="text" placeholder="Please write the item's name"/>
                        <a><span><img src="https://i.ibb.co/5FyjZ6N/search-12-256.png" /></span></a>
                    </form>
                </div>
            </div>
        )
    }
    
}
export default Search;