import React, { Component } from 'react';
import { connect } from 'react-redux';


class ClientDashboard extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        <div>
            <div> My Info </div>
            
        </div>
    }
    
}

let ConnectedClienmtDashboard = connect()(ClientDashboard);
export default ConnectedClientDashboard