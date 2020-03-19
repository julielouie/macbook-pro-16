import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    if (window.innerWidth < 768) {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    const show = this.state.isOpen ? 'show' : null;
    return (
      <nav className="header navbar navbar-expand-md sticky-top">
        <div className="container">
          <div className="d-flex flex-column navbar-brand">
            <small className="text-muted">16-inch model</small>
            <h5 className="m-auto">MacBook Pro</h5>
          </div>
          <button className="collapsed navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#defaultNav"
            aria-controls="defaultNav"
            aria-expanded={this.state.isOpen}
            aria-label="Toggle navigation"
            onClick={this.toggleNav}>
            <i className="fas fa-chevron-down"></i>
          </button>
          <div className={`collapse navbar-collapse ${show} py-2 justify-content-end`} id="defaultNav">
            <ul className="navbar-nav">
              <li className="nav-item text-muted">
                <small className="nav-link">Overview</small>
              </li>
              <li className="link nav-item">
                <small className="nav-link">Tech Specs</small>
              </li>
            </ul>
            <div className="buy-button text-center align-self-center">
              <small className="text-white">Buy</small>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
