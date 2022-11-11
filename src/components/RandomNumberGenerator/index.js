import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: '0'}

  generateRandomNumber = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({number: randomNum})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-contianer">
        <div className="random-card-container">
          <h1 className="header">Random Number</h1>
          <p className="paragraph-text">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="button-styling"
              type="button"
              onClick={this.generateRandomNumber}
            >
              Generate
            </button>
          </div>
          <p className="span-element-styling">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
