// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="container2">
          <div className="container3">
            <button type="button" className="btn" onClick={this.showFirstName}>
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="container3">
            <button type="button" className="btn" onClick={this.showLastName}>
              Show/Hide LastName
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
