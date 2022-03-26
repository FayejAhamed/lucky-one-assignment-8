import React from 'react';

const Question = () => {
    return (
        <div style={{ marginTop: '60px', padding: '20pxgit' }}>
            <h1>Prop vs State</h1>
            <p>1.Props are Read only, state changes can be asynchronous
                <br />
                2.props can not be modified, state can be modified using this.state.
                <br />
                3.State is the local state of the component which cannot be access .Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
            </p>

            <h1>how use state works?</h1>
            <p>useState is a Hook that allows us to have state variables in functional components. we can pass the initial state to this function and it returns a variable with the current state value and another function to update this value.It represent an information about the component's current situation and how it changes time to time</p>

            <h1>How react works?</h1>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Its V in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state  for example, a TabList component may store a variable corresponding to the currently open tab.</p>
        </div>
    );
};

export default Question;