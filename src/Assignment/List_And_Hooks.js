import React from 'react'
import './Assign_Ques.css'

const List_And_Hooks = () => {
  return (
    <>
    <div>
        <h1>MODULE: 10 List and Hooks</h1>
        <h2> * Explain Life cycle in Class Component and functional component with Hooks</h2>
        <p>- A React component undergoes three different phases in its lifecycle, including mounting, updating, and unmounting. Each phase has specific methods responsible for a particular stage in a component's lifecycle. These methods are technically particular to <b>class-based components</b> and not intended for <b>functional components.</b></p>
        <h3>=&gt; React lifecycle method explained :</h3>
        <p>- Ever since React came to be, back in 2013, React developers used class components to take full use of the React library (extending from React.Component) in order to manipulate DOM in a React-based app development.</p>
        <p>
          <img className='img'  src='https://miro.medium.com/v2/resize:fit:1400/1*grd8e7tBM1wOqOK1GhU90Q.png' />
        </p>
        <p>- Each React component instance has a lifecycle. The component’s lifecycle consists of three phases :</p>
        <p><b>1. Mounting lifecycle methods :</b> that is inserting elements into the DOM.</p>
        <p><b>2. Updating :</b> which involves methods for updating components in the DOM.</p>
        <p><b>3. Unmounting :</b>  that is removing a component from the DOM.</p>

        <h3>=&gt; Mounting in the React component lifecycle : </h3>
        <p>-  during the mounting phase of the lifecycle, the class component is inserted into the DOM. A good example would be componentDidMount() – a lifecycle method that runs after the component is mounted and rendered to the DOM. It is great when you want to do an interval function or an asynchronous request.</p>
        {/* <h3>Example : </h3>
        <p>componentDidMount() {
             fetch(url).then(res => {
            // Handle response in the way you want.
            // Most often with editing state values.
            })
            }
        </p> */}

        <h3>=&gt; Updating in the React component lifecycle : </h3>
        <p>- The componentDidUpdate() render method is called right after the updating happens. This one is called always except for the initial render. That’s a good place to interact with a non-reactive environment. It’s a good idea to make http requests here. </p>
        <p>- call setState() in this method to enqueues changes to the component’s state. but it is very important to wrap that in some condition to avoid an infinite loop (doesn’t matter if state has the same values or not). If there is no condition, the process goes as follows:</p>
        <p>1. You call setState() in the componentDidUpdate() method.</p>
        <p>2. The component is updated.</p>
        <p>3. componentDidUpdate() is invoked.</p>
        <p>4. setState() is called again </p>
        {/* <h3>Example : </h3>
        <p>
        componentDidUpdate(prevProps, prevState) {
              // Always compare props or state
              if (this.props.counter !== prevProps.counter) {
                this.postCounter(this.props.counter);
              }
            }
        </p> */}
        <h3>=&gt; Unmounting in the React component lifecycle</h3>
        <p>- componentWillUnmount() is invoked just before the component is removed from the DOM. You should use that to remove event listeners, clear intervals and cancel requests. In other words: all the needed cleanup.</p>
        {/* <h3>Example : </h3>
        <p>
        componentWillUnmount() {
              document.removeEventListener("click", this.someFunction);
            }
        </p> */}

        <h3> =&gt; React component lifecycle with hooks </h3>
        <p>Versions of React before 16.8 consider two kinds of components based on statefulness: the class-based stateful component, and the stateless functional components (often referred to as a “dumb component”). But with the release of React 16.8, Hooks were introduced and empowered developers to access state from functional components, instead of writing an entire class. With this change, building components became easier and less verbose.</p>

        <p>- The two most common default hooks are <b> useState </b> and <b> useEffect </b>. The useState hook gives state to the functional component, and useEffect allows you to add side effects within it (like after initial render), which aren’t allowed within the function's main body. You can also act upon updates on the state with useEffect.</p>

        <h2>* useState : </h2>
        <p>- The <b>useState hook </b> is used to store state for a functional component. This hook accepts one parameter: <b> initialState,</b> which will be set as the initial stateful value, and returns two values: the stateful value, and the update function to update the stateful value. The update function accepts one argument, <b>newState,</b> which replaces the existing stateful value.</p>

        {/* <p>
          class MyInput extends React.Component {
          constructor(props) {
            super(props);
            this.state = { input: "" };

            this.handleChange = this.handleChange.bind(this);
          }

          handleChange(e) {
            this.setState({ input: e.target.value });
          }

          render() {
            return (
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
              />
            );
          }
          }
        </p> */}
        <p>- Converting this to a functional component with useState eliminates a lot of code and makes things cleaner and shorter. Here's what the above component looks like with the useState hook. If you’ve read a React tutorial over the past 2 years, chances are you’ve seen some syntax like this.</p>
        {/* <p>
        import { useState } from 'react';
        function MyInput(props) {
          const [input, setInput] = useState('');

          return (
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          )
        }
        </p> */}
        <p>- With useState(), whatever you put in the parenthesis is the default state.</p>
        <p>- The simplicity and clarity of these functional components with Hooks popularized their use among developers who prefer using functional components rather than traditional, class-based ones.</p>
        <p>- But what if your class-based component’s state object has plenty of items like this:</p>
        {/* <p>
        class MyComponent extends React.Component {
        constructor(props) {
        super(props);

        // this component has multiple items in the state object
            this.state = {
              count: 0,
              counterWeight: 1,
              themeMode: "light"
            };

            // ...
          }

          // ...

          render() {
            return (
              <div class={this.state.themeMode}>
                ...
              </div>
            );
          }
        }
        </p> */}
        <p>- You might be tempted at first to use one useState hook, and build some sort of dictionary to hold all of this state. But React allows you to have multiple useState hooks within a functional component. So instead of one single object, you can set each item of the state object into its own state:</p>
      {/* <p>
        function MyComponent(props) {
          const [count, setCount] = useState(0);
          const [counterWeight, setCounterWeight] = useState(1);
          const [themeMode, setThemeMode] = useState('light');

          // the rest of the code...

          return (
            <div>
              ...
            </div>
          )
        }
      </p> */}

      <h2>* useEffect : </h2>
      <p>- As with the render() method of a class-based component, the main body of a functional component should be kept pure. With the useEffect hook, you're able to create side effects while maintaining the component's purity. Within this hook, you can send network requests, make subscriptions, and change the state value.</p>

      <p>- The useEffect hook accepts a function as an argument, where you write all your side effects. This function is invoked after every browser paint and before any new renders (this will depend on the dependency array, which is explained in the next paragraph). This function can return another function called the clean-up function, which can be used to clean up the side effects (i.e. when the component is destroyed) like unsubscribing to a store. It’s kind of a mash up of several of the methods explained in the previous section.</p>

      <p>- This Hook accepts a second argument called the dependency array, which is an array of dependencies like state or props values, which the useEffect uses as reference to only run when these values change. If the dependency array is empty, then the useEffect will only run once, after the first paint.</p>

      <p>- he dependency array is optional, so if it's not defined, useEffect will fire first when the component is first mounted, and then on every re-render.</p>

        <p>- The useEffect hook to achieve the same results as with the componentDidMount, componentDidUpdate and componentWillUnmount methods. useEffect accepts two parameters. The first one is a callback which runs after render, much like in componentDidMount. The second parameter is the effect dependency array. If you want to run it on mount and unmount only, pass an empty array [].</p>
        {/* <h3>Example : </h3>
        <p>To clean up, return the callback in useEffect:</p>
        <p>useEffect(
          () => {
            document.addEventListener(“click”, someFunc);
            
            return () => {
              document.removeEventListener(“click”, someFunc);
            };
          },
          []
        );
        </p>
        <p>behave like componentDidUpdate, put some dependencies into the array or don’t pass the second argument at all.</p>
        <p>also use useState instead of this.state in class components. Instead of:</p>
        <p>
          this.state = {
            counter: 0,
            usersList: [],
          }
        </p>
        <p>can do that : </p>
        <p>const [counter, setCounter] = useState(0); 
          const [usersList, setUsersList] = useState([]);</p>
        <p> It is possible to use hooks to achieve similar or the same end results.</p>   */}


    </div>
    </>
  )
}

export default List_And_Hooks