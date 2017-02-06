import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';


export default class NavLink extends Component {
  render() {
    var link = <Link {...this.props} activeClassName="active"></Link>;

    if (this.props.to === '/' && this.props.children === 'Home') {
      link = <IndexLink {...this.props} activeClassName="active"></IndexLink>;
    }

    return link
  }
}
