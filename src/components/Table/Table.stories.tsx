import React from "react";
import { ComponentStory } from "@storybook/react";
import VsTable from "./index";
import { columns, dataSource } from "./Table";
import "./Table.css";

export default {
  title: "Components/Table",
  component: VsTable,
};

const Template: ComponentStory<typeof VsTable> = (args) => {
  return <VsTable {...args} />;
};

export const Table = Template.bind({});
Table.args = {
  dataSource,
  className: "table-component",
  columns,
  bordered: true,
  borderProps: {
    border: "border-collapse",
  },
  fontSize: "sm",
  fontFamily: "font-mono",
  rowClassName: (row) => {
    if (row.key % 2 === 0) {
      return "even-row";
    }
    return "odd-row";
  },
};
