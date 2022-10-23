import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: '', isTrue: false}

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onErrorMsg = errorMsg => {
    this.setState({isTrue: true, error: errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onErrorMsg(data.error_msg)
    }
  }

  render() {
    const {username, password, error, isTrue} = this.state

    return (
      <div className="login-container">
        <div className="login-card">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="login-banner"
              alt="website login"
            />
          </div>
          <div className="form-container">
            <form className="form" onSubmit={this.onLogin}>
              <div className="form-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                  alt="website logo"
                  className="form-image"
                />
              </div>
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                value={username}
                onChange={this.onChangeUser}
                placeholder="Username"
                id="username"
                className="input"
              />
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
                id="password"
                className="input"
              />
              {isTrue ? <p className="error">{error}</p> : ''}
              <button className="form-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
