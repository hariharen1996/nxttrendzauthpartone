import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="logo"
              alt="website logo"
            />
          </div>
          <ul className="nav-items">
            <li className="nav-links nav">Home</li>
            <li className="nav-links nav">Products</li>
            <li className="nav-links nav">Cart</li>
            <li className="nav-links nav">
              <button className="logout-btn" type="button">
                Logout
              </button>
            </li>
            <li className="nav-links nav-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                className="logout-icon"
                alt="nav logout"
              />
            </li>
          </ul>
        </nav>
        <div className="icon-container">
          <ul className="icon-items">
            <li className="icon-links">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
                alt="nav home"
                className="icons"
              />
            </li>
            <li className="icon-links">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="icons"
              />
            </li>
            <li className="icon-links">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="icons"
              />
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Header
