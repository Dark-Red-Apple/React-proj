import React, { Component } from 'react'
import Search from "./Search.js"

export default class Header extends Component {
    render() {
        return (
            <div className="header" style={{textAlign: "center"}}>
                <div style={{width: "30%", display: "flex", alignItems: "end", justifyContent: "center", cursor:"pointer"}}>
                    <img style={{height: "2em", width: "2em", marginTop: "3px"}} src="https://i.ibb.co/Ms0LjVr/icons8-menu-squared-50.png" />
                    <img style={{height: "2em", width: "2em"}} src="https://i.ibb.co/CbgcL6q/icons8-name-50.png" />
                </div>
                <div style={{width: "60%"}}><a href={`/`}><svg xmlns="http://www.w3.org/2000/svg" width="236" height="57" viewBox="0 0 236 57">
  <text id="EXP_CON" data-name="EXP|CON" transform="translate(0 46)" fill="#fff" font-size="48" font-family="HelveticaNeue, Helvetica Neue" letter-spacing="0.1em"><tspan x="0" y="0">EXP|CON</tspan></text>
</svg></a></div>
                <div style={{width: "30%", display: "flex", alignItems: "center", justifyContent: "center"}} >               
                  <Search updateBody={this.props.updateBody} users={this.props.users}/>
                </div>
            </div>
        )
    }
}
