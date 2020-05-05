import React from 'react';
import axios from 'axios'
import Admin from './components/Admin'
import AdminFollowers from './components/AdminFollowers'
import './App.css';
import {Switch, Route} from 'react-router-dom'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      userInfo: [],
      usersInfo: []
    }
  }
  componentDidMount(){
    axios
      .get('https://api.github.com/users/code-dependent')
      .then(res=>{
        console.log(res.data)
        this.setState({
          userInfo:res.data
        })
      })
      .catch(err=>{
        debugger
      })
    axios
      .get('https://api.github.com/users/code-dependent/followers')
      .then(res2=>{
        console.log(res2.data)
        this.setState({
          usersInfo: res2.data
        })
      })
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>We Love GitHub 😍</h1>
          <Switch>
            <Route exact path='/'>
              <Admin userInfo={this.state.userInfo}/>
            </Route>
            <Route exact path='/followers'>
              <AdminFollowers usersInfo={this.state.usersInfo}/>
            </Route>
          </Switch>
        </header>
        
      </div>
    );
  }
}

export default App;
