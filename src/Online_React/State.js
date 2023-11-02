import React from 'react'

class State extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "Peter",
            count : 0,
            email : "peter@test.com"
        }
    }
    updateState(){
        this.setState({
            name : "Burce",
            count : this.state.count +1

        })
    }
    render(){
        return(
            <div>
                <h1>Hello State Component</h1>
                <h1>Hello {this.state.name}</h1>
                <h1>Email : {this.state.email}</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{this.updateState()}}>Update State</button>
           </div>
        )
    }
}

export default State