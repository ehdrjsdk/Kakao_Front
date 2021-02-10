import React from 'react';
import LoginForm from './FormComponents/LoginForm';
import './App.css';

class App extends React.Component {
  /*
    state = {
      userInfo: {
        id : 0,
        name:"test",
        password:"01030187674"
      },
    }*/

    render() {
      return(
        <div>
          <LoginForm />
        </div> 
      );
    }
}

export default App;