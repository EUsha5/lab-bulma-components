import React, {Component} from 'react';
import CoolButton from './button.js';

class NavBar extends Component {
  render() {
    return(
        <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/documentation/overview/start/">
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <div class="control">
            <CoolButton btn="button is-primary" auth="Signup" />
          </div>
          <div class="control">
            <CoolButton btn="button is-success" auth="Login" />
          </div>
        </div>
      </div>
    </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return(
//       <div>
//         <a className={this.props.item} href={this.props.link}>{this.props.title}</a>
//       </div>
//     );
//   }
// }

// export default NavBar