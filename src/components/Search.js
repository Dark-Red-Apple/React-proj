import React, { Component } from 'react'

// import './../css/App.css'


 class Search extends Component {
    state = {        
        foundItems:[]
    }
    

    // componentDidMount() {
    //     this.loadUser();
      
    // }

    loadFounds=(e)=>{
        const userName = e.target.elements.userName.value
        e.preventDefault()
        this.searchResult(userName);
    }

    searchResult = (userName) => {
        let {updateBody, users} = this.props
        const foundItes = users.filter((item)=>{
            return item.name.includes(userName) 
        })
        updateBody(foundItes)
        // this.setState({foundItems:foundItes} 
        // ,updateBody(foundItes))
        
        
    }

    render() {
        
        return (
            <div className='search'>
                {/* <div style={{width: "30%"}} >               
                    <form className='search-form' onSubmit={this.loadFounds} action=''>
                        <input name="userName" id="user-name" type="text" placeholder="Please write the item's name"/>
                        <input type="submit" value="search"/>
                    </form>
                </div> */}
            </div>
        )
    }
    
}
export default Search;