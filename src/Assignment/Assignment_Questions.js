import React from 'react'
import './Assign_Ques.css'

const Assignment_Questions = () => {
  return (
    <>
    <div><h1>MODULE : 9 ReactJS Assignment</h1></div>
    <div>
      <ul>
        <li>
          <h2>What is React Js?</h2>
          <p>- React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces.</p>
          <p>- Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.</p>
          <p>- It is a component-based front-end library responsible only for the view layer of a <b>Model View Controller(MVC)</b> architecture. React is used to create modular user interfaces and promotes the development of reusable UI components that display dynamic data.</p>
        </li>

        <li>
          <h2>What is NPM in React Js?</h2>
          <p>- npm is an abbreviation used for the <b>node package manager.</b> It is a package manager for JavaScript.</p>
          <p>- It is the default package manager that comes with NodeJS when you install it.</p>
          <p>-  All npm packages are defined in files called package.json. The content of package.json must be written in JSON. </p>
          <p>- At least two fields must be present in the definition file: <b> name and version.</b></p>
        </li>

        <li>
          <h2>What is Role of Node Js in react Js?</h2>
          <p>- Node is the most popular platform for hosting and running web servers for React apps. </p>
          <p>- After all, using NPM (Node Package Manager), you can install any package with NPM command-line interface CLI.</p>
          <p>- Moreover, Node utilizes Webpack and other modules to turn a React application into an easily compilable single file.</p>
        </li>

        <li>
          <h2>What is CLI command In React Js?</h2>
          <p>- The CLI will be used to create a Node. js microservice project. It will be similar to how the <b>create-react-app</b> works in that you can run it using npx or just install it as a global package.</p>
          <h3>Using npx Script</h3>
          <p className='cli'>npx create-react-app  &lt;react-app-name&gt; </p>
            <p className='cli'> npx create-react-app hello-react-app</p>
          <h3>Using npm package manager</h3>
          <p className='cli'>npm init react-app  &lt;react-app-name&gt; </p>
            <p className='cli'> npm init react-app hello-react-app</p>
        </li>

        <li>
          <h2>What is Components in React Js?</h2>
          <p>- Components are <b>independent and reusable bits of code</b>. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. </p>
          <p>- Components come in two types : </p>
          <h3>1. Class components</h3>
          <h3>2. Function components</h3>
        </li>

        <li>
          <h2>What is Header and Content Components in React Js?</h2>
          <p>- Headers are compositions that extend standard navbar functionalities.</p>
          <p>- 46 headers are developed with React.</p>
          <p>- They contain additional components like a jumbotron, sub-navbar, or image covers which serve as a containers for extra navigation elements - usually links, forms, or call-to-action buttons.
          </p>
          <p>- React is the most popular frontend library for developing component-driven user interfaces.</p>
        </li>

        <li>
          <h2>How to install React Js on Windows, Linux Operating System? How to Install
          NPM and How to check version of NPM?</h2>
          <h3>How To Install React on Windows : </h3>
          <p>-  The process of installing React on a Windows machine.</p>
          <p><a href='#' className='a'>1. Install Node.js and npm </a></p>
          <p><a href='#' className='a'>2. Install Create React App</a></p>
          <p><a href='#' className='a'>3. Create a New React Project</a></p>
          <p><a href='#' className='a'>4. Go to the Project Directory and Start the Development Server</a></p>
          <h3>1. Install Node.js and npm : </h3>
          <p> Before installing React, you need to have Node.js and npm (Node Package Manager) installed on your system. If you haven’t already installed them, follow these steps:</p>
          <p>1. Visit the Node.js download page at: <a href='https://nodejs.org/en/download/'>https://nodejs.org/en/download/</a></p>
          <p>2. Download the installer for your Windows system (either the LTS or Current version is fine, but the LTS version is recommended for most users)</p>
          <p>3. To install Node.js and npm, please run the installer and carefully follow the provided prompts.</p>
          <p>- After the installation is complete, you can verify that Node.js and npm are installed by opening a command prompt and running the following commands:</p>
          <p className='cli'>node -v npm -v</p>
          <h3>2.  Install Create React App</h3>
          <p>- Create React App is a command-line tool that simplifies the process of setting up a new React project with a recommended project structure and configuration. To install Create React App globally, open a command prompt and run the following command:</p>
          <p className='cli'>npm install -g create-react-app</p>
          <h3>3.  Create a New React Project</h3>
          <p>- Now that you have Create React App installed, you can use it to create a new React project. To do this, open a command prompt, go to the directory where you want the project to live, and run the following command:</p>
          <p className='cli'>create-react-app my-app</p>
          <h3>4. Go To the Project Directory and Start the Development Server</h3>
          <p>- Once the project is created, head over to the project directory by running the following command in the command prompt:</p>
          <p className='cli'>cd my-app</p>
          <p>- Replace “my-app” with the name of your project directory. Now, start the development server by running the following command:</p>
          <p className='cli'>npm start</p>
          <p>- A new browser window should open with your React application running at <a href='http://localhost:3000/'>http://localhost:3000/</a></p>
          <h3>Linux Operating System : </h3>
          <p>- Linux is a Unix-like, open source and community-developed operating system (OS) for computers, servers, mainframes, mobile devices and embedded devices. It is supported on almost every major computer platform, including x86, ARM and SPARC, making it one of the most widely supported operating systems.</p>
          <h3>How to Install NPM : </h3>
          <p>- A few steps to inspect the installed NPM version using the command-line interface (CLI).</p>
          <p>1. Open your command-line interface (such as Terminal Command Prompt).</p>
          <p>2. Writer the given command and press Enter: npm –version.</p>
          <p>3. The command will display the version number of NPM installed on your system.</p>
          <p>* Type the command <b>npm -v or npm –version</b> in your command prompt to see the given output.</p>
          <h3>How to check version of NPM :</h3>
          <p>* Use npm list [package-name] to know the specific latest version of an installed package. Use npm install [package-name]@[version-number] to install an older version of a package. Prefix a version number with a caret (^) or a tilde (~) to specify to install the latest minor or patch version, respectively.</p>
        </li>

        <li>
          <h2>How to check version of React Js?</h2>
          <p>- You can check the version of React.js in your project using a few different methods. Here are three common ways to do it : </p>
              <ul>
                <li>Check the package.json file</li>
                <li>Use the command line</li>
                <li>Check in your web browser's developer tools</li>
              </ul>
        
          <p>1. Check the package.json file : </p>
          <p>React.js version information is typically stored in your project's <b>'package.json file'.</b> You can open this file in a text editor or use a command-line tool to view its contents. Look for the "dependencies" or "devDependencies" section, and you should see an entry for React, along with its version number.</p>
          <h3>Example : </h3>
          <p className='cli'>"dependencies": (in curly braces)
          "react" : "16.13.1",
            // other dependencies...
          </p>
          <p>2. Use the command line</p>
          <p>You can also use the command line to check the installed version of React in your project. Open your terminal or command prompt and navigate to your project's directory. Then, you can run the following command to check the React version : </p>
          <h3>Example : </h3>
          <p className='cli'>
          npm list react
          </p>
          <p>3. Check in your web browser's developer tools</p>
          <p>- Open the website in Google Chrome.</p>
          <p>- ight-click on the page and select "Inspect" to open the developer tools.</p>
          <p>- Go to the "Console" tab within the developer tools.</p>
          <h3>Example : </h3>
          <p>Type the following command and press Enter:</p>
          <p className='cli'>React.version</p>
       </li>

       <li>
        <h2>How to change in components of React Js?</h2>
        <p>- <b>setState()</b> setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.</p>
        {/* <h3>Syntax:</h3>
        <p className = 'cli>this.setState({ stateName : new-state-value})</p>
        <p className='cli'>this.setState(st => {
          setStateName = new statevalue
        })</p> */}
       </li>

       <li>
        <h2>How to Create a List View in React Js?</h2>
        <p> * The simple ListView component with its basic usage in step by step procedure.</p>
        <p>1. Dependencies...</p>
        <p>2. Installation and Configuration. ...</p>
        <p>3. Adding Syncfusion packages. ...</p>
        <p>4. Adding ListView component. ...</p>
        <p>5. Adding CSS Reference. ...</p>
        <p>6. Bind dataSource. ...</p>
        <p>7. Running the application. ...</p>
        <p>8. Dependencies.</p>

       </li>
      </ul>
    </div>

    </>
  )
}

export default Assignment_Questions