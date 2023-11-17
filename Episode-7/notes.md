### What are various ways to `add images` into our App? Explain with `code examples`?

- Using the `full URL of the image` for the web (CDN) or any public images.
  Example :
  ```
  <img src="https://reactjs.org/logo-og.png" alt="React Image" />
  ```
- Adding the image into the project
  `Drag your image into your project` and `import it` into the desired component

  ```
  import reactLogo from "./reactLogo.png";
  export default function App() {
  return <img src={reactLogo} alt="react logo" />
  }
  ```

- The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

  ```
  import reactLogo from "../../assets/images/reactLogo.png";
  export default function App() {
  return <img src={reactLogo} alt="react logo" />
  }
  ```

### What would happen if we do `console.log(useState())`?

If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in the array is `state`, which is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

### How will `useEffect` behave if we `don't add` a `dependency array`?

Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

- Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

  ```
  useEffect(() => {
      console.log("I run everytime this component rerenders")
  });
  ```

- Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

  ```
  useEffect(() => {
      console.log("I Only run once (When the component gets mounted)")
  }, []);
  ```

- Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

  ```
  useEffect(() => {
      console.log("I run every-time when my condition changed")
  }, [condition]);
  ```

### What is `SPA`?

`Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

### `Routing` vs `Rendering`?

- Routing
  - Routing refers to the process of determining which content or component should be displayed to the user based on the URL or user's navigation.
  - Client-Side and Server-Side Routing
  - When a user interacts with a web application, they enter specific URLs or click on links. The routing system determines what content or view corresponds to that URL and displays it.
- Rendering
  - Rendering refers to the process of generating and displaying the user interface (UI) or content on the web page based on the data and components.
  - When a specific route is matched through routing, the associated UI components and data are rendered to display the content to the user.
  - Rendering can be done on the server-side (Server-Side Rendering, SSR) or on the client-side (Client-Side Rendering, CSR) depending on the web application's architecture.
    - In SSR, the server generates the HTML content and sends it to the client, which is then displayed. This approach can improve SEO and initial load times.
    - In CSR, the client (usually a web browser) fetches data from an API or server and then renders the UI components dynamically. This approach is common in modern single-page applications (SPAs).

### What is the difference between `Client Side Routing` and `Server Side Routing`?

- In `Server-side routing or rendering (SSR)`, for every change in URL, a http request is made to server to fetch the webpage, and replace the current webpage with the older one.

- In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.

### What is `react-router-dom`?

React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

### What are the steps to add `routing` into your React project?

- Install `react-router-dom`.
- Import `createBrowserRouter, RouterProvider` from `react-router-dom`.
- Use `createBrowserRouter` to list the possible routes. Ex:
  - ```sh
        const appRouter = createBrowserRouter([
            {
                path: '/',
                element: <component to be loaded>,
                errorElement: <component to be displayed upon error>
            }
        ])
    ```
- Use `RouterProvider` in the render function. Ex:
  - `root.render(<RouterProvider router={appRouter} />)`

### How are `nested routes` implemented? Why do we need `nested routes`?

- Nested routes in React JS are implemented using the `<Outlet />` in React Router Dom. Routing in React not only provides routing for the pages but also for switching the content inside that page.
- Define the children routes inside the Route component of the Parent route. Ex:
  - ```sh
            const App = () => {
                return (
                    <div className='app'>
                        <Header />
                        <Outlet />
                    </div>
                );
            };
            const appRouter = createBrowserRouter([
                {
                    path: '/',
                    element: <App />,
                    children: [
                        {
                            path: '/',
                            element: <Body />,
                        },
                        {
                            path: '/about',
                            element: <About />,
                        },
                    ]
                    errorElement: <component to be displayed upon error>
                }
            ])
    ```
- Such an approach would be required in many cases. Ex:
  - We are building a SPA where we have a common header in all the pages. Instead of importing the header component in every page, we can only import it once using the above example.

### Usage of `Link` vs `<a href=''>`?

`Link` is provided by `react-router-dom`. Whenever we need to do link to an internal path, it is better to use `<Link>` instead of the `anchor tag`.

This is because using `<Link>` does not reload the page, only renders the component that needs to be displayed based on the path.

Using anchor tag also does the same, but it reloads the page to view the content. And this may take time, affecting the user experience.

However, it is important to note that `<Link>` basically refers to the anchor tag upon rendering. i.e, if you look at the final html code after rendering the page, we see the anchor tag but since we have used `Link`, the page would not reload.

### What do you know about the `useRouteError` hook?

The `useRouteError` hook is provided by `react-router-dom`. This is a very useful hook for handling errors in our web application. If we don't use this hook, the page would display an ugly error and the page would break, causing a bad user experience. However, using this hook catches the error and displays a generalized error message to the user instead of breaking the page.

We can use this hook to create a better error template based on the requirement.

### How to access the paramters passed in the url?

The `useParams` hook returns an object of key/value pairs of the dynamic params from the current URL. Child routes inherit all params from their parent routes.