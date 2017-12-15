import React from "react";
import { render } from "react-dom";
import "spectre.css/dist/spectre.min.css";
import AccordionMenu, {
  AccordionMenuList,
  AccordionMenuListItem
} from "./AccordionMenu";

const App = () => (
  <div>
    <h2>Accordion Menu {"\u2728"}</h2>
    <AccordionMenu default="missions">
      <AccordionMenuList title="Users" id="users">
        <AccordionMenuListItem
          onClick={() => console.log("clicked")}
          title="Admins"
        />
        <AccordionMenuListItem title="Members" />
      </AccordionMenuList>
      <AccordionMenuList title="Missions" id="missions">
        <AccordionMenuListItem isDisabled title="Live missions" />
        <AccordionMenuListItem title="Archived missions" />
        <AccordionMenuListItem title="Closed missions" />
      </AccordionMenuList>
      <AccordionMenuList title="Posts" id="posts">
        <AccordionMenuListItem title="Active posts" />
        <AccordionMenuListItem title="Recent Posts" />
      </AccordionMenuList>
      <AccordionMenuList title="Settings" id="settings">
        <AccordionMenuListItem title="Profile" />
        <AccordionMenuListItem title="Logout" />
      </AccordionMenuList>
    </AccordionMenu>
  </div>
);

render(<App />, document.getElementById("root"));
