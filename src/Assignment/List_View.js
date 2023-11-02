import React from 'react'
import './Assign_Ques.css'


const List_View = () => {

  const Names = [
    "Somnath",
    "Kedarnath",
    "Bhimashankar",
    "Trimbakeshwar Jyotirling",
    "Shri Nageshvar Jyotirling",
    "Mahakaleshwar Jyotirlinga",
    "Kashi Vishwanath",
    "Omkareshwar"
  ];

  const styles = {
    backgroundColor: 'white',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '10px',
    padding: '10px',
    color: 'green',
    boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
  };

  return (
    <>
    <h1> * How to Create a List View in React Js?</h1>
    
    <div className='main'>
      <h2 className='list'>The "React Way" to Render a List</h2>
    <div className='name'>
    {
      Names.map(Names => <div key={Names}
      style={styles}>{Names}</div>)
    }
    </div>
    </div>
  </>
  )
}

export default List_View