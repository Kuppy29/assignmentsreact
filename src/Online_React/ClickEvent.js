import React from 'react'
// class component se aise likhte hai
// class ClickEvent extends React.Component{
//     testFun(){
//         alert("testFun")
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Profile Click Event</h1>
//                 <button onClick={() => {this.testFun()}}>Click me</button>
//                 {/* <button onClick={this.testFun.bind()}>Click me</button>     => aise b likh sakte hai */}
//             </div>
//         )
//     }
// }

// function component se aise likhe
function ClickEvent(){
    
function testFun(){
    alert("testFun")
}

// aise b likh sakte hai

// const testFun = () => {  
//     alert("testFun")
// }
return(
    <div>
        <h1>Profile Click Event</h1>
        <button onClick={testFun}>Click me</button>
    </div>
)
}

export default ClickEvent
