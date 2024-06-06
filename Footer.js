import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {

  render() {
    let {title} = this.props
    return (
      // <div className='container bg-dark text-light'>        
      // </div>
      <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>{title}</h4>
            <p className="mb-0">&copy; 2024 ApnaNews, Inc. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-unstyled d-flex">
              <li><Link to="#" className="text-light ">Privacy Policy</Link></li>
              <li><Link to="#" className="text-light mx-3">Terms of Service</Link></li>
              <li><Link to="#" className="text-light">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}
