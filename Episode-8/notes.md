### How do you create `Nested Routes` react-router-dom configuration?

We can create `Nested Routes` inside a react router configuration as follows:

- First, call createBrowserRouter for routing different pages

  ```sh
  const router = createBrowserRouter([
  {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
          {
              path: "/path",
              element: <Child />
          }
      ],
  }
  ])
  ```

- Now, we can create a nested routing for `/path` using `children` again as follows:

  ```sh
  const router = createBrowserRouter([
  {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
          {
              path: "/path",
              element: <Child />,
              children: [ // nested routing for subchild
              {
                  path: "child",      // "Don't use '/' because then react-router-dom will understand it as it's the direct path"
                  element: <SubChild />,
              }
              ],
          }
      ],
  }
  ])
  ```

### Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

- `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
  Other than that, it is functionally the same as `createBrowserRouter`.
  For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

- `createMemoryRouter`: Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
  For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

### What is the order of life cycle method calls in `Class Based Components`?

Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Why do we use `componentDidMount`?

The `componentDidMount()` method allows us to execute some React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. We can run any piece of react code to modify the components.

For ex: It's the best place to `make API calls`.

### Why do we use `componentWillUnmount`? Show with example.

`componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.

For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

### (Research) Why do we use `super(props)` in constructor?

`super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
`super()` is used inside the constructor of a class to derive all the parent's properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing '`this`' or returning from derived constructor is thrown in the console.

The main difference between `super()` and `super(props)` is that the `this.props` is undefined in child constructor's `super()` but `this.props` contains the passed props if super(props) is used.

### (Research) Why can't we have the `callback function` of `useEffect async`?

`useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.

### What is the difference between React's `functional components` and `class-based components`?

- `functional components`

  - Are JS functions that return some JSX.
  - Syntax:

    ```sh
        function MyComponent(props) {
            return (
                <div>
                    <p>Hello, World</p>
                    <p>Have a nice day!</p>
                </div>
            );
        }
    ```

    ```sh
        const MyComponent = (props) => {
            return (
                <div>
                    <p>Hello, World</p>
                    <p>Have a nice day!</p>
                </div>
            );
        }
    ```

    - Are known as stateless components
    - Don’t respond to lifecycle events
    - Return HTML elements or nothing
    - Support React 16.8 hooks

- `class-based components`

  - Are JS classes that return some JSX.
  - Syntax:

        ```sh
            import { React } from 'react';
            class MyComponent extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = { currState: true }
                }
                render() {
                    <div>
                        <p>Hello, World!</p>
                    </div>
                }
            }
        ```
        - Extend from `React.Component`.
        - Are also known as stateful components
        - Respond to lifecycle events
        - Require a constructor to store state before they can be used to pass props to the parent class
        - Require a render function that returns an HTML element

### What can you tell about the lifecycle events?

Refer: [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Can we update the state variables directly?

Technically, we can, but doing so would beat the purpose of using a state variable, primarily because updating a state variable directly won't re-render the component and it would mess things up while scaling.

Therefore, it is advised to use the `useState()`'s `set()` or `this.setState()` to update state depending on the type of the component.

### In the case of `class-based components`, we have the `componentWillUnmount()` option for the `unmounting phase`. How do deal with this when working with `functional components`?

A `return()` is called in `useEffect()` to unmount, meaning it can be used to clear setTimeouts, remove eventListeners etc.

To use componentWillUnmount within a useEffect, first add a return function to the useEffect. This is triggered when a component unmounts from the DOM.

```sh
    import React, { useEffect } from 'react';
    const ComponentExample => () => {
        useEffect(() => {
            // Anything in here is fired on component mount
            return () => {
                // componentwillunmount in functional component.
                // Anything in here is fired on component unmount.
            }
        }, [])
    }
```

### What are the cases where you'd use more than one `useEffect()`?

You might use more than one useEffect in a React component when you have multiple distinct effects or side effects to handle, each with its own set of dependencies or conditions.

- **Different Triggers or Conditions:** If you have multiple effects that need to run under different conditions or in response to different triggers, it's often more clear and maintainable to use separate useEffect hooks for each.
- **Combination of Mount and Update Effects:** You might have effects that need to run only after the initial render and others that run on updates. Using separate useEffect hooks allows you to specify the appropriate dependencies and conditions for each case.
- etc...
