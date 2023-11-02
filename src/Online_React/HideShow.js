import React from 'react'
class HideShowPass extends React.Component{
    constructor(){
        super();
        this.state = {
            show : true
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.show ?
                    <h1>Hide </h1>
                    : <h1>Show</h1>
                }
               <button onClick={() => {this.setState({show:!this.state.show})}}>Click Me</button>

            </div>
        )
    }
}

export default HideShowPass