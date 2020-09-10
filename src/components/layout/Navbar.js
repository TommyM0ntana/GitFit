import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "Acusoft",
    icon: "fab fa-accusoft",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <i className={this.props.icon}>{this.props.title}</i>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Contacts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              App
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
