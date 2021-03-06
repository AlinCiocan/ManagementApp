import React from "react";
import InventoryListItem from "./InventoryListItem";
import { Segment } from "semantic-ui-react";
import InventoryListTitles from "./InventoryListTitles";
import classes from "./InventoryDashboard.module.css";

export default function InventoryList({
  items,
  predicate,
  setPredicate,
  loading,
}) {
  return (
    <Segment.Group style={{ marginTop: "50px" }}>
      <Segment className={classes.inventoryListContainer}>
        <InventoryListTitles
          predicate={predicate}
          setPredicate={setPredicate}
          loading={loading}
        />
        {items.map((item) => (
          <InventoryListItem item={item} key={item.id} />
        ))}
      </Segment>
    </Segment.Group>
  );
}
