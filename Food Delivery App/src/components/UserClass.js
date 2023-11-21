import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      //   count1: 1,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    return (
      <div className='userCard'>
        <h3>Count: {this.state.count}</h3>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
