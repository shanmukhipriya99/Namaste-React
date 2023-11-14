### What is `<React.Fragment></React.Fragment>` and `<></>`?

`<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.

#### Example

```sh
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```

### What is `Reconciliation` in React?

- `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React uses a `diffing algorithm` so that component updates are predictable and faster.
- It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.
- React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
- React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
- React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called `Reconciliation`.

### What is `React Fiber`?

React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

### Why do we need `key` in React?

A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique identifiers used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.

In the case that `key` is not provided, whenever there is a change, React clears the entire component and reloads all the elements in the list, causing huge performance issues.

#### Example

```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```

### Can we use `index as keys` in React?

Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

### What is `props in React`?

`props` stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

#### Example

```sh
function App() {
  return (
    <div className="App">
      <Tool name="Useful Tool" tool="Figma"/> // name and tool are props
    </div>
  )
}

function Tool(props) {
    console.log(props.name);
    console.log(props.tool);
}
```

### What is `Config Driven UI`?

`Config Driven UI` is based on the configurations of the data that the application receives. It is a good practice to use config driven UIs to make application dynamic.
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
Ex:
A user from place X may have some offers and a user from place Y may have no offers at all. If this data is received in the APIs, then the frontend developer can just use this info to configure the use of certain components based in the info. In this case, the first user would see an additional carousel with the offers and the second user wouldn't. The developer wouldn't have to code different UIs for the users.

### Difference between `Virtual DOM` and `Real DOM`?

DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

- `Virtual DOM`
  - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
  - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
  - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
  - The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains objects. Programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

| `Real DOM`                                                       | `Virtual DOM`                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| DOM manipulation is very expensive                               | DOM manipulation is very easy                            |
| There is too much memory wastage                                 | No memory wastage                                        |
| It updates Slow                                                  | It updates fast                                          |
| It can directly update HTML                                      | It can’t update HTML directly                            |
| Creates a new DOM if the element updates.                        | Update the JSX if the element update                     |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application                         | It is only a virtual representation of the DOM           |

### You have an image in your local. How do you add in your JSX code?

Since the source of the image is not a link, we'll have to import the image React to render the image on the web page. Ex:

```sh
    <img className='logo' src={require('./assets/logo.jpg')} alt='logo' />
```

We place the `require` inside `{}` as this snippet is written inside HTML and so JSX needs it to be received as an object.

