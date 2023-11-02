import React from 'react'

const Profile = (props) => {
  return (
    <div>
        <h1>Profile Components (Props Method)</h1> 
         {/* <h1>{props.text}</h1>     yaha props likhe to profile function me parameter me b  props dalna jaruri hai */}
        <h1>{props.text.name}</h1>     {/*  =>    ye object vala hai */}

        <h1>{props.data}</h1>


    {/* class component me props kaise use karte hai */}
     
    {/* //  class Profile extends React.Component { */}
    {/* //     render(){
            return(
                <div>
                <h1>{this.props.data}</h1>
                <h1>{this.props.text.name}</h1>
                </div>

            )
        }
     } */}
   
    </div>
  )
}

export default Profile