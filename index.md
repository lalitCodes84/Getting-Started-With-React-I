PROBLEM:-
Q1. What is React?
Q2. Who made React?
Q3. What is Babel?
Q4. How does Babel convert html code in React into valid code?
Q5. What is ReactDOM used for? Write an example?
Q6. What are the packages that you need to import for react to work with?
Q7. How do you add react to a web application?
Q8. What is React.createElement?
Q9. What are the three properties that createElement accept?
Q10. What is the meaning of render and root?

____________________________________________________________________________________________
 ANSWERS:-

Q1. What is React?

Ans->  React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the user interface in response to changing data.

Q2. Who made React?

Ans-> React was created by Jordan Walke.


Q3. What is Babel?

Ans-> Babel is a JavaScript compiler that allows developers to use the latest ECMAScript features (or other syntax like JSX) without waiting for browser support. It can also convert code written in one version of ECMAScript to another for compatibility.


Q4. How does Babel convert HTML code in React into valid code?

Ans-> Babel primarily transpiles JSX (a syntax extension for JavaScript recommended by React) into regular JavaScript. JSX allows developers to write UI components in a syntax that resembles HTML, and Babel translates it into JavaScript that can be executed by browsers.


Q5. What is ReactDOM used for? Write an example.

Ans-> ReactDOM is a package in React that provides methods for rendering React components into the DOM (Document Object Model). Here's an example:

// import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello, React!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root')); //


Q6. What are the packages that you need to import for React to work with?

Ans-> These packages are big time-savers,

React Router. ...
Redux. ...
Axios. ...
Lodash. ...
Material-UI. ...
Styled Components. 
To work with React, you typically need to import react and react-dom packages. You can install them using npm or yarn:

npm install react react-dom
OR
yarn add react react-dom


Q7. How do you add React to a web application?

Ans-> We add React to a web application, need to include the React script and Babel for JSX transpilation. You can use CDN links or install them using npm/yarn. Then, create a root HTML element where your React components will be rendered.


Q8. What is 'React.createElement'?

Ans-> React.createElement is a function in React used to create React elements, which are the building blocks of React applications. It takes at least three arguments: the type of the element (string or React component), optional properties (or "props"), and any number of child elements.


Q9. What are the three properties that createElement accepts?

Ans-> React.createElement accepts three properties:

i-> Type (string or React component): The type of the React element, either a string representing an HTML tag (e.g., 'div') or a reference to a React component.

ii-> Props (object): Optional properties or attributes for the element, such as className or style.

iii-> Children (any): Any additional arguments after the props are considered as child elements of the created element. Children can be nested arrays or components.


Q10. What is the meaning of render and root?

Ans-> The Meaning of Render and Root are here:-

i-> Render: In React, "render" refers to the process of creating a React element tree and displaying it on the screen. This process is typically triggered by calling ReactDOM.render().

ii-> Root: The "root" in React usually refers to the root DOM node where your React application is attached. In the ReactDOM.render example earlier, document.getElementById('root') specifies the root element in the HTML where the React component (<App />) will be rendered.




