import React, { Component } from "react";
import PropTypes from "prop-types";

class AccordionMenuList extends Component {
  render() {
    return (
      <div onClick={() => this.context.setActive(this.props.id)}>
        <input
          type="checkbox"
          checked={this.context.activeId === this.props.id}
          hidden
        />
        <label className="accordion-header">
          <button className="btn btn-link">{this.props.title}</button>
        </label>
        <div className="accordion-body">
          <ul className="menu menu-nav">
            {this.context.activeId === this.props.id ? (
              this.props.children
            ) : null}
          </ul>
        </div>
      </div>
    );
  }
}

AccordionMenuList.contextTypes = {
  activeId: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
};

export default AccordionMenuList;
