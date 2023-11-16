import {Component} from 'react'
import './index.css'

export default class LoginForm extends Component {
  state = {use: '', pass: ''}

  check = async event => {
    event.preventDefault()
    const {use, pass} = this.state
    const userdetail = {use, pass}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetail),
    }
    const response = await fetch(url, options)
    console.log(await response.json())
  }

  usch = event => {
    const val = event.target.value

    this.setState(prev => ({
      use: val,
    }))
  }

  passch = event => {
    const val = event.target.value

    this.setState(prev => ({
      pass: val,
    }))
  }

  render() {
    const {use, pass} = this.state
    return (
      <div className="maincont">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt=" website login"
            className="imgstyle"
          />
        </div>
        <div className="">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <form onSubmit={this.check}>
            <label htmlFor="inp">Username</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              id="inp"
              value={use}
              onChange={this.usch}
            />
            <br />
            <label htmlFor="pass">Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              id="pass"
              value={pass}
              onChange={this.passch}
            />
            <br />
            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
