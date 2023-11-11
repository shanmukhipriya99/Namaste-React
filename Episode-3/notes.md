### Why does `npm start` work without `run`?

`start` is a reserved keyword and therefore, when we execute `npm start` it is interpreted as `npm run start`, whereas, all other scripts need to have the `run` keyword.

### What is `JSX`? Why is it needed?

- JSX stands for `JavaScript XML`, and uses `HTML-like` syntax.
- JSX allows us to create HTML elements in JavaScript and place them in the DOM without using createElement() and/or appendChild() methods.
- JSX makes it easier to write and add HTML in React.
- HTML elements created using JSX are transformed into React elements, which are then used by React to render and manage the DOM.

### Examples of using `JSX`

```sh
    const myElement = <h1>This is JSX!</h1>;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
```

### Can you explain the flow of `JSX Component` execution?

The `JSX` code is not proper JS syntax and is not understood by the JS engine by default. Following is the process of JSX code execution:

- JSX code is written.
- This code is then transpiled by `BABEL`, also is provided by `Parcel`.
- The transpiled output consists calls to `React.createElement()`, which return JS objects describing what should be rendered in the DOM.
- This is then passed to the `render()` method for execution.
