import React, { Component } from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import './onecompany.css';
export class onecompany extends Component {
    render() {
        return (
            <div>
               <div className="listStyle">
                <div style={{textAlign:"left",display:"inline-block"}}>
                   <h3>{this.props.companyName}</h3> 
                </div>
                
                <p style={{margin:"10px 0px"}}>{this.props.about} </p>
                <br></br>
                <h3 id="sameStyle">Company Username</h3>: {this.props.companyUsername}<br></br><br></br>
                <h3 id="sameStyle">email</h3>:{this.props.email}<br></br><br></br>
                <h3 id="sameStyle">Year Founded</h3>:{this.props.yearFounded}<br></br><br></br>
                <div style={{textAlign:"right"}}>
                <DeleteOutlinedIcon  className="deleteButton"/>
                </div>
               </div>
            </div>
        )
    }
}

export default onecompany
