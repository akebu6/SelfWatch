import { Component } from "react";
import { SelfCareTasks } from "./SelfCareTasks";
import { Item } from "./Item";
import { Preferences } from "./Preferences";

export function Body() {
  return (
    <>
      <h2 className="m-5">Variable Name</h2>
      <div>
        {/* I want a dynamic list with boolean check boxes for each element
        I want there to be two lists side by side in the home page
        in the Item list and preferences page, it's a vertical list
        div holding specific page
        I expect this to use useState or some such props etc
         */}
        <SelfCareTasks />
        <Item />
        <Preferences />
      </div>
    </>
  );
}
