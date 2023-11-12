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

### What is a `React Functional Component`?

It is a function that returns some JSX code/React Element/s.

### How do you render a `React Element` vs a `React Functional Component`?

- Element => `root.render(heading);`
- Component => `root.render(<HeadingComponent />)`

We use this differentiation for Babel to understand.

### What is `Component Composition`?

Component composition in React is the technique of combining different modular components to construct another component.
Ex:

```sh
    const HeadingComponent = () => (
        <h2 className='heading'>This is a functional component</h2>
    );

    const BodyComponent = () => (
        <div>
            <HeadingComponent />
            <p>New Paragraph</p>
        </div>
    );
```

### What is the difference between using `{}` and `()` in functional components?

- When you use (parentheses), you are defining an arrow function without an explicit return statement. ex:
  ```sh
        const HeadingComponent = () => (
            // JSX code here
        );
  ```
- When you use {curly braces}, you are defining a block of JavaScript code. This allows you to write multiple statements and perform more complex logic within the function. You need to use an explicit return statement if you want to return JSX from a function defined with curly braces. ex:
  ```sh
        const HeadingComponent = () => {
            // JavaScript code here
            return (
                // JSX code here
            );
        };
  ```
- JSX automatically sanitizes data preventing any malicious attacks like XSS, etc.

### `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`

The difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

#### Example

```sh
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

### Role of `type` attribute in script tag? What options can I use there?

The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a default value which is _“text/javascript”_.

#### `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  #### Syntax
  ```sh
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.
