import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const heading = <h1 className='heading'>This is a JSX Heading</h1>;

// React Functional Component
const HeadingComponent = () => (
  //PascalCase always!!!
  <h2 className='heading'>This is a functional component</h2>
);

const BodyComponent = () => (
  <div>
    <HeadingComponent />
    <p>New Paragraph</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
// to make Babel understand that this is a functional component and not an element
root.render(<BodyComponent />);
