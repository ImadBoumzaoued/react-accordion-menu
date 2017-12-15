import React from "react";

const AccordionMenuListItem = props => {
  return (
    <li className="menu-item">
      {props.isDisabled ? (
        <button className="btn btn-link  c-not-allowed">
          <span className="text-secondary">{props.title || null}</span>
        </button>
      ) : (
        <button className={`btn btn-link`} onClick={props.onClick || null}>
          {props.title || null}
        </button>
      )}
    </li>
  );
};

export default AccordionMenuListItem;
