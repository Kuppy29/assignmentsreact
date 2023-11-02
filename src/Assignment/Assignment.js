import React from 'react';
import Assignment_Questions from './Assignment_Questions';
import List_View from './List_View';
import Increment_Decrement from './Increment_Decrement';
import List_And_Hooks from './List_And_Hooks';
import Styling_And_AdvanceReact from './Styling_And_AdvanceReact';
import React_Router from './React_Router';

const Assignment = () => {
  return (
    <>
   < Assignment_Questions />
   < List_View />
   < Increment_Decrement />
   < List_And_Hooks />
   < Styling_And_AdvanceReact />
   {/* <React_Router /> */}
    </>
  )
}

export default Assignment;