import React from 'react';
import axios from 'axios'
import Admin from './components/Admin'
import UsernameForm from './components/UsernameForm'
import AdminFollowers from './components/AdminFollowers'
import './App.css';
import {Switch, Route} from 'react-router-dom'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      formValue:'',
      username:'code-dependent',
      userInfo: [],
      usersInfo: []
    }
  }
  componentDidMount(){
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
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
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res2=>{
        console.log(res2.data)
        this.setState({
          usersInfo: res2.data
        })
      })
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.username !== prevState.username){
      axios
      .get(`https://api.github.com/users/${this.state.username}`)
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
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res2=>{
        console.log(res2.data)
        this.setState({
          usersInfo: res2.data
        })
      })
    } 
  }
  changeHandle = (event)=>{
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]:value
    })
  }
  submitHandle = (event)=>{
    event.preventDefault();
    this.setState({
      username:this.state.formValue,
      formValue:''
    })
    console.log(this.state.username)
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.username} Loves GitHub 😍</h1>
          <UsernameForm 
            changeHandle={this.changeHandle}
            submitHandle={this.submitHandle}
            formValue={this.state.formValue}
            />
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
