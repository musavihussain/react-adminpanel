import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container">
              <Link to="/" className="navbar-brand">Admin Panel</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Dashboard <span className="sr-only">(current)</span></Link>
                    </li>
                  
                  </ul>
                </div>
              </div>
 
</nav>
        )
    }
}
