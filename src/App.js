import React, { Component } from 'react';
import './App.css';

const allUsers = ['Kasia', 'Basia', 'Weronika', 'Eliza'];

const UsersList = ({ users }) => {
  if(users.length > 0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul> 
    );
  }

  return (
    <p>No results!</p>
  )
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers
    };
  }

  filterUsers = (e) =>  {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text);
    this.setState({
      filteredUsers
    });
  }

  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }
  
  render() {
    return (
      <div className="App">
        <input onInput={this.filterUsers}/>
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default App;
