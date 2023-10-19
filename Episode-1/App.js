const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading' }, 'H1 Tag!'),
    React.createElement('h2', { id: 'heading' }, 'H2 Tag!'),
  ])
);
/* 
 The above code follows the following structure:
    <div id='parent'>
        <div id='child'>
            <h1 id='heading'>H1 Tag!,</h1>
        </div>
    </div>
*/
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello World from React!'
);
console.log(parent); // returns an object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
