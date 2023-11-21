import { useState } from 'react';

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const { name, location, contact } = props;
  return (
    <div className='userCard'>
      <h3>Count: {count}</h3>
      <h3>Count1: {count1}</h3>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  );
};

export default User;
