import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong...😑</h2>
      <h3 style={{ color: 'red', fontWeight: 'bold', fontSize: '25px' }}>
        {err.data}
      </h3>
    </div>
  );
};

export default Error;
