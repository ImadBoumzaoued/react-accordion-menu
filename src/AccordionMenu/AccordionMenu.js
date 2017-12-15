import React, { Component } from "react";
import PropTypes from "prop-types";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: props.default
    };
  }
  getChildContext() {
    return {
      activeId: this.state.activeId,
      setActive: activeId => this.setState({ activeId })
    };
  }
  render() {
    return <div className="accordion">{this.props.children}</div>;
  }
}
Accordion.childContextTypes = {
  activeId: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
};

export default Accordion;
