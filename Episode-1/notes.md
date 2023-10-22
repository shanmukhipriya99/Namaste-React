### HTML

- Create `index.html` and type `html:5` for a basic html boilerplate.

### JS

- `<script></script>` should be the last tag added inside the `body` tag and any JS code should be written inside the `script` tag.
- `document.createElement()` => Creates the element passed to the function
- `createdElement.innerHTML = ''` => Assigns the right-hand side content to the created element
- `document.getElementById()` => Is a pointer to the HTML element with the said `id`
- `elementReceivedById.appendChild()` => The element passed to this function is inserted inside the parent element.

  Ex: The `h1` tag is inserted inside the `div` tag.

### React

- We can utilize React in HTML pages without having to create a new react app.
- To do so, we need to import react into the html file using CDN links:
  ```sh
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  ```
- The first link imports the whole of react.
- The second link is for importing `ReactDOM`, which is like a bridge between React and the browsers.
- Having the CDN links in the `script` tag allows us to use `React` and `ReactDOM`.
- `React.createElement('<tag>', {}, 'html content of the tag')` => Creates the element and passes the html content to the created element. The second argument, the object, can be used to pass attributes.
  Ex:

  ```sh
  const heading = React.createElement(
    'h1',
    { id: 'heading' },
    'Hello World from React!'
  );

  ```

- `ReactDOM.createRoot(<reference to the root element>)` => This creates a reference to the root element so that we can render the created element later

  _Note:_ Can be obtained by `document.getElementById()` inside `createRoot()`

- `rootElement.render(createdElement)` => This renders the created element inside the root element
- When `heading` from the above example is logged, we get an object:

  ```sh
  {
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "heading",
        "children": "Hello World from React!"
    },
    "_owner": null,
    "_store": {}
  }
  ```

- The job of `render()` is to convert the JS object passed into the format that is understandable by the browser i.e. `h1` tag per this example
- We can create nested structures:

  ```sh
  const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        React.createElement('h1', { id: 'heading' }, 'H1 Tag!')
    )
  );
  ```

  ```sh
    {
        "type": "div",
        "key": null,
        "ref": null,
        "props": {
            "id": "parent",
            "children": {
                "type": "div",
                "key": null,
                "ref": null,
                "props": {
                    "id": "child",
                    "children": {
                        "type": "h1",
                        "key": null,
                        "ref": null,
                        "props": {
                            "id": "heading",
                            "children": "H1 Tag!"
                        },
                    "_owner": null,
                    "_store": {}
                }
             },
            "_owner": null,
            "_store": {}
        }
    },
    "_owner": null,
    "_store": {}
  }
  ```

- We can create sibling elements by having them in an array:
  ```sh
  const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', { id: 'heading' }, 'H1 Tag!'),
        React.createElement('h2', { id: 'heading' }, 'H2 Tag!'),
    ])
  );
  ```
- But this can get complicated and hence we can use `JSX` to make life easy while creating HTML elements in React.

- React is more of a library and not a full-fledged framework.
- This is because we can have independent applications that import React for a small part and don't have to depend on React completely. But we can also use React to build large-scale apps.

### Assignment

- #### Emmet:
  Emmet is a toolkit that allows web developers to type in shortcuts which would then expand into full pieces of code w.r.t `HTML & CSS`.
- #### Library VS Framework:
  ##### Library
  A library is a collection of packages that perform specific operations.
  ##### Framework
  A framework contains/provides a basic flow and architecture of a software application.
- #### Content Delivery Network (CDN)
  A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.
- React is named React because of its ability to react to changes in data.
- #### What is `crossorigin in script tag`?

  The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
  The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

  _Syntax_

  ```sh
  <script crossorigin="anonymous|use-credentials">
  ```
- #### `React` vs `ReactDOM`
  `React` and `ReactDOM` are JavaScript libraries but `React` helps in creating user interfaces and `ReactDOM` allows `React to interact with the DOM`.
