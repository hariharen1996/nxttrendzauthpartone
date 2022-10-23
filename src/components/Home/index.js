// Write your JS code here
import {Component} from 'react'
import Header from '../Header/index'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
                alt="clothes that get you noticed"
                className="ecom-img"
              />
            </div>
            <div className="content">
              <h1 className="heading">Clothes That Get YOU Noticed</h1>
              <p className="text">
                Fashion is part of the daily air and it does not quite help that
                it changes all time. Clothes have always been a marker of era
                and we are in a revolution. Your fashion makes you been seen and
                heard the way you are.So, celebrate the seasons new and exciting
                fashion is your own way
              </p>
              <div>
                <button className="shop-btn" type="button">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
