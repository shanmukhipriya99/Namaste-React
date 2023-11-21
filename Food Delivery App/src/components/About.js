import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User
        name='Sandy'
        location='Function Component'
        contact='shanmukhi.eth'
      />
      <UserClass
        name='Sandy'
        location='Class-Based Component'
        contact='shanmukhi.eth'
      />
    </div>
  );
};

export default About;
